import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import archivos from "./archivos";
// import paymentMethodsLocalm from "@/utils/payment_methods_punto_localm.json";
import paymentMethodsLocalm from "@/utils/payment_methods_punto_localm_fiserv.json";
import locales from "@/utils/locales.json";
import {
  WIBOND,
  BACS,
  PAYWAY,
  MODO,
  CASH,
  MERCADO_PAGO,
  LOCALM_GATEWAY,
  FISERV
} from "@/utils/payment_methods";
import {EXCEDE_CUOTAS_MAX, FECHA_VENCIMIENTO_ERRONEA, FONDOS_INSUFICIENTES, INGRESO_DATOS_INCORRECTO, NECESITA_AUTORIZACION_1, NECESITA_AUTORIZACION_2, NECESITA_AUTORIZACION_3, PIN_INCORRECTO, REINTENTAR_LUEGO_1, REINTENTAR_LUEGO_2, TRANSACCION_NO_PERMITIDA_1, TRANSACCION_NO_PERMITIDA_2} from "@/utils/payway_error_codes"
import {
  FormContainer,
  Form,
  FormGrid,
  FormGroup,
  FormLabel,
  FormInput,
  OptionsPickerContainer,
  CheckboxContainerPayment,
  OptionsContainer,
  Option,
  FormButton,
  ErrorMessage,
  FormCheckout,
  MandatoryText,
  DivModo,
} from "@/components/Organisms/Checkout/Form/ui/styled";
import PurpleCheckbox from "../PurpleCheckbox/PurpleCheckbox";
import ToggleOptionsButton from "../ToggleOptionsButton/ToggleOptionsButton";
import {
  PagoDiv,
  Img,
  Violet,
  StyledInputMask,
  DivText,
  StyledDataPickerContainer,
  PaymentContainer,
  DatePickerContainer,
  DivImgCards,
  DivCardsModal,
  ImgModalCards,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  onGetCardInfo,
  onSendOrderData,
  onClearError,
  onSendOrderLinkToPayData,
  onCleanInfoOrderExists,
  onDefineCheckoutPath
} from "@/state/order/orderActions";
import { IStore } from "@/state/types";
import {
  getCardInfoSelector,
  getCheckoutOnlyToPay,
  getCreatedOrder,
  getOrderExist,
  getTransactionError,
  getPublicIpClient,
  getCheckoutPath,
} from "@/state/order/orderSelector";
import {
  getLoadingCardInfo,
  getLoadingPay,
} from "@/state/loading/loadingSelector";
import {
  onGetPayLoadingStart,
  onGetPayLoadingFinished,
} from "@/state/loading/loadingActions";
import { getCartData } from "@/state/cart/cartSelector";
import { useScript } from "@/hooks/useScript";
import { IProps, DataToValidate, DataPLocalm } from "./types";
import { formatMonth, formatYear } from "./utils";
import { getPaymentIntentionModo } from "@/state/modo/modoSelector";
import skuWithInstallments from "@/jsons/skuWithInstallments.json";
import Spinner from "@/components/Organisms/Checkout/Spinner/Spinner";
import * as gtag from "@/utils/gtagEvents";
import { onGetModoResp } from "@/state/modo/modoActions";
import { useRouter } from "next/router";
import { validator } from "../ui/validator";
import { getUserIsLogged } from "@/state/user/userSelector";
import { formatNumber } from "@/utils/formatPrices";
import { sendClarityCustomEvent } from "@/lib/clarity";
import { onLogCheckoutForm } from "@/state/user/userActions";
import { bines_hipotecario } from "@/utils/bines_hipotecario";

function Pagos({ handleStepFormSubmit, currentStep, userDataForm }: IProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
  const loadingPay = useSelector(getLoadingPay);
  const cardInfo = useSelector((state: IStore) => getCardInfoSelector(state));
  const cartData = useSelector((state: IStore) => getCartData(state));
  const [hasColchonoBase, setHasColchonoBase] = useState(false);
  const ipClient = useSelector((state: IStore) => getPublicIpClient(state));
  const orderCreatedInfo = useSelector((state: IStore) =>
  getCreatedOrder(state)
  );
  const transactionError = useSelector((state: IStore) =>
    getTransactionError(state)
  );
  const [fechaVencimiento, setFechaVencimiento] = useState<Date>();

  const cuotasFiservCompletas = [
    { cuota: "1 cuota sin interés", installment: 1 },
    { cuota: "3 cuotas sin interés", installment: 3 },
    { cuota: "6 cuotas sin interés", installment: 6 },
    { cuota: "12 cuotas sin interés", installment: 12 },
  ];

  const [cuotasPW, setCuotasPW] = useState([
    { cuota: "Elegí las cuotas", installment: 0 },
  ]);

  const [cuotasFiserv, setCuotasFiserv] = useState([
    { cuota: "1 cuota sin interés", installment: 1 },
    { cuota: "3 cuotas sin interés", installment: 3 },
    { cuota: "6 cuotas sin interés", installment: 6 },
    { cuota: "12 cuotas sin interés", installment: 12 },
  ])

  const obtain_index_payment_method = (method_to_find: string) => 
    list_payment_methods.findIndex(item => item.method === method_to_find)

  const list_payment_methods = [
    {
      method: PAYWAY,
      title: "Tarjeta de crédito o débito",
      description: `Hasta ${hasColchonoBase ? 12 : 6} cuotas sin interés.`,
      greenText: true
    },
    // {
    //   method: FISERV,
    //   title: "Tarjeta de crédito o débito",
    //   description: `Hasta ${hasColchonoBase ? 12 : 6} cuotas sin interés.`,
    //   greenText: true
    // },
    // {
    //   method: PAYWAY,
    //   title: "Pagá con tu tarjeta del Banco Hipotecario",
    //   description: `Hasta 24 cuotas sin interés.`,
    //   greenText: true
    // },
    {
      method: BACS,
      title: "Transferencia bancaria",
      description: `Hasta ${hasColchonoBase ? "20%" : "10%"} OFF adicional.`,
      outletDescription: "Método disponible para carrito con productos de feria.",
      greenText: true
    },
    {
      method: WIBOND,
      title: "Wibond",
      description: "Pagá hasta en 6 cuotas sin tarjeta.",
      greenText: true
    },
    {
      method: MODO,
      title: "MODO",
      description: "Pagá hasta en 6 cuotas sin tarjeta." ,
      greenText: true
    },
    {
      method: CASH,
      title: "Efectivo",
      description: `Pagá en nuestros locales ${hasColchonoBase ? "20%" : "10%"} OFF adicional.`,
      greenText: true
    },
    {
      method: LOCALM_GATEWAY,
      title: "Punto Localm",
      description: "Método de pago exclusivo para el equipo de Customer de Calm",
      greenText: false
    },
    {
      method: MERCADO_PAGO,
      title: "Mercado Pago",
      description: "Aboná con el saldo de tu cuenta",
      greenText: false
    },
  ]

  const available_methods = [FISERV, PAYWAY, BACS, /*WIBOND,*/ MODO, CASH];

  const INDEX_FISERV = obtain_index_payment_method(FISERV);
  const INDEX_PAYWAY = obtain_index_payment_method(PAYWAY);
  const INDEX_BACS = obtain_index_payment_method(BACS);
  const INDEX_WIBOND = obtain_index_payment_method(WIBOND);
  const INDEX_MODO = obtain_index_payment_method(MODO);
  const INDEX_CASH = obtain_index_payment_method(CASH);
  const INDEX_LOCALM_GATEWAY = obtain_index_payment_method(LOCALM_GATEWAY);
  const INDEX_MERCADO_PAGO = obtain_index_payment_method(MERCADO_PAGO);

  // const [withHipotecario, setWithHipotecario] = useState(false);
  const [cuotasLoading, setCuotasLoading] = useState(true);
  const [maxLengthCvv, setMaxLengthCvv] = useState(3);
  const [imagen, setImagen] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sdkPW, setSdkPW] = useState(Object);
  const [nCard, setNCard] = useState({
    card: "",
    cardError: ""
  });
  const [showCardsModal, setShowCardsModal] = useState(false);
  const [errorfix, setErrorFix] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isCuotas, setIsCuotas] = useState(false);
  const [openMethods, setOpenMethods] = useState(false);
  const [openLocales, setOpenLocales] = useState(false);
  const [loadScriptPWOneTime, setLoadScriptPWOneTime] = useState(false);
  const [clickToSend, setClickToSend] = useState(false);
  const [loadScriptModoOneTime, setLoadScriptModoOneTime] = useState(false);
  const [showModo, setshowModo] = useState(false);
  const [sdkModo, setSdkModo] = useState(Object);
  const [showIdTransaction, setShowIdTransaction] = useState(true);
  const [showLastDigits, setShowLastDigits] = useState(true);
  const paymentModo = useSelector(getPaymentIntentionModo);
  const infoOrderExist = useSelector((state: IStore) => getOrderExist(state));
  const [tokenPW, setTokenPW] = useState({});
  const [hasFeria, setHasFeria] = useState(false)
  const [userLogged, setUserLogged] = useState(false)
  const [formData, setFormData] = useState<DataToValidate>({
    card: "",
    cardError: "",
    nombreTitular: "",
    nombreTitularError: "",
    fechaVencimiento: new Date(),
    fechaVencimientoError: "",
    dni: "",
    dniError: "",
    codigoSeguridad: "",
    codigoSeguridadError: "",
    preferedCuotas: { cuota: "Elegí las cuotas", installment: 0 },
  });

  const [formFiserv, setFormFiserv] = useState<any>({
    installments: 0,
    title: "Elegí la cantidad de cuotas"
  })

  const [formPLocalm, setFormPLocalm] = useState<DataPLocalm>({
    methodTitle: "Elegí el método de pago",
    methodCode: "",
    localmTitle: "Elegí el localm",
    localmCode: "",
    idTransaction: "",
    idTransactionError: "",
    lastFourDigits: "",
    lastFourDigitsError: "",
  })

  const userStatus = useSelector((state: IStore) => getUserIsLogged(state));

  useEffect(() => {
    if(userStatus?.data) {
      setUserLogged(true)
    }
  }, [userStatus])

  useEffect(() => {
    setFormPLocalm((prevState) => ({ ...prevState, idTransaction: "" , lastFourDigits: ""}));
    if(
      formPLocalm.methodTitle === "EFECTIVO" ||
      formPLocalm.methodTitle === "TRANSFERENCIA" ||
      formPLocalm.methodTitle === "MODO"
    ) {
      setShowLastDigits(false);

      if(formPLocalm.methodTitle === "EFECTIVO") {
        setShowIdTransaction(false);
      } else {
        setShowIdTransaction(true);
      }

    } else {
      setShowLastDigits(true);
      setShowIdTransaction(true);
    }

  }, [formPLocalm.methodTitle])

  const today = new Date();
  const loadingCardInfo = useSelector((state: IStore) =>
    getLoadingCardInfo(state)
  );

  useEffect(() => {

    if(!hasColchonoBase) {
      const availableInstallments = cuotasFiserv.filter(c => (c.installment !== 12))
      setCuotasFiserv(availableInstallments)
    } else {
      setCuotasFiserv(cuotasFiservCompletas)
    }
  }, [hasColchonoBase])

  useEffect(() => {
    if (loadingCardInfo) {
      setImagen("");
    }
  }, [loadingCardInfo]);

  const showModoModal = () => {
    const modalObject = {
      qrString: paymentModo.qr,
      checkoutId: paymentModo.id,
      deeplink: {
        url: paymentModo.deeplink,
        callbackURL: window.location.origin + "/" + process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS,
        callbackURLSuccess:
          window.location.origin +
          `/${process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS}/order-received?id=${orderCreatedInfo?.data.order.id}&order_key=${orderCreatedInfo?.data.order.order_key}`,
      },
      // onSuccess: function () {
      //   console.log("onSuccess");
      // },
      // onFailure: function () {
      //   console.log("onFailure");
      // },
      // onCancel: function () {
      //   console.log("onCancel");
      // },
      onClose: function () {
        setshowModo(false)
        dispatch(onGetPayLoadingFinished());
      },
      refreshData: paymentModo,
      callbackURL:
        window.location.origin +
        `/${process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS}/order-received?id=${orderCreatedInfo?.data.order.id}&order_key=${orderCreatedInfo?.data.order.order_key}`,
    };

    sdkModo.modoInitPayment(modalObject);
  };

  const btnPayment = (
    title: string,
    disabled?: boolean,
    isSubmited?: boolean
  ) => {
    return (
      <>
        <FormGroup $cols="2">
          <FormButton
            disabled={disabled || loadingPay}
            type="submit"
            onClick={isSubmited ? undefined : () => handlePaymentMethod()}
          >
            {loadingPay ? <Spinner isBlack/> : title}
          </FormButton>
        </FormGroup>
      </>
    );
  };

  const TranferenciaData = () => {
    return (
      <>
        <FormContainer>
          <FormGrid>
            <FormGroup $cols="2">
              <div>
                {
                  hasFeria ? (
                    <p>Único método de pago habilitado por tener artículos de feria.</p>
                  ) : (
                    <p>
                    El descuento adicional, junto con los datos para transferir, van a ser visibles luego de realizar el pedido.
                    </p>
                  )
                }
                <br />
                <p>Una vez confirmada la acreditación, aprobamos tu orden🌟</p>
              </div>
            </FormGroup>
          </FormGrid>
        </FormContainer>
        <br />
        {btnPayment("Realizar pedido", loadingPay)}
      </>
    );
  };

  const WibondData = () => {
    return (
      <>
        <FormContainer>
          <FormGrid>
            <FormGroup $cols="2">
              <p>
                Wibond es un medio de pago digital para pagar a tu ritmo, en
                cuotas y sin tarjeta.
              </p>
              <br />
            </FormGroup>
          </FormGrid>
        </FormContainer>
        {btnPayment("Realizar pedido", loadingPay)}
      </>
    );
  };

  const handleFechaVencimientoChange = (date: any) => {
    if (date instanceof Date) {
      setFechaVencimiento(date);
      setFormData({
        ...formData,
        fechaVencimiento: date,
        fechaVencimientoError: "",
      });
    }
  };

  useEffect(() => {
    if (orderCreatedInfo?.success === 1) {
      localStorage.setItem("order_id", orderCreatedInfo?.data.order.id);
      localStorage.setItem("order_key", orderCreatedInfo?.data.order.order_key);

      const denied = [5, 4, 7, 14, 25, 38, 43, 46, 53, 54, 56, 61, 65];
      if (
        orderCreatedInfo.data.payment &&
        orderCreatedInfo.data.payment.error_type &&
        orderCreatedInfo.data.payment.validation_errors[0].param === "bin"
      ) {
        setErrorFix(true);
        setErrorText("Número de tarjeta no válido");
        dispatch(onGetPayLoadingFinished());
        // localStorage.setItem("order_id", orderCreatedInfo?.data.order.id);
        // localStorage.setItem("order_key", orderCreatedInfo?.data.order.order_key);
      } else if (orderCreatedInfo.data.payment && orderCreatedInfo.data.payment.status === "rejected") {
        setErrorFix(true);
        // localStorage.setItem("order_id", orderCreatedInfo?.data.order.id);
        // localStorage.setItem("order_key", orderCreatedInfo?.data.order.order_key);
        dispatch(onGetPayLoadingFinished());
        switch (orderCreatedInfo.data.update.error_code) {
          case FONDOS_INSUFICIENTES:
            setErrorText("Fondos Insuficientes");
            break;
          case TRANSACCION_NO_PERMITIDA_1:
          case TRANSACCION_NO_PERMITIDA_2:
            setErrorText("Transacción No Permitida");
            break;
          case EXCEDE_CUOTAS_MAX:
            setErrorText("Excede Cuotas Máximas");
            break;
          case INGRESO_DATOS_INCORRECTO:
            setErrorText("Ingreso de Datos Incorrecto");
            break;
          case REINTENTAR_LUEGO_1:
          case REINTENTAR_LUEGO_2:
            setErrorText("Reintente en unos momentos");
            break;
          case FECHA_VENCIMIENTO_ERRONEA:
            setErrorText("Fecha de Vencimiento Errónea");
            break;
          case PIN_INCORRECTO:
            setErrorText("PIN Incorrecto");
            break;
          case NECESITA_AUTORIZACION_1:
          case NECESITA_AUTORIZACION_2:
          case NECESITA_AUTORIZACION_3:
            setErrorText("Necesita Autorización");
            break;
          default:
            if (denied.includes(orderCreatedInfo.data.update.error_code)) {
              setErrorText("Transacción Denegada");
            } else {
              setErrorText("Hubo un error");
            }
            break;
        }
      } else if (orderCreatedInfo.data.payment && orderCreatedInfo.data.order.payment_method === MODO) {
        // if (orderCreatedInfo.data.payment && orderCreatedInfo.data.order.payment_method === MODO) {
        dispatch(onGetModoResp(orderCreatedInfo.data.payment));
        setshowModo(true)
      } else if (orderCreatedInfo.data.order.payment_method === WIBOND) {
          router.push(`${orderCreatedInfo?.data.payment.urlLink}`);

      } else if(orderCreatedInfo.data.order.payment_method === MERCADO_PAGO) {
        router.push(`${orderCreatedInfo?.data.payment.init_point}`);

      } else if(orderCreatedInfo.data.order.payment_method === FISERV) {
        router.push(`${orderCreatedInfo?.data.payment.paymentUrl}`);

      } else {
        router.push(
          `/${process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS}/order-received?id=${orderCreatedInfo.data.order.id}&order_key=${orderCreatedInfo.data.order.order_key}`
        );
        dispatch(onCleanInfoOrderExists())
      }

    }
  }, [orderCreatedInfo]);

  useEffect(() => {
    if (Object.keys(paymentModo).length !== 0) {
      if (!loadScriptModoOneTime) {
        setLoadScriptModoOneTime(true);

        const urlSdkModo = process.env.NEXT_PUBLIC_URL_SDK_MODO;
        if (urlSdkModo) {
          useScript(urlSdkModo)
            .then(() => {
              const modo = (window as any).ModoSDK;

              if (modo) {
                setSdkModo(modo);
              } else {
                console.error("'Modo' no está definido en el contexto global.");
              }
            })

            .catch((error) => {
              console.error("ERROR: ", error);
            });
        }
      }
    }
  }, [paymentModo]);

  useEffect(() => {
    if (Object.keys(sdkModo).length !== 0 && activeIndex === 3 && showModo) {
      showModoModal();
    }
  }, [sdkModo, showModo]);

  useEffect(() => {
    setTimeout(() => {
      setErrorFix(false);
    }, 5000);
  }, [errorfix]);

  useEffect(() => {
    const inputText = nCard.card.replace(/[^0-9]/g, "");
    setFormData({ ...formData, card: inputText, cardError: "" });
    validate(
      {
        ...formData,
        ["card"]: inputText,
      },
      "card"
    );

    if (inputText.length >= 6) {
      if (inputText.slice(0, 6) !== formData.card.slice(0, 6)) {
        const bin = parseInt(inputText.slice(0, 6));

        // COMENTAR LUNES 26
        dispatch(onGetCardInfo(bin));

        // ACTIVAR LUNES 26
        // const shouldDispatch = (withHipotecario && bines_hipotecario.includes(bin)) ||
        // (!withHipotecario && !bines_hipotecario.includes(bin));

        // if (shouldDispatch) {
        //   dispatch(onGetCardInfo(bin));
        // } else {
        //   toast.error("Este medio de pago no está habilitado para tu tarjeta", {
        //     position: "bottom-center",
        //     autoClose: 5000,
        //     toastId: "",
        //     icon: false,
        //     pauseOnFocusLoss: false,
        //     style: {
        //       backgroundColor: "#631F99",
        //       color: "white",
        //       borderRadius: "0.5rem",
        //       width: "500px",
        //       fontFamily: "Gilroy-Bold",
        //       fontWeight: "700",
        //       fontSize: "1.2rem",
        //       letterSpacing: "1px",
        //       lineHeight: "21px",
        //     },
        //   })
        // }
                
      } else {
        setCuotasLoading(false);
      }
    }
    if (inputText.length < 6) {
      setImagen("");
    }
    if (nCard.card === "" || nCard.card.length < 7) {
      setCuotasLoading(true);
    }
  }, [nCard.card, cardInfo]);

  useEffect(() => {
    // if(activeIndex == INDEX_PAYWAY) {
    //   setWithHipotecario(true)
    // } else {
    //   setWithHipotecario(false)
    // }

    setNCard({
      card: "",
      cardError: ""
    });

    setFormData({
      ...formData,
      card: "",
      cardError: "",
      nombreTitular: "",
      nombreTitularError: "",
      fechaVencimiento: new Date(),
      fechaVencimientoError: "",
      dni: "",
      dniError: "",
      codigoSeguridad: "",
      codigoSeguridadError: "",
      preferedCuotas: { cuota: "Elegí las cuotas", installment: 0 },
    })

    setFechaVencimiento(undefined)

    setImagen("")

    setCuotasPW([
      { cuota: "Elegí las cuotas", installment: 0 },
    ]);

    setIsCuotas(false)

  }, [activeIndex])

  useEffect(() => {
    if (currentStep === 2 && !loadScriptPWOneTime && activeIndex === 0) {
      setLoadScriptPWOneTime(true);

      if (process.env.NEXT_PUBLIC_URL_SDK_PAYWAY) {
        useScript(process.env.NEXT_PUBLIC_URL_SDK_PAYWAY)
          .then(() => {
            const decidir = (window as any).Decidir;

            if (decidir) {
              const instanciaDecidir = new decidir(
                process.env.NEXT_PUBLIC_URL_ENVIROMENT_PAYWAY
              );

              instanciaDecidir.setPublishableKey(
                process.env.NEXT_PUBLIC_KEY_PAYWAY
              );

              setSdkPW(instanciaDecidir);
            } else {
              console.error(
                "'Decidir' no está definido en el contexto global."
              );
            }
          })

          .catch((error) => {
            console.error("ERROR: ", error);
          });
      }
    }
  }, [formData]);

  useEffect(() => {
    if (tokenPW && clickToSend) {
      sendFormData(PAYWAY, tokenPW);
      setClickToSend(false);
    }
  }, [tokenPW]);

  const sdkPWResponseHandle = (status: number, resp: Object) => {
    if (status === 201) {
      setTokenPW(resp);
    }
  };

  useEffect(() => {
    const itemsFromOrder = !checkoutOnlyToPay ? cartData?.items : infoOrderExist?.order_data?.items;

    const hasColchonesOrBases = itemsFromOrder?.some((product: any) => {
      return skuWithInstallments.includes(product.sku);
    });

    setHasColchonoBase(hasColchonesOrBases);

  }, [cartData, infoOrderExist])

  useEffect(() => {
    setCuotasLoading(true);
    setCuotasPW([{ cuota: "Elegí las cuotas", installment: 0 }]);
    setFormData({
      ...formData,
      preferedCuotas: { cuota: "Elegí las cuotas", installment: 0 },
    });

    if ((checkoutOnlyToPay ? infoOrderExist?.order_data : cartData) && formData.card.length >= 6) {
      if (cardInfo?.hasOwnProperty("error") || cardInfo?.plans.length === 0) {
        setErrorFix(true);
        setErrorText(
          "No podemos procesar esta tarjeta. Comunicate con nosotros para resolverlo!"
        );
      } else {
        setErrorFix(false);
        setErrorText("");

        const arrCuotas = cardInfo?.plans ? [...cardInfo.plans] : [];

        const totalPrice = checkoutOnlyToPay ? infoOrderExist?.order_data?.total : cartData?.totals.total_price ;

        const itemsFromOrder = checkoutOnlyToPay ? infoOrderExist?.order_data?.items : cartData?.items;

        const hasColchonesOrBases = itemsFromOrder?.some((product: any) => {
          return skuWithInstallments.includes(product.sku);
        });

        hasColchonesOrBases ? arrCuotas?.splice(1, 1) : arrCuotas?.shift();
        arrCuotas?.forEach((item) => {
          // const discount = (1 - item.coefficient) * 100;
          if (item.installments === "1") {
            // setCuotasPW((prevCuotas) => [
            //   ...prevCuotas,
            //   {
            //     cuota: `${item.installments} cuota con ${discount.toFixed(
            //       0
            //     )}% Off ($${item.coefficient * parseInt(totalPrice)})`,
            //     installment: parseInt(item.installments_to_send),
            //   },
            // ]);
          } else if (item.installments === "12" && !hasColchonesOrBases) {
          } else {
            setCuotasPW((prevCuotas) => [
              ...prevCuotas,
              {
                cuota: `${item.installments} cuotas ($${formatNumber((totalPrice / parseInt(item.installments)))})`,
                installment: parseInt(item.installments_to_send),
              },
            ]);
          }
        });
        setCuotasPW((prevCuotas) => prevCuotas.slice(1));
        setFormData({ ...formData, codigoSeguridad: "" });
        setCuotasLoading(false);
      }
    }

    if (cardInfo?.issuerName === "AMEX") {
      setMaxLengthCvv(4);
    } else {
      setMaxLengthCvv(3);
    }
  }, [cardInfo, loadingCardInfo]);

  useEffect(() => {
    if (cuotasPW[0] && cuotasPW[0].cuota === "Elegí las cuotas") {
      cuotasPW.shift();
    }
  }, [formData.preferedCuotas]);

  const sendFormData = (payment_method: string, token: any = {}) => {
    const { firstStep, secondStep } = userDataForm;

    let dataOrderToSend = {
      "ip_client": ipClient ?? ""
    } as any;

    if(activeIndex === 0) {

      if(payment_method === FISERV) {
        dataOrderToSend = {
          ...dataOrderToSend,
          fiserv_installments: formFiserv.installments
        }
      }

      if(payment_method === PAYWAY) {
        dataOrderToSend = {
          ...dataOrderToSend,
          tokenPW: {
            token,
            paymentMethodId: cardInfo?.payment_method_id,
            installments: formData.preferedCuotas.installment,
          },
        };
      }
    }

    if(activeIndex === 5) {
      dataOrderToSend = {
        ...dataOrderToSend,
        localm_data: {
          methodCode: formPLocalm.methodCode,
          localmCode: formPLocalm.localmCode,
          idTransaction: formPLocalm.idTransaction,
          lastFourDigits: formPLocalm.lastFourDigits
        }
      }
    }

    if(checkoutOnlyToPay) {

      dataOrderToSend = {
        ...dataOrderToSend,
        order_key: localStorage.getItem("key_to_pay"),
        order_id: localStorage.getItem("id_to_pay"),
        order_to_update: {
          ...dataOrderToSend,
          paymentMethod: payment_method,
        },
      };

      if(dataOrderToSend.order_to_update.firstStep) {
        delete dataOrderToSend.order_to_update.firstStep
      }
      if(dataOrderToSend.order_to_update.secondStep) {
        delete dataOrderToSend.order_to_update?.secondStep
      }

      dispatch(onSendOrderLinkToPayData(dataOrderToSend));
    } else {

      dataOrderToSend = {
        order_key: localStorage.getItem("order_key"),
        order_id: localStorage.getItem("order_id"),
        order_to_create: {
          ...dataOrderToSend,
          firstStep,
          secondStep,
          paymentMethod: payment_method,
        },
      };

      dispatch(onSendOrderData(dataOrderToSend));
    }
  };

  const handleSubmitPW = (event: React.FormEvent<HTMLFormElement>) => {
    dispatch(onClearError());
    event.preventDefault();
    dispatch(onGetPayLoadingStart());

    const target = event.target as HTMLFormElement;

    const month_input = target.querySelector<HTMLInputElement>(
      "[data-decidir='card_expiration_month']"
    );

    const year_input = target.querySelector<HTMLInputElement>(
      "[data-decidir='card_expiration_year']"
    );

    const monthUser = formData.fechaVencimiento.getMonth();
    const yearUser = formData.fechaVencimiento.getFullYear();

    if (!month_input || !year_input) {
      const month_pw_input = document.createElement("input");
      month_pw_input.type = "text";
      month_pw_input.id = "monthExpiration";
      month_pw_input.value = formatMonth(monthUser);
      month_pw_input.dataset.decidir = "card_expiration_month";
      month_pw_input.disabled = true;
      month_pw_input.style.display = "none";

      const year_pw_input = document.createElement("input");
      year_pw_input.type = "text";
      year_pw_input.id = "yearExpiration";
      year_pw_input.value = formatYear(yearUser);
      year_pw_input.dataset.decidir = "card_expiration_year";
      year_pw_input.disabled = true;
      year_pw_input.style.display = "none";

      target.appendChild(month_pw_input);
      target.appendChild(year_pw_input);
    } else {
      month_input.value = formatMonth(monthUser);
      year_input.value = formatYear(yearUser);
    }

    const card_input: any = target.elements.namedItem("card");

    let form_copy: any = target.cloneNode(true);

    form_copy.elements.namedItem("card").value = card_input.value.replace(
      /\D/g,
      ""
    );

    if (sdkPW) {
      sdkPW.createToken(form_copy, sdkPWResponseHandle);
      setClickToSend(true);
    }

    const userData = {
      card: formData.card,
      nombreTitular: formData.nombreTitular,
      fechaVencimiento: formData.fechaVencimiento,
      dni: formData.dni,
      codigoSeguridad: formData.codigoSeguridad,
      preferedCuotas: formData.preferedCuotas,
    };

    handleStepFormSubmit("thirdStep", userData);
  };

  const validate = (_: DataToValidate, name: string) => {
    if (name === "card") {
      const issuerName: string | undefined = cardInfo?.issuerName;

      if (issuerName) {
        setImagen(archivos.imagenes[issuerName]);
      } else {
        setImagen("");
      }
    }
  };

  const disable = () => {
    let disabled = false;

    formData.fechaVencimientoError ||
    formData.cardError ||
    formData.codigoSeguridadError ||
    formData.dniError ||
    formData.nombreTitularError ||
    !formData.nombreTitular ||
    !fechaVencimiento ||
    !formData.dni ||
    !formData.fechaVencimiento ||
    !formData.card ||
    !formData.codigoSeguridad ||
    !formData.preferedCuotas.cuota ||
    formData.preferedCuotas.cuota === "Elegí las cuotas" ||
    !nCard ||
    nCard.cardError ||
    formData.codigoSeguridad.length < 3 ||
    loadingPay
      ? (disabled = true)
      : disabled;
    return disabled;
  };

  type PaymentMethods = {
    [key: number]: string | undefined;
  };

  const disablePuntoLocalm = () => {
    let disabled = true;
    switch (formPLocalm.methodTitle) {
      case "EFECTIVO":
        formPLocalm.localmTitle !== "Elegí el localm" && (disabled = false)
        break;
      case "TRANSFERENCIA":
      case "MODO":
        formPLocalm.localmTitle !== "Elegí el localm" &&
        !!formPLocalm.idTransaction &&
        !formPLocalm.idTransactionError
        ? (disabled = false)
        : disabled;
        break;
      case "Multiples metodos de pago":
      default:
        formPLocalm.localmTitle !== "Elegí el localm" &&
        !!formPLocalm.idTransaction &&
        !!formPLocalm.lastFourDigits &&
        !formPLocalm.lastFourDigitsError &&
        !formPLocalm.idTransactionError
        ? (disabled = false)
        : disabled;
        break;
    }
    return disabled
  }

  const handlerShowCardsModal = () => {
    setShowCardsModal(!showCardsModal)
  }

  const paymentMethods: PaymentMethods = {
    0: FISERV,
    1: BACS,
    2: WIBOND,
    3: MODO,
    4: userDataForm.secondStep.isPickup ? CASH : undefined,
    5: userLogged ? LOCALM_GATEWAY : undefined,
    6: MERCADO_PAGO,
  };

  const handlePaymentMethod = () => {
    try {
      dispatch(onLogCheckoutForm(userDataForm));
    } catch (error) {
      dispatch(onLogCheckoutForm("error catch log checkout form"));
    }
    dispatch(onClearError());
    dispatch(onGetPayLoadingStart());
    sendClarityCustomEvent("checkoutBtnCompra", "headless");

    gtag.event("checkout_progress", {
      checkout_step: 3,
      event_category: "Enhanced-Ecommerce",
      event_label: "checkout_step_3",
      items: cartData?.items,
      non_interaction: true,
    });

    const selectedPaymentMethod = paymentMethods[activeIndex];
    if (selectedPaymentMethod) {
      if(
        selectedPaymentMethod !== BACS &&
        selectedPaymentMethod !== CASH &&
        selectedPaymentMethod !== LOCALM_GATEWAY &&
        selectedPaymentMethod !== MODO
      ) {
        toast.info("Serás redirigido al sitio de pago del método seleccionado", {
          position: "bottom-center",
          autoClose: 5000,
          toastId: "",
          icon: false,
          pauseOnFocusLoss: false,
          style: {
            backgroundColor: "#631F99",
            color: "white",
            borderRadius: "0.5rem",
            width: "500px",
            fontFamily: "Gilroy-Bold",
            fontWeight: "700",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            lineHeight: "21px",
          },
        })
      }

      if(
        selectedPaymentMethod === BACS ||
        selectedPaymentMethod === CASH ||
        selectedPaymentMethod === LOCALM_GATEWAY
      ) {
        toast.info("Estamos procesando tu solicitud!", {
          position: "bottom-center",
          autoClose: 5000,
          toastId: "",
          icon: false,
          pauseOnFocusLoss: false,
          style: {
            backgroundColor: "#631F99",
            color: "white",
            borderRadius: "0.5rem",
            width: "500px",
            fontFamily: "Gilroy-Bold",
            fontWeight: "700",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            lineHeight: "21px",
          },
        })
      }

      sendFormData(selectedPaymentMethod);
      return;
    }
  };

  useEffect(() => {
    if (transactionError) {
      dispatch(onGetPayLoadingFinished());
      setErrorFix(true);
      setErrorText("Hubo un error, Vuelva a intentar");
    }
  }, [transactionError]);

  useEffect(() => {
    if (cartData) {
      cartData.items.map((item) =>{
        if(item.sku.charAt(0) === "O"){
          setHasFeria(true)
          setActiveIndex(1)
        }
      })
    }
  }, [cartData])

  const PuntoLocalmData = () => {
    return <>
      <FormContainer>
        <FormCheckout>
          <FormGrid>
            <FormGroup>
              <OptionsPickerContainer>
                <ToggleOptionsButton
                    activeCondition={openMethods}
                    action={() => {
                      setOpenMethods(!openMethods);
                    }}
                    innerText={formPLocalm.methodTitle}
                  >
                    {openMethods &&
                    <OptionsContainer>
                      {paymentMethodsLocalm.map((method) => (
                        <Option
                          key={method.code}
                          onClick={() =>
                            setFormPLocalm((prevState: any) => {
                              return {
                                ...prevState,
                                methodTitle: method.title,
                                methodCode: method.code
                              }
                            })
                          }
                        >
                          {method.title}
                        </Option>
                      ))}
                    </OptionsContainer>
                    }
                </ToggleOptionsButton>
              </OptionsPickerContainer>
              <FormLabel>Método de pago <MandatoryText>*</MandatoryText></FormLabel>
            </FormGroup>

            <FormGroup>
              <OptionsPickerContainer>
                <ToggleOptionsButton
                    activeCondition={openLocales}
                    action={() => {
                      setOpenLocales(!openLocales);
                    }}
                    innerText={formPLocalm.localmTitle}
                  >
                    {openLocales &&
                    <OptionsContainer>
                      {locales.map((local) => (
                        <Option
                          key={local.code}
                          onClick={() =>
                            setFormPLocalm((prevState: any) => {
                              return {
                                ...prevState,
                                localmTitle: local.title,
                                localmCode: local.code
                              }
                            })
                          }
                        >
                          {local.title}
                        </Option>
                      ))}
                    </OptionsContainer>
                    }
                </ToggleOptionsButton>
              </OptionsPickerContainer>
              <FormLabel>Localm <MandatoryText>*</MandatoryText></FormLabel>
            </FormGroup>

            {
              showIdTransaction && (
              <FormGroup>
                <FormInput
                  placeholder=" "
                  value={formPLocalm.idTransaction}
                  onChange={(e) =>
                    setFormPLocalm(
                      validator(e.target.name, e.target.value, formPLocalm)
                    )
                  }
                  name="idTransaction"
                  onBlur={(e) =>
                    setFormPLocalm(
                      validator(e.target.name, e.target.value, formPLocalm, true)
                    )
                  }
                />
                <FormLabel>ID de la transacción <MandatoryText>*</MandatoryText></FormLabel>
                {formPLocalm.idTransactionError && (
                  <ErrorMessage>{formPLocalm.idTransactionError}</ErrorMessage>
                )}
              </FormGroup>
              )
            }

            {
              showLastDigits && (
                <FormGroup>
                  <FormInput
                    placeholder=" "
                    value={formPLocalm.lastFourDigits}
                    onChange={(e) =>
                      setFormPLocalm(
                        validator(e.target.name, e.target.value, formPLocalm)
                      )
                    }
                    name="lastFourDigits"
                    onBlur={(e) =>
                      setFormPLocalm(
                        validator(e.target.name, e.target.value, formPLocalm, true)
                      )
                    }
                  />
                  <FormLabel>Últimos cuatro dígitos de la tarjeta <MandatoryText>*</MandatoryText></FormLabel>
                  {formPLocalm.lastFourDigits && (
                    <ErrorMessage>{formPLocalm.lastFourDigitsError}</ErrorMessage>
                  )}
                </FormGroup>
              )
            }
          </FormGrid>
          {btnPayment("Realizar pedido", disablePuntoLocalm())}
        </FormCheckout>
      </FormContainer>
    </>
  }

  const amountOfInstallment = (totalCart: string|undefined, installment: string): string => {
    if(totalCart && installment) {
      return formatNumber(parseFloat(totalCart) / parseFloat(installment))
    }

    return ""
  }

  const disableFiservBtn = () => {
    let disabled = true;

    if(
      formFiserv.installments !== 0 &&
      formFiserv.installments !== ""
    ) {
      disabled = false;
    }

    return disabled;
  }

  const FiservData = () => {
    return (
      <>
        <FormContainer>
          <FormCheckout>
            <>
              <>
                <OptionsPickerContainer>
                  <ToggleOptionsButton
                      activeCondition={isCuotas}
                      action={() => {
                        setIsCuotas(!isCuotas);
                      }}
                      innerText={formFiserv.title}
                    >
                      {isCuotas &&
                      <OptionsContainer>
                        {cuotasFiserv.map((c) => (
                          <Option
                            key={c.cuota}
                            onClick={() =>
                              setFormFiserv((prevState: any) => {

                                const amount = checkoutOnlyToPay ? infoOrderExist?.order_data?.total : cartData?.totals.total_price

                                const titleInstallment = c.installment != 0
                                ? c.cuota + " ($" + amountOfInstallment(amount, c.cuota) + ")"
                                : c.cuota

                                return {
                                  ...prevState,
                                  title: titleInstallment,
                                  installments: c.installment
                                }
                              })
                            }
                          >
                            {
                              c.installment != 0
                              ? c.cuota + " ($" + amountOfInstallment(
                                checkoutOnlyToPay
                                ? infoOrderExist?.order_data?.total
                                : cartData?.totals.total_price, c.cuota
                              ) + ")"
                              : c.cuota
                            }
                          </Option>
                        ))}
                      </OptionsContainer>
                      }
                  </ToggleOptionsButton>
                </OptionsPickerContainer>
              </>
            </>
            {btnPayment("Realizar pedido", disableFiservBtn())}
          </FormCheckout>
        </FormContainer>
        <FormGroup $cols="2">
          <DivText>
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={archivos.candado} fill="#631F99" />
            </svg>

            <Violet>Te vamos a dirigir a la plataforma de Fiserv para finalizar la transacción.</Violet>
          </DivText>
        </FormGroup>
      </>
    )
  }

  const PaywayData = () => {
    return (
      <>
        <FormContainer>
          <Form onSubmit={handleSubmitPW} id="form_payway">
            <FormGrid>
              <FormGroup>
                <StyledInputMask
                  data-decidir="card_number"
                  mask="9999-9999-9999-9999"
                  maskChar=""
                  type="text"
                  id="creditCard"
                  name="card"
                  value={nCard.card}
                  onChange={(e: any) => setNCard((prevState) => ({ ...prevState, card: e.target.value}))}
                  placeholder="Número de la tarjeta *"
                  disabled={loadingPay}
                  onBlur={(e: any) =>
                    setNCard(
                      validator(e.target.name, e.target.value, nCard, true)
                    )
                  }
                />
                {imagen && <Img src={imagen} />}
                {nCard.cardError && (
                  <ErrorMessage>{nCard.cardError}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <OptionsPickerContainer>
                  <ToggleOptionsButton
                    activeCondition={isCuotas}
                    action={() => {
                      setIsCuotas(!isCuotas);
                    }}
                    innerText={formData.preferedCuotas.cuota}
                    disabled={loadingPay || cuotasLoading}
                  >
                    {loadingCardInfo
                      ? "Cargando..."
                      : isCuotas && (
                          <OptionsContainer>
                            {cuotasPW.map((c) => (
                              <Option
                                key={c.cuota}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    preferedCuotas: {
                                      cuota: c.cuota,
                                      installment: c.installment,
                                    },
                                  })
                                }
                              >
                                {c.cuota}
                              </Option>
                            ))}
                          </OptionsContainer>
                        )}
                  </ToggleOptionsButton>
                </OptionsPickerContainer>
              </FormGroup>

              <FormGroup>
                <FormInput
                  data-decidir="card_holder_name"
                  placeholder=" "
                  name="nombreTitular"
                  value={formData.nombreTitular}
                  disabled={loadingPay}
                  onChange={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData)
                    )
                  }
                  onBlur={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData, true)
                    )
                  }
                />
                <FormLabel>Nombre y apellido del titular <MandatoryText>*</MandatoryText></FormLabel>
                {formData.nombreTitularError && (
                  <ErrorMessage>{formData.nombreTitularError}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormInput
                  data-decidir="card_holder_doc_number"
                  placeholder=" "
                  name="dni"
                  value={formData.dni}
                  onChange={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData)
                    )
                  }
                  onBlur={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData, true)
                    )
                  }
                  disabled={loadingPay}
                />
                <FormLabel>DNI del titular <MandatoryText>*</MandatoryText></FormLabel>
                {formData.dniError && (
                  <ErrorMessage>{formData.dniError}</ErrorMessage>
                )}
              </FormGroup>

              <StyledDataPickerContainer>
                <FormGroup>
                  <DatePickerContainer
                    selected={fechaVencimiento}
                    onChange={(e: any) => handleFechaVencimientoChange(e)}
                    onChangeRaw={(e: any) => {
                      if (
                        !/^[\/\d]*$/.test(e.target.value) ||
                        e.target.value.length > 5 ||
                        /^\/+$/g.test(e.target.value)
                      ) {
                        e.preventDefault();
                        setFormData({
                          ...formData,
                          fechaVencimientoError: "Formato Invalido",
                        });
                        setFechaVencimiento(undefined)
                      } else {
                        let date = e.target.value
                        if(e.target.value.length === 5) {
                          date = date.replace('/', '');
                        }
                        if (date.length >= 4 && /^[0-9]*$/.test(date)) {
                          const monthAndYear = date.match(/.{1,2}/g);
                          const dateMonthAndYear = new Date(
                            20 + monthAndYear[1],
                            monthAndYear[0] - 1,
                            1
                          );
                          if (dateMonthAndYear < today) {
                            setFormData({
                              ...formData,
                              fechaVencimientoError:
                                "No puede ser anterior a hoy",
                            });
                            setFechaVencimiento(undefined)
                          } else if (monthAndYear[0] - 1 > 11) {
                            setFormData({
                              ...formData,
                              fechaVencimientoError: "Formato Invalido",
                            });
                            setFechaVencimiento(undefined)
                          } else {
                            setFechaVencimiento(dateMonthAndYear);
                            setFormData({
                              ...formData,
                              fechaVencimiento: dateMonthAndYear,
                              fechaVencimientoError: "",
                            });
                          }
                        }
                      }}}
                      dateFormat="MM/yy"
                      placeholderText="Fecha de vencimiento"
                      name="expiredDate"
                      showMonthYearPicker
                      minDate={today}
                      disabled={loadingPay}
                    />
               {/*  <FormLabel>Fecha de vencimiento <MandatoryText>*</MandatoryText></FormLabel> */}
                </FormGroup>
                {formData.fechaVencimientoError && (
                  <ErrorMessage>{formData.fechaVencimientoError}</ErrorMessage>
                )}
              </StyledDataPickerContainer>

              <FormGroup>
                <FormInput
                  data-decidir="security_code"
                  placeholder=" "
                  name="codigoSeguridad"
                  value={formData.codigoSeguridad}
                  onChange={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData)
                    )
                  }
                  onBlur={(e) =>
                    setFormData(
                      validator(
                        e.target.name,
                        e.target.value,
                        formData,

                        true,
                        maxLengthCvv
                      )
                    )
                  }
                  disabled={loadingPay}
                />
                <FormLabel>Código de seguridad <MandatoryText>*</MandatoryText></FormLabel>
                {formData.codigoSeguridadError && (
                  <ErrorMessage>{formData.codigoSeguridadError}</ErrorMessage>
                )}
              </FormGroup>
            </FormGrid>
            {btnPayment("Realizar pedido", disable(), true)}
          </Form>
        </FormContainer>
        <FormGroup $cols="2">
          <DivText>
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={archivos.candado} fill="#631F99" />
            </svg>

            <Violet>Transacciones seguras con PayWay</Violet>
          </DivText>
        </FormGroup>
      </>
    );
  };

  const PaywayDataHipotecario = () => {
    return (
      <>
        <FormContainer>
          <Form onSubmit={handleSubmitPW} id="form_payway">
            <FormGrid>
              <FormGroup>
                <StyledInputMask
                  data-decidir="card_number"
                  mask="9999-9999-9999-9999"
                  maskChar=""
                  type="text"
                  id="creditCard"
                  name="card"
                  value={nCard.card}
                  onChange={(e: any) => setNCard((prevState) => ({ ...prevState, card: e.target.value}))}
                  placeholder="Número de la tarjeta *"
                  disabled={loadingPay}
                  onBlur={(e: any) =>
                    setNCard(
                      validator(e.target.name, e.target.value, nCard, true)
                    )
                  }
                />
                {imagen && <Img src={imagen} />}
                {nCard.cardError && (
                  <ErrorMessage>{nCard.cardError}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <OptionsPickerContainer>
                  <ToggleOptionsButton
                    activeCondition={isCuotas}
                    action={() => {
                      setIsCuotas(!isCuotas);
                    }}
                    innerText={formData.preferedCuotas.cuota}
                    disabled={loadingPay || cuotasLoading}
                  >
                    {loadingCardInfo
                      ? "Cargando..."
                      : isCuotas && (
                          <OptionsContainer>
                            {cuotasPW.map((c) => (
                              <Option
                                key={c.cuota}
                                onClick={() =>
                                  setFormData({
                                    ...formData,
                                    preferedCuotas: {
                                      cuota: c.cuota,
                                      installment: c.installment,
                                    },
                                  })
                                }
                              >
                                {c.cuota}
                              </Option>
                            ))}
                          </OptionsContainer>
                        )}
                  </ToggleOptionsButton>
                </OptionsPickerContainer>
              </FormGroup>

              <FormGroup>
                <FormInput
                  data-decidir="card_holder_name"
                  placeholder=" "
                  name="nombreTitular"
                  value={formData.nombreTitular}
                  disabled={loadingPay}
                  onChange={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData)
                    )
                  }
                  onBlur={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData, true)
                    )
                  }
                />
                <FormLabel>Nombre y apellido del titular <MandatoryText>*</MandatoryText></FormLabel>
                {formData.nombreTitularError && (
                  <ErrorMessage>{formData.nombreTitularError}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <FormInput
                  data-decidir="card_holder_doc_number"
                  placeholder=" "
                  name="dni"
                  value={formData.dni}
                  onChange={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData)
                    )
                  }
                  onBlur={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData, true)
                    )
                  }
                  disabled={loadingPay}
                />
                <FormLabel>DNI del titular <MandatoryText>*</MandatoryText></FormLabel>
                {formData.dniError && (
                  <ErrorMessage>{formData.dniError}</ErrorMessage>
                )}
              </FormGroup>

              <StyledDataPickerContainer>
                <FormGroup>
                  <DatePickerContainer
                    selected={fechaVencimiento}
                    onChange={(e: any) => handleFechaVencimientoChange(e)}
                    onChangeRaw={(e: any) => {
                      if (
                        !/^[\/\d]*$/.test(e.target.value) ||
                        e.target.value.length > 5 ||
                        /^\/+$/g.test(e.target.value)
                      ) {
                        e.preventDefault();
                        setFormData({
                          ...formData,
                          fechaVencimientoError: "Formato Invalido",
                        });
                        setFechaVencimiento(undefined)
                      } else {
                        let date = e.target.value
                        if(e.target.value.length === 5) {
                          date = date.replace('/', '');
                        }
                        if (date.length >= 4 && /^[0-9]*$/.test(date)) {
                          const monthAndYear = date.match(/.{1,2}/g);
                          const dateMonthAndYear = new Date(
                            20 + monthAndYear[1],
                            monthAndYear[0] - 1,
                            1
                          );
                          if (dateMonthAndYear < today) {
                            setFormData({
                              ...formData,
                              fechaVencimientoError:
                                "No puede ser anterior a hoy",
                            });
                            setFechaVencimiento(undefined)
                          } else if (monthAndYear[0] - 1 > 11) {
                            setFormData({
                              ...formData,
                              fechaVencimientoError: "Formato Invalido",
                            });
                            setFechaVencimiento(undefined)
                          } else {
                            setFechaVencimiento(dateMonthAndYear);
                            setFormData({
                              ...formData,
                              fechaVencimiento: dateMonthAndYear,
                              fechaVencimientoError: "",
                            });
                          }
                        }
                      }}}
                      dateFormat="MM/yy"
                      placeholderText="Fecha de vencimiento"
                      name="expiredDate"
                      showMonthYearPicker
                      minDate={today}
                      disabled={loadingPay}
                    />
               {/*  <FormLabel>Fecha de vencimiento <MandatoryText>*</MandatoryText></FormLabel> */}
                </FormGroup>
                {formData.fechaVencimientoError && (
                  <ErrorMessage>{formData.fechaVencimientoError}</ErrorMessage>
                )}
              </StyledDataPickerContainer>

              <FormGroup>
                <FormInput
                  data-decidir="security_code"
                  placeholder=" "
                  name="codigoSeguridad"
                  value={formData.codigoSeguridad}
                  onChange={(e) =>
                    setFormData(
                      validator(e.target.name, e.target.value, formData)
                    )
                  }
                  onBlur={(e) =>
                    setFormData(
                      validator(
                        e.target.name,
                        e.target.value,
                        formData,

                        true,
                        maxLengthCvv
                      )
                    )
                  }
                  disabled={loadingPay}
                />
                <FormLabel>Código de seguridad <MandatoryText>*</MandatoryText></FormLabel>
                {formData.codigoSeguridadError && (
                  <ErrorMessage>{formData.codigoSeguridadError}</ErrorMessage>
                )}
              </FormGroup>
            </FormGrid>
            {btnPayment("Realizar pedido", disable(), true)}
          </Form>
        </FormContainer>
        <FormGroup $cols="2">
          <DivText>
            <svg
              width="24"
              height="28"
              viewBox="0 0 24 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={archivos.candado} fill="#631F99" />
            </svg>

            <Violet>Transacciones seguras con PayWay</Violet>
          </DivText>
        </FormGroup>
      </>
    );
  };

  const renderContentPaymentMethodByIndexSelected = (index: number) => {
    switch (index) {
      case INDEX_FISERV:
        return FiservData();

      case INDEX_PAYWAY:
        // return PaywayDataHipotecario();
        return PaywayData();

      case INDEX_BACS:
        return TranferenciaData();

      case INDEX_WIBOND:
        return WibondData();

      case INDEX_CASH:
        return btnPayment("Pagar en efectivo", loadingPay)

      case INDEX_LOCALM_GATEWAY:
        return PuntoLocalmData();

      case INDEX_MERCADO_PAGO:
        btnPayment("Pagar con Mercado Pago", loadingPay)

      case INDEX_MODO:
      default:
        return btnPayment("Realizar pedido", loadingPay);
    }
  }
  // MODIFICAR LOS INDICES EN RELACION A ESTE ARRAY PARA CAMBIAR ORDEN DE METODOS DE PAGO

  return (
    <>
      <PagoDiv>
        {
          list_payment_methods.map((element, index) => {

            if(!available_methods.includes(element.method)) {
              return null
            }

            if (index === INDEX_CASH && !userDataForm.secondStep.isPickup) {
              return null;
            }

            if (index === INDEX_LOCALM_GATEWAY && !userLogged) {
              return null;
            }

            if (hasFeria && index != INDEX_BACS ) {
              return null
            }

            const isSelected = index === activeIndex;

            return (
              <PaymentContainer key={element.description + index.toString()} $isSelected={isSelected}>
                <CheckboxContainerPayment $isSelected={isSelected}>
                  <PurpleCheckbox
                    key={
                      index.toString() + element.description + index.toString()
                    }
                    isActive={isSelected}
                    action={() => {
                      setActiveIndex(index);
                    }}
                    disabled={loadingPay}
                    text={element.title}
                    withGreenText={element.greenText}
                    greenText={hasFeria ? element.outletDescription : element.description}
                  />
                  {index === 0 && (
                    <DivImgCards>
                      <Img title="Visa" src={archivos.imagenes.VISA} />
                      <Img title="Mastercard" src={archivos.imagenes.MASTER} />
                      <Img title="Amex" src={archivos.imagenes.AMEX} />
                      <DivModo
                        onMouseEnter={() => handlerShowCardsModal()}
                        onMouseLeave={() => handlerShowCardsModal()}
                        >
                          <ImgModalCards
                            alt="boton mas"
                            src="https://i.imgur.com/lzYtgX8.png"
                          />
                        <DivCardsModal $isVisible={showCardsModal}>
                          <Img title="Cabal" src={archivos.imagenes.CABAL} />
                          <Img title="Naranja" src={archivos.imagenes.NARANJA} />
                        </DivCardsModal>
                      </DivModo>
                    </DivImgCards>
                  )}
                </CheckboxContainerPayment>
                {
                  isSelected && renderContentPaymentMethodByIndexSelected(index)
                }
              </PaymentContainer>
            );
          })
        }
      </PagoDiv>
      <ToastContainer limit={3} />
      {errorfix &&
        toast.error(errorText, {
          position: "bottom-center",
          autoClose: 5000,
          toastId: "",
          icon: false,
          pauseOnFocusLoss: false,
          style: {
            backgroundColor: "#631F99",
            color: "white",
            borderRadius: "0.5rem",
            width: "500px",
            fontFamily: "Gilroy-Bold",
            fontWeight: "700",
            fontSize: "1.2rem",
            letterSpacing: "1px",
            lineHeight: "21px",
          },
        })}
    </>
  );
}

export default Pagos;