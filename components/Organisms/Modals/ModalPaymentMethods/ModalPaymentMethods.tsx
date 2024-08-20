import { CloseIcon } from "@/utils/Icons"
import Titles from "@/components/Atoms/Typography/Titles"
import Button from "@/components/Atoms/Buttons/Button"
import Text from "@/components/Atoms/Typography/Text"
import {
  TextModal,
  DividorModal,
  TextContentModal,
  DivImg,
  ButtonCloseDiv,
  DivModal,
  ContainerModal,
  DivButtonModal,
  DivShowText,
  MethodsContainer,
  InfoMethods
} from "./styled"
import { IPropsChildrens } from "../types"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Separator from "@/components/Atoms/Separator/Separator"
import Images from "@/components/Atoms/Images/Images"
import { 
  MasterCardHome,
  VisaHome,
  AmericanExpress,
  NaranjaHome,
  TranferenciaHome
} from "@/utils/Icons"
import { useEffect, useState } from "react"

export const ModalPaymentIcons = (props: IPropsChildrens) => {
  return props.showText ? (
    <DivShowText onClick={props.modalHandle && (() => props.modalHandle?.())}>
        <Text color="millionGray" textDecoration="underline" fontSize="0.85rem" font="medium" textTag="span">
          Ver todos los medios de pago.
        </Text>
    </DivShowText>
  ) : (
    <DivButtonModal>
      <Button onClick={() => props.modalHandle?.()}>
        <Images
          alt="boton mas"
          src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/e8e3136e-ea10-44af-35fa-bbb4460d4100/fit=cover"
          width="40px"
          height="40px"
        />
      </Button>
    </DivButtonModal>
  )
}

export const ModalPayment = (props: IPropsChildrens) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!render) return null
  
  return props.modal ? (
    <ContainerModal ref={props.modalRef}>
      <DivModal ref={props.modalRefChildren}>
        
        <ButtonCloseDiv>
          <Button onClick={() => props.modalHandle?.()}>
            <CloseIcon />
          </Button>
        </ButtonCloseDiv>

        <Titles
          titleTag="h4"
          font="extraBold"
          fontSize="1.9em"
          color="offBlack"
          letterSpacing="-0.72px"
          responsiveMobile={{
            fontSize: "1.3em"
          }}
        >
          Métodos de pago
        </Titles>

        <Margin margin=".2rem"/>

        <Text
          font="medium"
          color="thamarBlack"
          fontSize="15px"
          responsiveMobile={{
            fontSize: "13px",
            width:"70%"
          }}
        >
          Pagá tus compras con cualquiera de estos medios.
        </Text>
        
        <Separator color="yellowCalm"/>

        <MethodsContainer>
          <Titles 
          titleTag="h5" 
          font="extraBold" 
          fontSize="1.3em" 
          color="offBlack"
          responsiveMobile={{
            fontSize:"1.1rem"
          }}          
          >
            Tarjetas de crédito bancarias
          </Titles>

          <Margin margin="0" marginMobile=".7rem"/>
          
          <InfoMethods>
            <Text
            font="medium"
            hasStrong
            fontSize="1rem"
            responsiveMobile={{
              fontSize:".9rem"
            }}     
            >
              Hasta <b>12 cuotas</b> sin interés:
            </Text>
            <div>
              <MasterCardHome/>
              <VisaHome/>
              <AmericanExpress/>
            </div>
          </InfoMethods>

          <Margin margin=".6rem"/>

          <InfoMethods>
            <Text
            font="medium"
            hasStrong
            fontSize="1rem"
            >
              <b>6 cuotas</b> sin interés:
            </Text>

            <NaranjaHome/>
          </InfoMethods>
        </MethodsContainer>

        <Margin margin="1rem"/>

        <MethodsContainer>
          <InfoMethods>
            <Titles titleTag="h5" font="extraBold" fontSize="1.3em" color="offBlack">
              Tarjetas de débito:
            </Titles>

            <div>
              <MasterCardHome/>
              <VisaHome/>
              <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b6db489c-582e-4313-77ca-ca5965833f00/fit=cover" alt="cabal" width="15%"/>
            </div>
          </InfoMethods>
        </MethodsContainer>

        <Margin margin="1rem"/>

        <MethodsContainer>
          <InfoMethods>
            <Titles titleTag="h5" font="extraBold" fontSize="1.3em" color="offBlack">
                Transferencia con hasta 20% OFF EXTRA
            </Titles>
            
            <TranferenciaHome />
          </InfoMethods>
        </MethodsContainer>
      </DivModal>
    </ContainerModal>
  ) : (
    <></>
  )
}
