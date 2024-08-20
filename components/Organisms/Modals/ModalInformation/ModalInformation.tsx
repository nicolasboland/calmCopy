import {
    DivButtonModal,
    ContainerModal,
    DivModal,
    InformationModal,
    DivAlert,
    DivImgAlert,
    DivCloseIcon
  } from './styled'
import Button from "@/components/Atoms/Buttons/Button";
import { CloseIcon } from "@/utils/Icons"
import Images from "@/components/Atoms/Images/Images";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import {IPropsChildrens} from "../types"
import { useEffect, useState } from 'react';




export const ModalInformationIcon = (props : IPropsChildrens) => {
    return(
        <DivButtonModal>
            <div 
              onClick={() => props.modalHandle?.()}
              >
            <Images
              src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1b0595b8-94ac-4c62-0275-d49fb540c000/thumbnail"
              alt="alert"
              width='30px'
              widthHTML={30}
              heightHTML={30}
              responsiveMobile={{
                width: "25px"
              }}
            /></div>
        </DivButtonModal>
    )
}


export const ModalInformation = (props : IPropsChildrens) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!render) return null
  
    return(
        props.modal && (
            <ContainerModal ref={props.modalRef}>
              <DivModal ref={props.modalRefChildren}>
                <DivCloseIcon>
              <Button onClick={() => props.modalHandle?.()}>
                  <CloseIcon/>
                </Button></DivCloseIcon>
                <Images 
                src="https://calmessimple.com.ar/wp-content/uploads/2023/03/entrega_popup-1.webp"
                alt="entregaDeEnsueno"
                width='100%'
                />
                <InformationModal>
                  <Titles
                  titleTag='h2'
                  fontSize='2.3em'
                  font='light'
                  color='offBlack'
                  boldTitle='de ensueño'>
                    entrega <br />
                  </Titles>
                  <Text
                  fontSize='1em'
                  color='offBlack'
                  font='bold'  
                  >
                    Sobre el servicio
                  </Text>
                  <Margin margin="10px"/>
                  <Titles
                   titleTag='h3'
                   fontSize='0.9em'
                   color='offBlack'
                   font='light'>
                    Nos encargamos de todo el proceso de armado de tu cama para
                    que no tengas que preocuparte por nada. <br />
                  </Titles>
                  <Margin margin="20px"/>
                  <Titles
                   titleTag='h3'
                   fontSize='0.9em'
                   color='offBlack'
                   font='light'>
                    Nuestros expertos van a abrir los productos, instalarlos, deshacerse de los envoltorios y 
                    siempre que vos quieras, se pueden llevar tu ex-colchón si entra por el ascensor.
                  </Titles>
                  <Margin margin="20px"/>
                  <DivAlert>
                    <DivImgAlert>
                      <Images
                        width="60%"
                        src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1b0595b8-94ac-4c62-0275-d49fb540c000/thumbnail"
                        alt="alert"
                      />
                    </DivImgAlert>
                    <Text
                    font="medium"
                    fontSize="0.8em"
                    color='offBlack'>
                      Este servicio esta limitado a algunas zonas de Buenos
                      Aires, {/* ingresá tu CP para saber si está disponible en tu
                      domicilio */}
                    </Text>
                  </DivAlert>
                  <Text
                  color="yellowCalm"
                  textTag="a" 
                  link="https://calmessimple.com.ar/producto/entrega-de-ensueno/"
                  font='extraBold'>
                    Ver más detalles
                  </Text>
                </InformationModal>
              </DivModal>
            </ContainerModal>
          ))
        }