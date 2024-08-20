import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditButton,
  StepContainer,
  StepDetail,
  StepForm,
  StepFormSummary,
  StepHeading,
  StepNumber,
  StyledFormContainer,
  StyledHr,
  StepTitle,
} from "./styled";
import { EntregaYFacturacion } from "../EntregaYFacturacion/EntregaYFacturacion";
import CartSummary from "../../CartSummary/CartSummary";
import Pagos from "../pagos/pagos";
import { TusDatos } from "../TusDatos/TusDatos";
import Step1Resumen from "./FormResumen/Step1Resumen";
import Step2Resumen from "./FormResumen/Step2Resumen";
import { getLoadingPay } from "@/state/loading/loadingSelector";
import { IStore } from "@/state/types";
import { getCheckoutOnlyToPay } from "@/state/order/orderSelector";
import { BlackCheck } from "../ui/assets"
import { toast } from "react-toastify";
import { rdcEmail } from "@/utils/rdcChecker";
import { onRemoveCouponFromCart } from "@/state/cart/cartActions";
import { getCartData } from "@/state/cart/cartSelector";

function FormContainer() {
  const dispatch = useDispatch()
  const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
  const loadingPay = useSelector(getLoadingPay)
  const [currentStep, setCurrentStep] = useState(0);
  const cartData = useSelector(getCartData);
  const [rdcCoupon, setRdcCoupon] = useState<string | undefined>();

  const step2Ref = useRef<HTMLDivElement | null>(null);
  const step3Ref = useRef<HTMLDivElement | null>(null);

  const [rdcCouponRemoved, setRdcCouponRemoved] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({
    firstStep: {},
    secondStep: {},
    thirdStep: {},
  });
  const goNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  useEffect(() => {
    switch (currentStep) {
      case 1:
        step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
        break;
      case 2:
        step3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start'  });
        break;
      default:
        break;
    }
  }, [currentStep])

  const handleStepFormSubmit = (step: string, data: any) => {
    setUserData((prevUserData: any) => {
      return { ...prevUserData, [step]: { ...data, edited: true } };
  });
};

  const isComplete = (step : string) => {
    const stepNumber = step === "firstStep" ? 0 : 1
    return currentStep !== stepNumber && Object.keys(userData[step]).length > 0
  }

  const rdcChecker = async (email: string, couponCode: string) => {
    try {
      const couponEmail = await rdcEmail(couponCode)
      if (couponEmail.result.email_owner === email) {
        dispatch(onRemoveCouponFromCart(couponCode))
        setRdcCouponRemoved(true)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(currentStep === 1 && userData.firstStep.email && rdcCoupon) {
      rdcChecker(userData.firstStep.email, rdcCoupon)
    }
    
  }, [userData, rdcCoupon])

  useEffect(() => {
    if(cartData) {
      cartData.coupons.map(item => {
        if (item.code.includes("rdc")) {
          setRdcCoupon(item.code)
        }
      })
    }
  }, [cartData]);

  useEffect(() => {
    if(rdcCouponRemoved) {
      toast.info("No se puede usar un cupon RDC propio", {
        position: "bottom-center",
        autoClose: 6000,
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
  }, [rdcCouponRemoved])

  useEffect(() => {
    if(checkoutOnlyToPay) {
      toast.info("Por favor, reintenta el pago de tu pedido", {
        position: "bottom-center",
        autoClose: 6000,
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
  }, [checkoutOnlyToPay])

  return (
    <StyledFormContainer>
        <StepContainer>
          <StepDetail>
            <StepHeading>
              <StepNumber $active={currentStep == 0} $isComplete={isComplete("firstStep")}>
                {
                  /* isComplete("firstStep") ? BlackCheck() :  */1
                }
              </StepNumber>
              <StepTitle $active={currentStep == 0} $isComplete={isComplete("firstStep")}>Datos de contacto</StepTitle>
            </StepHeading>
            <StepFormSummary>
                {isComplete("firstStep") && (
                    <Step2Resumen data={userData.firstStep} />
                  )}
              </StepFormSummary>
            <StepForm $isCurrentStep={currentStep === 0}>
              <TusDatos
                handleStepFormSubmit={handleStepFormSubmit}
                goNextStep={goNextStep}
              />
            </StepForm>
          </StepDetail>
          {!checkoutOnlyToPay && currentStep !== 0 && (
            <EditButton
              onClick={() => setCurrentStep(0)}
              disabled={checkoutOnlyToPay || loadingPay}
              $idDisabled={checkoutOnlyToPay || loadingPay}
            >
              Editar
            </EditButton>
          )}
        </StepContainer>

        <StyledHr />

        <StepContainer>
          <StepDetail>
            <StepHeading ref={step2Ref}>
              <StepNumber $active={currentStep == 1} $isComplete={isComplete("secondStep")}>
                {
                  /* isComplete("secondStep") ? BlackCheck() :  */2
                }
              </StepNumber>
              <StepTitle $active={currentStep == 1} $isComplete={isComplete("secondStep")}>Información de Envío</StepTitle>
            </StepHeading>
            <StepFormSummary>
                {isComplete("secondStep") && (
                  <Step1Resumen data={userData.secondStep} />
                )}
              </StepFormSummary>
            <StepForm $isCurrentStep={currentStep === 1}>
              <EntregaYFacturacion
                handleStepFormSubmit={handleStepFormSubmit}
                goNextStep={goNextStep}
              />
            </StepForm>
          </StepDetail>
          {!checkoutOnlyToPay && userData.secondStep?.edited && currentStep !== 1 && (
            <EditButton
              onClick={() => setCurrentStep(1)}
              disabled={checkoutOnlyToPay || loadingPay}
              $idDisabled={checkoutOnlyToPay || loadingPay}
            >
              Editar
            </EditButton>
          )}
        </StepContainer>

        <StyledHr />

        <StepContainer $current={currentStep}>

          <StepDetail>
            <StepHeading  ref={step3Ref}>
              <StepNumber $active={currentStep == 2}>3</StepNumber>
              <StepTitle $active={currentStep == 2}>Forma de Pago</StepTitle>
            </StepHeading>
            <StepForm $isCurrentStep={currentStep === 2}>
              <Pagos
                handleStepFormSubmit={handleStepFormSubmit}
                currentStep={currentStep}
                userDataForm={userData}
              />
            </StepForm>
          </StepDetail>
        </StepContainer>
    </StyledFormContainer>
  );
}

export default FormContainer;
