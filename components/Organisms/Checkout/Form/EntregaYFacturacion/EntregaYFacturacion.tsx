import AutocompleteInput from "@/components/Organisms/Checkout/AutocompleteMapsInput/AutoCompleteMapsInput";
import DatePicker from "@/components/Organisms/Checkout/DatePicker/DatePicker";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import PurpleCheckbox from "../PurpleCheckbox/PurpleCheckbox";
import ToggleOptionsButton from "../ToggleOptionsButton/ToggleOptionsButton";
import { useDispatch, useSelector } from "react-redux";
import {
  // onGetHolidays,
  onGetShippingTime,
  onGetStock,
  onGetUnavailableDays,
} from "@/state/products/productsActions";
import {
  CheckboxContainer,
  DivModo,
  Form,
  FormButton,
  FormContainer,
  FormGrid,
  FormGroup,
  FormInput,
  FormLabel,
  FormSubtitle,
  Option,
  OptionButton,
  OptionalTag,
  OptionsContainer,
  OptionsPickerContainer,
  StyledLink,
  ModalDonarColchonInfo,
  ShippingText,
  ErrorMessage,
  MandatoryText
} from "../ui/styled";
import { GeocodeInfo, IFormData, IProps, UserData } from "./types";
import { CamionSvg, Hammer, LocalSvg, PreguntaSvg, RelojSvg } from "../ui/assets";
import { getCartData } from "@/state/cart/cartSelector";
import { onAddItemToCart, onRemoveItemFromCart } from "@/state/cart/cartActions";
import { getStock, getShippintTime, /*getHolidays,*/ getUnavailableDays } from "@/state/products/productsSelector";
import Spinner from "../../Spinner/Spinner";
import { IStore } from '@/state/types';
import { onGetCpFlota, onGetDeliveryTimes } from '@/state/order/orderActions'
import { getCheckoutOnlyToPay, getCpFlota, getDeliveryTimes, getOrderExist } from '@/state/order/orderSelector'
import { skuColchonesOrBases } from "@/utils/skuColchonesOrBases"
import provincias from "@/utils/provincias.json"
import * as gtag from "@/utils/gtagEvents"
import { onGetIsPickup } from "@/state/formData/formDataActions";
import { validator } from "../ui/validator";
import ModalMaps from "./ModalMaps/ModalMaps"
import { dateFormatter } from "@/utils/dateFormatter";
import { BoldLinkEDE, ContEDE, ContainerInfoEDE, DescriptionEDE, LinkDetails, PriceEDE, TextEDE, Bold } from "./styled";
import { getLoadingAddToCart, getLoadingValues } from "@/state/loading/loadingSelector";
import { useWidth } from "@/hooks/useWidth";
import { InputMovingPH } from "@/components/Molecules/InputMovingPH/InputMovingPH";

export const EntregaYFacturacion = ({
  handleStepFormSubmit,
  goNextStep,
}: IProps) => {
  const width = useWidth();
  const dispatch = useDispatch();
  const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
  // const holidays = useSelector((state: IStore) => getHolidays(state));
  const unavailableDays = useSelector((state: IStore) => getUnavailableDays(state));
  const loadingAddToCart = useSelector((state: IStore) => getLoadingAddToCart(state));
  const loading = useSelector((state: IStore) => getLoadingValues(state));
  const infoOrderExist = useSelector((state: IStore) => getOrderExist(state));
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [switchPickupOption, setSwitchPickupOption] = useState(false); // metadato _pickup
  const [location, setLocation] = useState<GeocodeInfo | null>(null);
  const [loadingCpFlota, setLoadingCpFlota] = useState<boolean>(false);
  const cpFlota = useSelector(getCpFlota);
  const [showCheck, setShowCheck] = useState(false);
  const [checkDonar, setCheckDonar] = useState(false); //Metadato para donar ex-colchon o compromiso descansados
  const [loadingShipping, setLoadingShipping] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0); // metadato _pickuplocation 1=  godoy / 0 = santos / austria = 2
  const cartData = useSelector(getCartData);
  const stock = useSelector(getStock);
  const shippingTime = useSelector((state: IStore) => getShippintTime(state));
  const [shippingDate, setShippingDate] = useState<Date>();
  const [stockGodoy, setStockGodoy] = useState<boolean>(false);
  const [stockSantos, setStockSantos] = useState<boolean>(false);
  const [stockAustria, setStockAustria] = useState<boolean>(false);
  const [loadingStock, setLoadingStock] = useState(false);
  const [pickupTimeText, setPickupTimeText] = useState("Seleccione un dia");
  const [schedules, setSchedules] = useState<string[]>([]);
  const deliveryTimes = useSelector((state: IStore) => getDeliveryTimes(state));
  const [selectedProvince, setSelectedProvince] = useState<string>("CABA");
  const [addressError, setAddressError] = useState("")
  const [shippingText, setShippingText] = useState("")
  const [isEdeSelected, setIsEdeSelected] = useState(false);
  const [validEDE, setValidEDE] = useState(false);
  const [hasSendData, setHasSendData] = useState<boolean>(false);
  const step2Ref = useRef<HTMLDivElement | null>(null);
  
  const secondStepStorageStr = localStorage.getItem("second_step_checkout")
  const secondStepStorage = secondStepStorageStr ? JSON.parse(secondStepStorageStr) : {}
  
  const handleAddressError = (error: string) => {
    setAddressError(error)
  }

  const [hasColchon, setHasColchon] = useState(false);

  const [formData, setFormData] = useState<IFormData>({
    address: "",
    province: !checkoutOnlyToPay ? secondStepStorage?.province ?? "C" : "C",
    city: !checkoutOnlyToPay ? secondStepStorage?.city ?? "" : "",
    cityError: "",
    zipCode: !checkoutOnlyToPay ? secondStepStorage?.zipCode ?? "" : "",
    zipCodeError: "",
    placeDetails: !checkoutOnlyToPay ? secondStepStorage?.placeDetails ?? "" : "",
    placeDetailsError: "",
    isPickup: !checkoutOnlyToPay ? secondStepStorage?.isPickup ?? switchPickupOption : switchPickupOption,
    pickupOption: !checkoutOnlyToPay ? secondStepStorage?.pickupOption ?? "Envío a domicilio" : "Envío a domicilio",
    preferedTime: !checkoutOnlyToPay ? secondStepStorage?.preferedTime ?? "" : "",
    selectedPickUpStore: !checkoutOnlyToPay ? secondStepStorage?.selectedPickUpStore ?? "Santos Dumont 3506" : "Santos Dumont 3506",
    preferedDate: !checkoutOnlyToPay ? new Date(secondStepStorage?.preferedDate) ?? new Date() : new Date() ,
    notes: !checkoutOnlyToPay ? secondStepStorage?.notes ?? "" : "",
    coordinatesGps: "",
    coordinatesAddress: "",
    notesError: "",
  });

  const formatDate = (dateStr: string | undefined) => {
    if(typeof dateStr == "string") {
      const parts = dateStr.split("/");
      const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      return new Date(formattedDate);
    }

    return new Date()
  }

  const cartAndCpValidToEDE = (cp: number): boolean => {

    const hasColchonesOrBases = cartData?.items.some((product) => {
      const skus = skuColchonesOrBases();
      return skus.includes(product.sku)
    });

    return (cp >= 1000 && cp <= 1600) && hasColchonesOrBases ? true : false
  }

  const [sendData, setSendData] = useState<UserData>({
    address: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.address_1,
    province: !checkoutOnlyToPay ? "CABA" : infoOrderExist?.order_data?.shipping?.state,
    city: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.city,
    zipCode: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.postcode,
    placeDetails: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.address_2,
    isPickup: !checkoutOnlyToPay ? switchPickupOption : infoOrderExist?.order_data?.shipping?.is_pickup,
    pickupOption: !checkoutOnlyToPay ? "Envío a domicilio" : (infoOrderExist?.order_data?.shipping?.is_pickup ? "Retirar en nuestro locales" : "Envío a domicilio"),
    preferedTime: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.shipping_time,
    selectedPickUpStore: !checkoutOnlyToPay ? 
    "Santos Dumont 3506" 
    : (infoOrderExist?.order_data?.shipping?.pickup_location === "Chacarita") ? 
      "Santos Dumont 3506" 
      : (infoOrderExist?.order_data?.shipping?.pickup_location === "Austria") ?
      "Santa Fe 2999"
      : "Godoy Cruz 1737",
    preferedDate: !checkoutOnlyToPay ? new Date() : formatDate(infoOrderExist?.order_data?.shipping?.shipping_date),
    coordinatesAddress: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.latlon,
    coordinatesGps: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.shipping?.latlongps,
    notes: "",
  });

  let isFormDataSubmited =
    !formData.address ||
    !formData.province ||
    !formData.city ||
    !formData.zipCode;

  let isSubmitDisabled =
    formData.notesError ||
    formData.placeDetailsError ||
    formData.zipCodeError ||
    formData.cityError ||
    addressError ||
    !formData.address ||
    !formData.province ||
    !formData.city ||
    !formData.zipCode ||
    loadingShipping ||
    (
      !formData.isPickup 
      ? !formData.preferedTime 
        || !formData.preferedDate
        || !shippingDate
      : false
    )
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     setHasSendData(true)
    e.preventDefault();
    if (isSubmitDisabled) {
      step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
      setTimeout(() => {
        setHasSendData(false)
      }, 1000)
    } else {
    setSendData({
      address: formData.address,
      province: formData.province,
      city: formData.city,
      zipCode: formData.zipCode,
      placeDetails: formData.placeDetails,
      isPickup: formData.isPickup,
      pickupOption: formData.pickupOption,
      preferedTime: formData.preferedTime,
      selectedPickUpStore: formData.selectedPickUpStore,
      preferedDate: formData.preferedDate,
      notes: formData.notes,
      coordinatesGps: formData.coordinatesGps,
      coordinatesAddress: formData.coordinatesAddress
    })
    }
  };

  useEffect(() =>{
    const dataLoaded = 
    sendData.address != "" &&
    sendData.city != "" &&
    sendData.province != "" &&
    sendData.zipCode != "" &&
    sendData.pickupOption != "" &&
    (
      formData.isPickup 
      ? sendData.selectedPickUpStore != ""  
      : sendData.preferedTime != "" && sendData.preferedTime != null
    )
    
    if (dataLoaded){
      const {
        pickupOption,
        preferedTime,
        selectedPickUpStore,
        preferedDate,
        ...slicedSendData
      } = sendData;
      if (pickupOption === "Envío a domicilio") {
        handleStepFormSubmit("secondStep", {
          ...slicedSendData,
          preferedDate,
          preferedTime,
          pickupOption,
          checkDonar,
        });

        localStorage.setItem("second_step_checkout", JSON.stringify(sendData));

        goNextStep();

        gtag.event("checkout_progress", {
          "checkout_step": 2,
          "event_category": "Enhanced-Ecommerce",
          "event_label":"checkout_step_2",
          "items":cartData?.items,
          "non_interaction": true 
        })
      } else {
        handleStepFormSubmit("secondStep", {
          ...slicedSendData,
          selectedPickUpStore,
          pickupOption,
          checkDonar,
        });

        localStorage.setItem("second_step_checkout", JSON.stringify(sendData));

        goNextStep();

        gtag.event("checkout_progress", {
          "checkout_step": 2,
          "event_category": "Enhanced-Ecommerce",
          "event_label":"checkout_step_2",
          "items":cartData?.items,
          "non_interaction": true 
        })
      }
    }
  }, [sendData])

  useEffect(() => {
    if(!validEDE) {
      const keyEDE = cartData?.items?.find(item => item.id === 2024353)
      if(keyEDE && keyEDE !== undefined) {
        dispatch(onRemoveItemFromCart(keyEDE.key))
      }
    }
  }, [validEDE])

  useEffect(() => {
      const keyEDE = cartData?.items?.find(item => item.id === 2024353)

      if(validEDE) {
        if(isEdeSelected) {
          const existsEDE = cartData?.items.find(item => item.id === 2024353);
          !existsEDE && dispatch(onAddItemToCart(2024353, 1))
        } else {
          if(keyEDE && keyEDE !== undefined) {
            dispatch(onRemoveItemFromCart(keyEDE.key))
          }
        }
      } else {
        setIsEdeSelected(false)
        if(keyEDE && keyEDE !== undefined) {
          dispatch(onRemoveItemFromCart(keyEDE.key))
        }
      }
  }, [isEdeSelected])

  useEffect(() => {

    if(formData.zipCode && formData?.zipCode.length === 4) {
      const isValidEde = cartAndCpValidToEDE(parseInt(formData.zipCode));
      setValidEDE(isValidEde)

      if(cartData?.items) {
        const skuItemsCart = cartData?.items.map(item => item.sku);
        skuItemsCart && dispatch(onGetUnavailableDays(parseInt(formData.zipCode), skuItemsCart))
      }

    }

  }, [formData.zipCode, cartData?.items])

  const handleDeliveryOptions = () => {
    setShowDeliveryOptions(!showDeliveryOptions);

    if (!showDeliveryOptions) {
      setFormData({ ...formData, preferedDate: null, preferedTime: null });
    } else if (shippingDate) {
      setFormData({
        ...formData,
        pickupOption: "Envío a domicilio",
        preferedDate: shippingDate,
      });
    }
  };

  const queryDeliveryTimes = (date: Date, postalcode: string) => {
    const Querydate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    dispatch(onGetDeliveryTimes(Querydate, postalcode));
    setPickupTimeText("Cargando...");
  };

  useEffect(() => {
    if (location && location.address && location.city && location.province) {
      setFormData({ 
        ...formData, 
        coordinatesGps: location.coordinatesGps,
        coordinatesAddress: location.coordinatesAddress
      });
      if ( location.province === "Provincia de Buenos Aires") {
        setFormData({ ...formData, ...location, province: provincias[1].value});
        setSelectedProvince(provincias[1].name)
      } else if(location.province === "Cdad. Autónoma de Buenos Aires") {
        setFormData({ ...formData, ...location, province: provincias[0].value});
        setSelectedProvince(provincias[0].name)
      } else {
        for (let index = 0; index < provincias.length; index++) {
          if (provincias[index].name === location.province) {
            setFormData({ ...formData, ...location, province: provincias[index].value });
            setSelectedProvince(provincias[index].name)
          }
        }
      }
    } else if (location && location.address) {
      setFormData({ 
        ...formData, 
        address:  location.address,
        coordinatesGps: location.coordinatesGps,
        coordinatesAddress: location.coordinatesAddress
      });
    }
  }, [location]);

  useEffect(() => {                
    if (formData.zipCode && shippingDate && !switchPickupOption) {
      setFormData({ ...formData, preferedDate: shippingDate });
    }

    if (switchPickupOption) {
      setFormData({
        ...formData,
        pickupOption: "Retirar en nuestro locales",
        preferedDate: null,
        preferedTime: null,
      });
    } else if (deliveryTimes && formData.zipCode && !switchPickupOption) {
      setFormData({ ...formData, pickupOption: "Envío a domicilio" });
      setDefaultTime(deliveryTimes[parseInt(formData.zipCode)]);
    }

    setFormData({ ...formData, isPickup: switchPickupOption });
    dispatch(onGetIsPickup(switchPickupOption));
  }, [switchPickupOption]);

  useEffect(() => {
    if (showDeliveryOptions && formData.preferedDate && formData.zipCode) {
      queryDeliveryTimes(formData.preferedDate, formData.zipCode);
    }
  }, [formData.preferedDate]);

  const setDefaultTime = (intervals: string[]) => {
    
    const currentHour = new Date().getHours();
    let timeDefault = null;
    if (intervals) {
      for (let i = 0; i < intervals.length; i++) {
        const startHour = parseInt(intervals[i].split(" ")[1].split(":")[0]);
        const endHour = parseInt(intervals[i].split(" ")[3].split(":")[0]);

        if (currentHour >= startHour && currentHour <= endHour) {
          timeDefault = intervals[i];
          break;
        }
      }
    }

    if (!intervals) {
      setFormData({ ...formData, zipCodeError: "Codigo Postal no valido" });
    } else if (timeDefault === null) {
      setFormData({ ...formData, preferedTime: intervals[0] });
      return;
    }

    setFormData({ ...formData, preferedTime: timeDefault });
    setLoadingShipping(false)
    return;
  };

  useEffect(() => {
    if (
      deliveryTimes &&
      formData.zipCode &&
      showDeliveryOptions &&
      deliveryTimes[parseInt(formData.zipCode)]
    ) {
      setPickupTimeText("Seleccione un horario");
      setSchedules(deliveryTimes[parseInt(formData.zipCode)]);
      setFormData({ ...formData, preferedTime: deliveryTimes[parseInt(formData.zipCode)][0] });
    } else if (
      !showDeliveryOptions &&
      !switchPickupOption &&
      deliveryTimes &&
      formData.zipCode
    ) {
      setDefaultTime(deliveryTimes[parseInt(formData.zipCode)]);
    }

    if (
      deliveryTimes &&
      formData.zipCode &&
      !deliveryTimes[parseInt(formData.zipCode)]
    ) {
      setPickupTimeText("Sin horarios disponibles");
    }
  }, [deliveryTimes]);

  useEffect(() => {
    if (
      !showDeliveryOptions &&
      !switchPickupOption &&
      deliveryTimes &&
      formData.zipCode
    ) {
      setDefaultTime(deliveryTimes[parseInt(formData.zipCode)]);
    }
  }, [showDeliveryOptions]);

  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isProvinceOpen, setIsProvinceOpen] = useState(false);

  const [donarColchonModal, setDonarColchonModal] = useState(false);
  const [EDEModal, setEDEModal] = useState(false);

  const modalHandler = () => {
    setDonarColchonModal(!donarColchonModal);
  };

  const modalHandlerEDE = () => {
    setEDEModal(!EDEModal);
  };

  const handleLoadingShipping = () => {
    setLoadingShipping(!loadingShipping);
  };

  useEffect(() => {
    if (shippingTime && formData.zipCode) {
      const shippingDate = new Date(shippingTime.data.real_date);
      setShippingText(dateFormatter(shippingDate))
      setShippingDate(shippingDate);
      setFormData({ ...formData, preferedDate: shippingDate });
      queryDeliveryTimes(shippingDate, formData.zipCode);
      handleLoadingShipping();
    }
  }, [shippingTime]);

  useEffect(() => {
    
    if(!formData.isPickup) {
      let skus: string[] = [];
      if (formData.zipCode && formData?.zipCode.length === 4 && cartData) {
        cartData.items.map((item) => {
          skus.push(item.sku);
        });
        handleLoadingShipping();
        dispatch(onGetShippingTime(formData.zipCode, skus));
      }

      // const hasColchonesOrBases = cartData?.items.some((product) => {
      //   const skus = skuColchonesOrBases();
      //   return skus.includes(product.sku)
      // });

      if (
        formData.zipCode 
        && formData.zipCode?.length === 4
        // && hasColchonesOrBases
      ) {
        setLoadingCpFlota(true);
        dispatch(onGetCpFlota());
      } else {
        setShowCheck(false);
      }

      const isCp = cpFlota?.find(
        (element) => element === formData.zipCode
      );

      // cartData?.items.forEach((product) => {
      //   if (product.id === 2024353 && !isCp && formData.zipCode?.length === 4) {
      //     dispatch(onRemoveItemFromCart(product.key));
      //   }
      // });

      if(!validEDE) {
        setIsEdeSelected(false)
        cartData?.items.forEach((product) => {
          if (product.id === 2024353 && !isCp && formData.zipCode?.length === 4) {
            dispatch(onRemoveItemFromCart(product.key, product.name));
          }
        });
      }
    }
  }, [formData.zipCode, formData.isPickup, cartData?.items]);

  useEffect(() => {
    const hasColchonesOrBases = cartData?.items.some((product) => {
      const skus = skuColchonesOrBases();
      return skus.includes(product.sku)
    });
    setHasColchon(!!hasColchonesOrBases)

  }, [cartData?.items])

  useEffect(() => {
    if (cpFlota && formData.zipCode?.length === 4) {
      
      if (cpFlota.includes(formData.zipCode)) {
        setShowCheck(true);
        setLoadingCpFlota(false);
      } else {
        setLoadingCpFlota(false);
        setShowCheck(false);
        cartData?.items.forEach((product) => {
          if (product.sku[0] === "O") {
            dispatch(onRemoveItemFromCart(product.key, product.name));
          }
        });
      }
    }
  }, [cpFlota, formData.zipCode]);

  useEffect(() => {
    dispatch(onGetStock());
    // dispatch(onGetHolidays());
    setLoadingStock(true);
  }, []);

  useEffect(() => {
    if (stock && cartData) {
      setLoadingStock(false);
      let products = cartData.items.map((product) => product);
      const DEPO_GODOY = 5;
      const DEPO_SANTOS = 6;
      const DEPO_AUSTRIA = 26;

      const godoyAvailable = products.every(
        (products) =>
          stock[DEPO_GODOY]?.[products.sku]?.available_qty >= products.quantity
      );
      const santosAvailable = products.every(
        (products) =>
          stock[DEPO_SANTOS]?.[products.sku]?.available_qty >= products.quantity
      );
      const austriaAvailable = products.every(
        (products) =>
          stock[DEPO_AUSTRIA]?.[products.sku]?.available_qty >= products.quantity
      );

      setStockGodoy(godoyAvailable);
      setStockSantos(santosAvailable);
      setStockAustria(austriaAvailable);
    }
  }, [stock, cartData]);

  useEffect(() =>{
    if (stockSantos) {
      setActiveIndex(0)
      setFormData({
        ...formData,
        selectedPickUpStore: "Santos Dumont 3506",
      });
    } else if (stockGodoy && !stockSantos && !stockAustria) {
      setActiveIndex(1)
      setFormData({
        ...formData,
        selectedPickUpStore: "Godoy Cruz 1737",
      });
    } else if (stockAustria && !stockGodoy && !stockSantos) {
      setActiveIndex(2)
      setFormData({
        ...formData,
        selectedPickUpStore: "Santa Fe 2999",
      });
    }
  }, [stockGodoy, stockSantos, stockAustria])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(validator(e.target.name, e.target.value, formData))
  }

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(validator(e.target.name, e.target.value, formData, true))
  }

  return (
    <FormContainer ref={step2Ref}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormGrid>
          <FormGroup $cols="2">
            <AutocompleteInput submitLocation={setLocation} locationState={location} handleError={handleAddressError} addressError={addressError !== "" || (hasSendData && !formData.address)}/>
            {addressError && (
              <ErrorMessage>{addressError}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup $cols="2">
            <InputMovingPH
              error={formData.placeDetailsError ? true : false}
              errorMark={hasSendData && (formData.placeDetailsError ? true : false)}
              input={{
                label: "Departamento (Opcional)",
                name: "placeDetails",
                value: formData?.placeDetails,
                error: formData.placeDetailsError,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>

          <FormGroup $cols="2">
            <OptionsPickerContainer>
              <ToggleOptionsButton
                activeCondition={isProvinceOpen}
                action={() => {
                  setIsProvinceOpen(!isProvinceOpen);
                }}
                innerText={selectedProvince}
              >
                {isProvinceOpen && (
                  <OptionsContainer>
                    {provincias?.map((provincia, index) => (
                      <Option
                        key={index}
                        onClick={() => {
                          setFormData({
                            ...formData,
                            province: provincia.value,
                          });
                          setSelectedProvince(provincia.name);
                        }}
                      >
                        {provincia.name}
                      </Option>
                    ))}
                  </OptionsContainer>
                )}
              </ToggleOptionsButton>
            </OptionsPickerContainer>
            <FormLabel>Provincia <MandatoryText>*</MandatoryText></FormLabel>
          </FormGroup>

          <FormGroup $cols="2">
            <InputMovingPH
              error={formData.cityError ? true : false}
              errorMark={hasSendData && (formData.cityError ? true : false)}
              isMandatory
              input={{
                label: "Localidad",
                name: "city",
                value: formData?.city,
                error: formData.cityError,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>

          <FormGroup $cols="2">
            <InputMovingPH
              error={formData.zipCodeError ? true : false}
              errorMark={hasSendData && (formData.zipCodeError ? true : false)}
              isMandatory
              input={{
                label: "Código postal",
                name: "zipCode",
                value: formData?.zipCode,
                error: formData.zipCodeError,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>

        </FormGrid>

        <p>¿Cómo querés recibir tu pedido?</p>
        <FormGrid>
          <OptionButton
            $selected={switchPickupOption}
            type="button"
            onClick={() => {
              setSwitchPickupOption(false);
              setFormData({ ...formData, pickupOption: "Envío a domicilio" });
            }}
          >
            <CamionSvg />
            <div>
              <p>Envío a domicilio</p>
              {formData.zipCode?.length === 4 ? (
                loadingShipping ? (
                  <Spinner isBlack />
                ) : shippingText/*  && formData.preferedTime */ && (
                  <ShippingText>
                    Llega el {shippingText} {formData.preferedTime}
                  </ShippingText>
                )
              ) : (
                <OptionalTag>Completá tus datos para continuar</OptionalTag>
              )}
            </div>
          </OptionButton>

          {
            !switchPickupOption && (
              width <= 1024 && showCheck &&(
                <div>
                  <CheckboxContainer
                    $disabled={Boolean(isFormDataSubmited || loadingShipping)}
                  >
                    <PurpleCheckbox
                      action={() => handleDeliveryOptions()}
                      disabled={Boolean(isFormDataSubmited || loadingShipping)}
                      text="Quiero elegir el día de entrega"
                      isSquare
                    />
                  </CheckboxContainer>
    
                  {showDeliveryOptions && (
                    <FormGrid>
                      <FormGroup>
                        <FormSubtitle>Fecha preferida de entrega</FormSubtitle>
                        <DatePicker
                          startDate={shippingDate}
                          active={isDatePickerOpen}
                          // disableDates={holidays}
                          disableDates={unavailableDays}
                          setDate={(date) => {
                            if (date) {
                              setFormData({ ...formData, preferedDate: date });
                              setShippingText(dateFormatter(date))
                            }
                          }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormSubtitle>Horario preferido de entrega</FormSubtitle>
                        <OptionsPickerContainer>
                          <ToggleOptionsButton
                            activeCondition={isTimePickerOpen}
                            action={() => {
                              setIsTimePickerOpen(!isTimePickerOpen);
                              setIsDatePickerOpen(false);
                            }}
                            innerText={formData?.preferedTime || pickupTimeText}
                          >
                            <RelojSvg />
                            {isTimePickerOpen && (
                              <OptionsContainer>
                                {schedules?.map((interval, index) => (
                                  <Option
                                    key={index}
                                    onClick={() =>
                                      setFormData({
                                        ...formData,
                                        preferedTime: interval,
                                      })
                                    }
                                  >
                                    {interval}
                                  </Option>
                                ))}
                              </OptionsContainer>
                            )}
                          </ToggleOptionsButton>
                        </OptionsPickerContainer>
                      </FormGroup>
                    </FormGrid>
                  )}
                </div>
              )
          )
          }
          {
            (loadingStock || (stockGodoy || stockSantos)) && 
            <OptionButton
              type="button"
              $selected={!switchPickupOption}
              onClick={() => {
                setSwitchPickupOption(true);
                setShowDeliveryOptions(false);
                setFormData({
                  ...formData,
                  pickupOption: "Retirar en nuestro locales",
                });
              }}
              disabled={!stockGodoy && !stockSantos}
            >
              <LocalSvg />
              <div>
                <p>Retirar en nuestros locales</p>
                {
                  loadingStock && <OptionalTag>Cargando..</OptionalTag>
                }
              </div>
            </OptionButton>
          }
        </FormGrid>

        {!switchPickupOption ? (
            width >= 1024 && showCheck &&(
              <div>
                <CheckboxContainer
                  $disabled={Boolean(isFormDataSubmited || loadingShipping)}
                >
                  <PurpleCheckbox
                    action={() => handleDeliveryOptions()}
                    disabled={Boolean(isFormDataSubmited || loadingShipping)}
                    text="Quiero elegir el día de entrega"
                    isSquare
                  />
                </CheckboxContainer>
  
                {showDeliveryOptions && (
                  <FormGrid>
                    <FormGroup>
                      <FormSubtitle>Fecha preferida de entrega</FormSubtitle>
                      <DatePicker
                        startDate={shippingDate}
                        active={isDatePickerOpen}
                        // disableDates={holidays}
                        disableDates={unavailableDays}
                        setDate={(date) => {
                          if (date) {
                            setFormData({ ...formData, preferedDate: date });
                            setShippingText(dateFormatter(date))
                          }
                        }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormSubtitle>Horario preferido de entrega</FormSubtitle>
                      <OptionsPickerContainer>
                        <ToggleOptionsButton
                          activeCondition={isTimePickerOpen}
                          action={() => {
                            setIsTimePickerOpen(!isTimePickerOpen);
                            setIsDatePickerOpen(false);
                          }}
                          innerText={formData?.preferedTime || pickupTimeText}
                        >
                          <RelojSvg />
                          {isTimePickerOpen && (
                            <OptionsContainer>
                              {schedules?.map((interval, index) => (
                                <Option
                                  key={index}
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      preferedTime: interval,
                                    })
                                  }
                                >
                                  {interval}
                                </Option>
                              ))}
                            </OptionsContainer>
                          )}
                        </ToggleOptionsButton>
                      </OptionsPickerContainer>
                    </FormGroup>
                  </FormGrid>
                )}
              </div>
            )
        ) : (
          <div>
            <p>Retirás tu pedido por</p>
            {stockSantos && (
              <CheckboxContainer>
                <PurpleCheckbox
                  action={() => {
                    setActiveIndex(0);
                    setFormData({
                      ...formData,
                      selectedPickUpStore: "Santos Dumont 3506",
                    });
                  }}
                  isActive={activeIndex === 0}
                  text="Santos Dumont 3506, Chacarita, CABA "
                  greenText="Lunes a domingo de 11 a 20 hs."
                />
                <StyledLink>
                  <ModalMaps local="Chacarita"/>
                </StyledLink>
              </CheckboxContainer>
            )}
            {stockGodoy && (
              <CheckboxContainer>
                <PurpleCheckbox
                  action={() => {
                    setActiveIndex(1);
                    setFormData({
                      ...formData,
                      selectedPickUpStore: "Godoy Cruz 1737",
                    });
                  }}
                  isActive={activeIndex === 1}
                  text="Godoy Cruz 1737, Palermo, CABA "
                  greenText="Lunes a domingo de 11 a 20 hs."
                />
                <StyledLink>
                  <ModalMaps local="Palermo"/>
                </StyledLink>
              </CheckboxContainer>
            )}
            {stockAustria && (
              <CheckboxContainer>
                <PurpleCheckbox
                  action={() => {
                    setActiveIndex(2);
                    setFormData({
                      ...formData,
                      selectedPickUpStore: "Santa Fe 2999",
                    });
                  }}
                  isActive={activeIndex === 2}
                  text="Santa Fe 2999, Austria, CABA"
                  greenText="Lunes a domingo de 11 a 20 hs."
                />
                <StyledLink>
                  <ModalMaps local="Austria"/>
                </StyledLink>
              </CheckboxContainer>
            )}
          </div>
        )}

        {
          validEDE && !switchPickupOption && (
            <>
            <ContainerInfoEDE>
                <p>¿Necesitás ayuda armando tu nueva cama? (Opcional)</p>
                <DivModo onClick={() => modalHandlerEDE()}>
                    <ContEDE
                      onClick={() => modalHandlerEDE()}
                    >
                      <PreguntaSvg />
                    </ContEDE>
                    <ModalDonarColchonInfo $isVisible={EDEModal}>
                      <span>Si querés saber más de este servicio </span>

                      <LinkDetails 
                      href="https://calmessimple.com.ar/producto/entrega-de-ensueno/" 
                      target="blank"
                      onClick={() => modalHandlerEDE()}
                      >
                        <BoldLinkEDE>hacé click acá</BoldLinkEDE>
                      </LinkDetails>
                    </ModalDonarColchonInfo>
                </DivModo>
            </ContainerInfoEDE>
              <FormGrid>
                <OptionButton
                  disabled={loadingShipping || loadingAddToCart || loading?.loadingDeleteToCart}
                  type="button"
                  $selected={!isEdeSelected}
                  onClick={() => {
                    setIsEdeSelected(!isEdeSelected);
                  }}
                >
                  <Hammer/>
                    <div>
                      <p><PriceEDE>+$21.000</PriceEDE> Entrega de ensueño</p>
                      <DescriptionEDE>Armamos tus productos en tu casa</DescriptionEDE>
                      {
                        (loadingAddToCart || loading?.loadingDeleteToCart) && <Spinner isBlack />
                      }
                    </div>
                </OptionButton>
              </FormGrid>
            </>
          )
        }

        {location && (
          <FormGroup>
            <InputMovingPH
              error={formData.notesError ? true : false}
              errorMark={hasSendData && (formData.notesError ? true : false)}
              input={{
                label: "Notas de pedido (Opcional)",
                name: "notes",
                value: formData?.notes,
                error: formData.notesError,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>
        )}

        {loadingCpFlota && <Spinner isBlack />}
        {showCheck && hasColchon && (
          <CheckboxContainer>
            <PurpleCheckbox
              action={() => setCheckDonar(!checkDonar)}
              text="Quiero donar mi ex-colchón"
              isSquare
            />
            <DivModo>
              <div
                onMouseEnter={() => modalHandler()}
                onMouseLeave={() => modalHandler()}
              >
                <PreguntaSvg />
              </div>
              <ModalDonarColchonInfo $isVisible={donarColchonModal}>
                <p>
                ¡Podes donar tu ex-colchón! Lo retiramos durante tu entrega y nos aseguramos de buscarle un nuevo hogar 💛
                </p>
              </ModalDonarColchonInfo>
            </DivModo>
          </CheckboxContainer>
        )}

        <FormButton type="submit"/*  disabled={!!isSubmitDisabled} */>
          {/* {isSubmitDisabled ? "Completá tus datos" : "Continuar a forma de Pago"} */}
          Continuar a Forma de Pago
        </FormButton>
      </Form>
    </FormContainer>
  );
};
