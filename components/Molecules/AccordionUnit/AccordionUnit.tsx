import { useEffect, useState } from "react";
import { IUnitProps } from "./types";
import {
  TitleDiv,
  ImgStatic,
  ImgRotate,
  Content,
  Inner,
  DivIconPlus,
  DivContainerAccordion,
  DivTitleAccordion,
  DivTextAccordion,
  DescriptionAccordion
} from "./styled";
import parse from 'html-react-parser';
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Images from "@/components/Atoms/Images/Images";
import { IconsLinks } from "@/utils/Icons";

const AccordionUnit = ({
  onClick,
  itemName,
  itemContent,
  isActive,
  isProductSS,
  isLastUnit,
  isOrange,
  isFromCapas
}: IUnitProps) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!render) return null
  
  return (
    <DivContainerAccordion $isLastUnit={isLastUnit}>
      <DivTitleAccordion onClick={onClick}>
        <TitleDiv >
        { isProductSS ? (
            <DivIconPlus>
              <Titles
              titleTag="h3"
              color={isOrange ? "darkerYellowCalm" : "offBlack"}
              font="extraBold"
              fontSize="1rem"
              responsiveMobile={{
                fontSize: "16px"
              }}
              >{parse(itemName)}</Titles>
              <ImgStatic
                $isActive={isActive}
              ><Images  src={
                isActive
                  ? IconsLinks.plusLess.less
                  : IconsLinks.plusLess.plus
              }
              alt="flecha"
              widthHTML={20}
              heightHTML={20}/></ImgStatic>
            </DivIconPlus>
          ) : (
            <>
            <Titles
              titleTag="h3"
              color={isOrange ? "darkerYellowCalm" : isFromCapas && isActive ? "yellowCalm" : "offBlack"}
              font="bold"
              fontSize="1.2rem"
            >{parse(itemName)}</Titles>
                <ImgRotate
                  $isActive={isActive}
                 
                ><Images  
                src={IconsLinks.arrow}
                widthHTML={20}
                heightHTML={20}
                alt="flecha"/></ImgRotate>
            </>
            )
         }
        </TitleDiv>
      </DivTitleAccordion>
      <DivTextAccordion>
        <Content id={itemName} $itemName={itemName} $isActive={isActive} $render={render} >
        <DescriptionAccordion $isProductSS={isProductSS} $isFromCapas={isFromCapas}>
            <Inner
              id={itemName}
            >
              {parse(itemContent)}
            </Inner>
          </DescriptionAccordion>
        </Content>
      </DivTextAccordion>
    </DivContainerAccordion>
  );
};

export default AccordionUnit;
