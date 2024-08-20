import React from "react"
import Titles from "@/components/Atoms/Typography/Titles"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { Container, ContainerSleep, DivTextButton, DivTitleButton, Degrade } from "./styled"
import Button from "@/components/Atoms/Buttons/Button"


interface ButtonSectionProps {
    imageDesktop: string, 
    imageMobile: string,
    middleButton?: boolean,
    isHotsale?: boolean
}


const ButtonSection = ({imageDesktop, imageMobile, middleButton, isHotsale}: ButtonSectionProps) => {
    return (
        <>
    
       {middleButton ? (
       <Container $imageDesktop={imageDesktop} $imageMobile={imageMobile} $isHotsale={isHotsale}>
        <DivTextButton>
            <Titles
                titleTag="h3"
                color="white"
                fontSize="1.8em"
                align="left"
            >
               {isHotsale ? "" : "Volvamos a la cama"}
          </Titles>
          <Margin margin="10px"/>
         {
            isHotsale ? (
                <Button
                  backgroundColor="lead"
                  backgroundColorHover="offBlack"
                  borderRadius="35px"
                  size="big"
                  sizeMobile="small"
                  textColor={"white"}
                  font="extraBold"
                  href="https://calmessimple.com.ar/producto/colchon-calm-hibrido"
                  fontSize="1.3rem"
                >
                  Quiero mi colchón
                </Button>
            ) : (
                <Button
                  backgroundColor={"auberginePearl"}
                  borderRadius="35px"
                  size="xsmall"
                  backgroundColorHover={"white"}
                  textColor={"white"}
                  textColorHover="decorYellow"
                  font="extraBold"
                  href="https://calmessimple.com.ar"
                  fontSize="20px"
                >
                  ver el colchon
                  </Button>
            )
         }
        </DivTextButton>
         { !isHotsale && <Degrade/>} 
        </Container>) :(
            <ContainerSleep $imageDesktop={imageDesktop} $imageMobile={imageMobile}>
            <DivTitleButton>
                <Titles
                titleTag="h4"
                 font= "extraBold"
                 fontSize="5rem"
                 color= "white"
                 lineHeight= "0.8em"
                 letterSpacing= "-2.3px"
                 align= "right"
                 responsiveMobile={{
                    fontSize: "3.2em",
                    align: "center",
                }
                 }>
                ¿vamos a <br /> dormir?
                </Titles>
                <Button
                href="/"
                borderRadius="8px"
                backgroundColorHover= "white"
                textColor= "white"
                textColorHover= "yellowCalm"
                borderColor= "white"
                font= "extraBold"
                fontSize= "1.2em"
                width="xsmall">
                ver colchón
                </Button>
             </DivTitleButton></ContainerSleep>
        )}
    </>
    );
};

export default ButtonSection
