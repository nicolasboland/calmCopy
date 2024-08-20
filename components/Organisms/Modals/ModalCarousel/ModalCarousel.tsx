import React, { useState, useEffect } from "react";
import { ModalSidecart, ImageDiv, DivButtonClose } from "./styled";
import Images from "@/components/Atoms/Images/Images";
import Button from "@/components/Atoms/Buttons/Button";
import { IPropsChildrens } from "../types";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const ModalCarousel = (props: IPropsChildrens) => {
  return (
    props.modal &&
    props.imgUrl && (
      <ModalSidecart ref={props.modalRef}>
        <div ref={props.modalRefChildren} className="header-cart">
          <Margin margin="0" marginMobile="10px">
            {/* <DivButtonClose className="header-closer-2">
                <Button onClick={() => props.modalHandle?.()}>
                    <Images 
                    src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/527083b1-56bb-4a75-1a98-e7cffd083800/fit=cover" alt="cerrar carrito img" />
                </Button></DivButtonClose> */}
            {props.imgUrl && (
              <ImageDiv onClick={() => props.modalHandle?.()}>
                <Images
                  src={props.imgUrl}
                  alt="Image Gallery"
                  height="100%"
                  width="100%"
                  borderRadius="10px"
                />
              </ImageDiv>
            )}
          </Margin>
        </div>
      </ModalSidecart>
    )
  );
};

export default ModalCarousel;
