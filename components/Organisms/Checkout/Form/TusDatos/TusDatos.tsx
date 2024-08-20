import {
  Form,
  FormButton,
  FormGrid,
  FormGroup,
  FormLabel,
  FormInput,
  FormContainer,
  CheckboxContainer,
  ErrorMessage,
  MandatoryText,
} from "@/components/Organisms/Checkout/Form/ui/styled";
import PurpleCheckbox from "@/components/Organisms/Checkout/Form/PurpleCheckbox/PurpleCheckbox";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { validator } from "../ui/validator"
import { UserData, DataToValidate } from "./types";
import { onSaveAbandonedCartCheckout, onSuscribeCheckout } from "@/state/mailchimp/mailchimpActions";
import { useDispatch, useSelector } from "react-redux";
import * as gtag from "@/utils/gtagEvents"
import { getCartData } from "@/state/cart/cartSelector";
import { IStore } from "@/state/types";
import { getCheckoutOnlyToPay, getOrderExist } from "@/state/order/orderSelector";
import { InputMovingPH } from "@/components/Molecules/InputMovingPH/InputMovingPH";

interface IProps {
  handleStepFormSubmit: (step: string, data: UserData) => void;
  goNextStep: () => void;
}

export const TusDatos = ({ handleStepFormSubmit, goNextStep }: IProps) => {
  const dispatch = useDispatch();
  const cartData = useSelector(getCartData)
  const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
  const infoOrderExist = useSelector((state: IStore) => getOrderExist(state));
  const step1Ref = useRef<HTMLDivElement | null>(null);
  const [hasSendData, setHasSendData] = useState<boolean>(false);
  
  const firstStepStorageStr = localStorage.getItem("first_step_checkout")
  const firstStepStorage = firstStepStorageStr ? JSON.parse(firstStepStorageStr) : {}
  
  const [facturaA, setFacturaA] = useState(firstStepStorage?.conFacturaA || false);

  const [userData, setUserData] = useState<DataToValidate>({
    telefono: !checkoutOnlyToPay ? firstStepStorage?.telefono ?? "" : "",
    telefonoError: "",
    email: !checkoutOnlyToPay ? firstStepStorage?.email ?? "" : "",
    emailError: "",
    nombre: !checkoutOnlyToPay ? firstStepStorage?.nombre ?? "" : "",
    nombreError: "",
    apellido: !checkoutOnlyToPay ? firstStepStorage?.apellido ?? "" : "",
    apellidoError: "",
    dni: !checkoutOnlyToPay ? firstStepStorage?.dni ?? "" : "",
    dniError: "",
    cuit: !checkoutOnlyToPay ? firstStepStorage?.cuit ?? "" : "",
    cuitError: "",
    conFacturaA: !checkoutOnlyToPay ? firstStepStorage?.conFacturaA ?? facturaA : facturaA,
  });

  const [sendData, setSendData] = useState<UserData>({
    telefono: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.billing?.phone,
    email: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.billing?.email,
    nombre: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.billing?.first_name,
    apellido: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.billing?.last_name,
    dni: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.dni,
    cuit: !checkoutOnlyToPay ? "" : infoOrderExist?.order_data?.cuit,
    conFacturaA: !checkoutOnlyToPay ? facturaA : (infoOrderExist?.order_data?.cuit ? true : false),
  });

  const disable = () => {
    for (const key in userData) {
      if (key.endsWith("Error") && userData[key as keyof UserData] !== "") {
        return true;
      } else if (!key.endsWith("Error") && userData[key as keyof UserData] === "") {
        if (key === "cuit" && !facturaA) break;
        return true;
      }
    }
    return false;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setHasSendData(true)
    e.preventDefault();
    if (disable()) {
      step1Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
      setTimeout(() => {
        setHasSendData(false)
      }, 1000)
    } else {
      setSendData({
        ...sendData,
        telefono: userData.telefono,
        email: userData.email,
        nombre: userData.nombre,
        apellido: userData.apellido,
        dni: userData.dni,
        cuit: userData.cuit,
        conFacturaA: facturaA
      })
    }
  };

  useEffect(() =>{
    const dataLoaded = 
    sendData.nombre != "" &&
    sendData.apellido != "" &&
    sendData.dni != "" &&
    sendData.email != "" &&
    (facturaA ? sendData.cuit != ""  : true )

    if(dataLoaded) {
      localStorage.setItem("first_step_checkout", JSON.stringify(sendData))
      handleStepFormSubmit("firstStep", sendData);
      dispatch(onSuscribeCheckout(userData.email));
      gtag.event("begin_checkout", {
        "event_category": "Enhanced-Ecommerce",
        "event_label": "checkout_step_1",
        "items": cartData?.items,
        "non_interaction": true 
      })
      goNextStep(); 
    }
  }, [sendData])

  useEffect(() =>{
    if (!facturaA) {
      setUserData({...userData, cuit: "" })
    }
  },[facturaA])

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData(validator(e.target.name, e.target.value, userData))
  }

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData(validator(e.target.name, e.target.value, userData, true))
  }

  const handleEmailOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData(validator(e.target.name, e.target.value, userData, true))
    dispatch(onSaveAbandonedCartCheckout(e.target.value))
  }

  return (
    <FormContainer ref={step1Ref}>
      <Form onSubmit={handleSubmit}>
          <FormGroup $cols="2">
            <InputMovingPH
              error={userData.emailError ? true : false}
              isInputDirection
              isMandatory
              errorMark={hasSendData && (userData.emailError ? true : false)}
              input={{
                id:'billing_email',
                label: "Correo electrónico",
                error: userData.emailError,
                name: "email",
                value: userData.email,
                onChange: handleOnChange,
                onBlur: handleEmailOnBlur
              }}
            />
          </FormGroup>

          <FormGroup $cols="2">
            <InputMovingPH
              error={userData.telefonoError ? true : false}
              isMandatory
              errorMark={hasSendData && (userData.telefonoError ? true : false)}
              input={{
                label: "Teléfono",
                error: userData.telefonoError,
                name: "telefono",
                value: userData.telefono,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>
          
          <FormGrid>
          <FormGroup $cols="2">
            <InputMovingPH
              error={userData.nombreError ? true : false}
              isMandatory
              errorMark={hasSendData && (userData.nombreError ? true : false)}
              input={{
                label: "Nombre",
                error: userData.nombreError,
                name: "nombre",
                value: userData.nombre,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>

          <FormGroup $cols="2">
            <InputMovingPH
              error={userData.apellidoError ? true : false}
              isMandatory
              errorMark={hasSendData && (userData.apellidoError ? true : false)}
              input={{
                label: "Apellido ",
                error: userData.apellidoError,
                name: "apellido",
                value: userData.apellido,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>

          <FormGroup $cols="2">
            <InputMovingPH
              error={userData.dniError ? true : false}
              isMandatory
              errorMark={hasSendData && (userData.dniError ? true : false)}
              input={{
                label: "DNI",
                error: userData.dniError,
                name: "dni",
                value: userData.dni,
                onChange: handleOnChange,
                onBlur: handleOnBlur
              }}
            />
          </FormGroup>

          {facturaA && (
            <FormGroup $cols="2">
              <InputMovingPH
                error={userData.cuitError ? true : false}
                isMandatory
                errorMark={hasSendData && (userData.cuitError ? true : false)}
                input={{
                  label: "CUIT*",
                  error: userData.cuitError,
                  name: "cuit",
                  value: userData.cuit,
                  onChange: handleOnChange,
                  onBlur: handleOnBlur
                }}
              />
            </FormGroup>
          )}
        </FormGrid>

        <CheckboxContainer>
          <PurpleCheckbox
            action={() => setFacturaA(!facturaA)}
            isActive={facturaA}
            text="Quiero factura A"
            isSquare
          />
        </CheckboxContainer>
        
        <CheckboxContainer>
          <PurpleCheckbox isActive text="Quiero recibir novedades" isSquare/>
        </CheckboxContainer>

        <FormButton /* disabled={disable()} */>
          {/* {disable() ? "Completá tus datos" : "Continuar a información de Envío"} */}
          Continuar a Información de envío
        </FormButton>
      </Form>
    </FormContainer>
  );
};
