import React from 'react';
import { CloseIcon } from "@/utils/Icons"
import {IProps} from "./types"
import Images from "@/components/Atoms/Images/Images";
import Button from "@/components/Atoms/Buttons/Button";
import { 
  InformationModal,
  DivModal,
  ContainerModal,
  ContainarButton
} from "./styled";
import PostalInput from "@/components/Molecules/PostalInput/PostalInput";
import {IPropsChildrens} from "../types"
import Margin from '@/components/Atoms/Spacing/Margin/Margin';

export const ModalPostal = ({ addToCart, stateLoading, setShowPostal, showPostal, ...props }: IPropsChildrens & IProps) => {
  return(
    <>
    {
      showPostal &&
      <ContainerModal ref={props.modalRef}>
        <DivModal ref={props.modalRefChildren}>
          <ContainarButton>
            <Button onClick={() => setShowPostal(false)}>
              <CloseIcon/>
            </Button>
          </ContainarButton>
          <Images 
          src="https://calmessimple.com.ar/wp-content/uploads/2023/03/entrega_popup-1.webp"
          alt="entregaPopUp"/>
          <InformationModal>
            <PostalInput
              alertMessage="Este servicio esta limitado a algunas zonas de Buenos Aires, ingresá tu CP para saber si está disponible en tu domicilio"
              buttonAction={addToCart}
              stateLoading={stateLoading}
            />
          </InformationModal>
          <Margin margin="1rem" />
        </DivModal>
      </ContainerModal>
    }
    </>
    )
}