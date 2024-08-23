import { useEffect, useState, useRef } from "react";
import {
  Container,
  DivPopUp,
  CloseButton,
  DivImage,
  DivInfo,
  MarkedText,
  CopiedText,
  CopyButton,
  CountContainer,
  DesktopPopup,
  MobilePopup
} from "./styled";
import CountDown from "@/components/Organisms/CountDown/CountDown";
import { usePathname } from 'next/navigation';
import { onGetPopup } from "@/state/hygraph/hygraphActions";
import { useDispatch, useSelector } from "react-redux";
import { getPopup } from "@/state/hygraph/hygraphSelector";
import parse from "html-react-parser";
import { useUTMCyber } from "@/utils/useUTMCyber";
import { onAddEmailMailchimp } from "@/state/mailchimp/mailchimpActions";
import { getPopupResponse } from "@/state/mailchimp/mailchimpSelector";
import { getLoadingValues } from "@/state/loading/loadingSelector";
import { IStore } from "@/state/types";
import { productURLRedirectionById } from "@/utils/productURLById";
import { useCloseModal } from "@/utils/useCloseModal";
import Spinner from "@/components/Atoms/Spinner/Spinner";
import { CloseIcon } from "@/utils/Icons";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Images from "@/components/Atoms/Images/Images";
import Input from "@/components/Atoms/Input/Input";
import Button from "@/components/Atoms/Buttons/Button";
import { CopyText } from "@/utils/Icons";
import Modal  from "@/components/Organisms/Modals/Modal"

const Popup = () => {
  const dispatch = useDispatch();
  const popupData = useSelector(getPopup);
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [shouldShowPopup, setShouldShowPopup] = useState<boolean>(false);
  const now = new Date();
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);
  const [suscribed, setSuscribed] = useState(false);
  const [sent, setSent] = useState(false);
  const mailchimpResponse = useSelector(getPopupResponse);
  const stateLoading = useSelector((state: IStore) => getLoadingValues(state));
  const today = new Date()
  const [countDate, setCountDate] = useState<Date>()
  const [render, setRender] = useState(false)

  var flag = true;

  useEffect(() => {
    dispatch(onGetPopup());
    setRender(true)
  }, []);

  useEffect(() => {
    if (popupData) {
      if (popupData.contador) setCountDate(new Date(popupData.contador))
      const hasSeenPopup = localStorage.getItem("hasSeenPopup");
      const startDate = new Date(popupData.comienzo);
      const endDate = new Date(popupData.final);
      const routes = popupData.landingsMostrar?.split("\n") || [];

      setShouldShowPopup(
        now.getTime() >= startDate.getTime() &&
          now.getTime() <= endDate.getTime() &&
          !hasSeenPopup &&
          flag &&
          (routes.length !== 0 
            ? routes.some(elemento => pathname && pathname.includes(elemento))
            : true)
      )
    }
  }, [popupData]);

  useEffect(() => {
    if (shouldShowPopup) {
      const handleMouseLeave = (event: MouseEvent) => {
        if (event.clientY <= 0) {
          setShowPopup(true);
          localStorage.setItem("hasSeenPopup", "true");
          flag = false;
        }
      };

      setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("hasSeenPopup", "true");
        flag = false;
      }, 4000);

      document.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [shouldShowPopup]);

  useEffect(() => {
    if (mailchimpResponse.response.message == "success") {
      setSuscribed(true);
    } else if (mailchimpResponse.error) {
      setInputError(true);
    }
  }, [mailchimpResponse]);

  const onClose = () => {
    setShowPopup(false);
  };

  const modalRef = useRef<HTMLDivElement>(null);
  const modalRefChildren = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const { addOutsideClickListener, removeOutsideClickListener } =
      useCloseModal({
        ref: modalRef,
        redChildren: modalRefChildren,
        onClose: onClose,
      });

    addOutsideClickListener();

    return () => removeOutsideClickListener();
  }, [showPopup]);

  const validateEmail = () => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setInputError(!regexEmail.test(email) && email !== "");
  };

  const onSubscribe = () => {
    if (!suscribed && !inputError) {
      const UTMdata = useUTMCyber()!;
      dispatch(
        onAddEmailMailchimp(
          email,
          `${UTMdata.funnel}_${UTMdata.canal}_${UTMdata.leadsTag}_${UTMdata.categoria}`
        )
      );
    } else {
      onClose();
    }
  };

  const [isCopied, setIsCopied] = useState(false);
  const [hasBeenCopied, setHasBeenCopied] = useState(false);

  const copyText = () => {
    if (popupData &&  popupData.cupon) {
      const textElement = popupData?.cupon;

      navigator.clipboard.writeText(textElement).then(() => {
        setIsCopied(true);
        setHasBeenCopied(false);

        setTimeout(() => {
          setIsCopied(false);
          setHasBeenCopied(true);
        }, 1000);
      });
    }
  };

  if (!render) return null

  return (
    <>
    {
      showPopup && popupData &&
      <>
      <MobilePopup>
      <Container ref={modalRef}>
        <DivPopUp ref={modalRefChildren}>

          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <Margin margin="1rem 0 0 0" marginMobile="0"/>

          <Titles
            titleTag="h2"
            color="black"
            fontSize="1.3em"
            letterSpacing="0"
            align="center"
          >
            {parse(popupData.titulo.html)}
          </Titles>
          <Margin margin="0 0 1rem 2rem" />

          <DivImage>
            <Images
              src={popupData.imagenMobile}
              alt="mobile popup image"
              width="90%"
              height="auto"
              borderRadius="10px 0 0 10px"
              responsiveMobile={{
                borderRadius: "5px",
                margin: "auto",
                display: "flex",
              }}
            ></Images>
          </DivImage>

          {
            countDate && countDate > today && (
              <CountContainer>
                <CountDown endPromotionDate={countDate}/>
              </CountContainer>
            )
          }

          <DivInfo>
            {popupData.textoRemarcado && (
              <>
                <MarkedText>
                  <Text
                    color="white"
                    font="bold"
                    fontSize=".8em"
                    align="center"
                    letterSpacing="1.3px"
                  >
                    {popupData.textoRemarcado}
                  </Text>
                </MarkedText>
                <Margin margin="0 0 10px 0" />
              </>
            )}

            <>
              <Text
                color="lead"
                font="regular"
                fontSize="1em"
                hasLink
                hasStrong
                align="center"
              >
                {parse(popupData.descripcion.html)}
              </Text>
              <Margin margin="1rem 0 0 0" />
            </>

            {popupData.botonEmailTexto && (
              <>
                <Input
                  placeholder="Intoducí tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                  error={inputError}
                />
                <Margin margin="0 0 10px 0" />
              </>
            )}

            {inputError && popupData.botonEmailTexto && (
              <>
                <Text
                  font="regular"
                  align="center"
                  fontSize=".9em"
                >
                  {
                    suscribed ? <>Te suscribiste con éxito ;)</> : <>Dirección de correo no válida :(</>
                  }
                </Text>
                <Margin margin="0 0 10px 0" />
              </>
            )}

            {popupData.botonEmailTexto && (
              <CopyButton>
                <Button
                  backgroundColor="lead"
                  size="none"
                  width="320px"
                  height="50px"
                  borderRadius="30px"
                  textColor="white"
                  onClick={() => onSubscribe()}
                >
                  {
                    suscribed ? <>&#10003;</> : stateLoading.loadingPopupEmail ?  <Spinner /> : popupData.botonEmailTexto
                  }
                  
                </Button>
              </CopyButton>
            )}
            {
              popupData.cupon  && (
                <CopyButton>
                  <Button
                    backgroundColor="lead"
                    borderRadius="30px"
                    textColor="white"
                    onClick={() => copyText()}
                  >
                    ¡Click para aprovechar! {CopyText()}
                  </Button>
                  {isCopied && !hasBeenCopied && (
                    <CopiedText>texto copiado</CopiedText>
                  )}
                </CopyButton>
              )
            }
          </DivInfo>
        </DivPopUp>
      </Container>
      </MobilePopup>

      <DesktopPopup >
          <Container ref={modalRef}>
            <DivPopUp ref={modalRefChildren}> 

              <DivImage>
                <Images
                  src={popupData.imagenDesktop}
                  alt="mobile popup image"
                  width="90%"
                  borderRadius="10px 0 0 10px"
                ></Images>
              </DivImage>

              <DivInfo>
                <CloseButton onClick={onClose}>
                  <CloseIcon />
                </CloseButton>

                  {
                    countDate && countDate > today && (
                      <CountContainer>
                        <CountDown endPromotionDate={countDate}/>
                      </CountContainer>
                    )
                  }

                  {popupData.textoRemarcado && (
                    <>
                      <MarkedText>
                        <Text
                          color="white"
                          font="bold"
                          fontSize=".8em"
                          letterSpacing="1.3px"
                        >
                          {popupData.textoRemarcado}
                        </Text>
                      </MarkedText>
                      <Margin margin="0 0 15px 0" />
                    </>
                  )}

                  <Titles
                    titleTag="h2"
                    color="black"
                    fontSize="1.3em"
                    letterSpacing="0"
                  >
                    {parse(popupData.titulo.html)}
                  </Titles>
                  <Margin margin="1rem 0 0 0" />

                  {popupData.descripcion.html && (
                    <>
                      <Text
                        color="lead"
                        font="regular"
                        fontSize="1em"
                        hasLink
                        hasStrong
                      >
                        {parse(popupData.descripcion.html)}
                      </Text>
                      <Margin margin="10px 0 0 0"/>
                    </>
                  )}

                  {popupData.botonEmailTexto && (
                    <>
                      <Input
                        placeholder="Intruducí tu mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={validateEmail}
                        error={inputError}
                      />
                      <Margin margin="0 0 10px 0" />
                    </>
                  )}

                  {popupData.botonEmailTexto && (
                    <CopyButton>
                      <Button
                        backgroundColor="lead"
                        borderRadius="30px"
                        textColor="white"
                        onClick={() => onSubscribe()}
                      >
                        {
                          suscribed ? <>&#10003;</> : stateLoading.loadingPopupEmail ?  <Spinner /> : popupData.botonEmailTexto
                        }
                        
                      </Button>
                    </CopyButton>
                  )}

                  {
                    popupData.cupon && (
                      <CopyButton>
                        <Button
                          backgroundColor="lead"
                          borderRadius="30px"
                          textColor="white"
                          onClick={() => copyText()}
                        >
                          ¡Click para aprovechar! {CopyText()}
                        </Button>
                        {isCopied && !hasBeenCopied && (
                          <CopiedText>texto copiado</CopiedText>
                        )}
                      </CopyButton>
                    )
                  }

                  {inputError && (
                    <>
                      <Margin margin="10px 0 0 0" />
                      <Text
                        font="regular"
                        fontSize=".9em"
                      >
                        {
                          suscribed ? <>Te suscribiste con éxito ;)</> : <>Dirección de correo no válida :(</>
                        }
                      </Text>
                    </>
                  )}
              </DivInfo>
            </DivPopUp>
          </Container>
      </DesktopPopup>
    </>
    }
    </>
  );
};

export default Popup;
