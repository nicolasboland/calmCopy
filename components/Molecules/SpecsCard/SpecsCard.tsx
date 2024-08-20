import {
    DivMapInformation,
    InfomationUnit,
    DivImgInformation,
    DivTextInformation,
    SelectedProduct
} from "./styled";
import { Iprops } from "./types";
import Titles from "@/components/Atoms/Typography/Titles";
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text";
import Button from "@/components/Atoms/Buttons/Button";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { useState } from "react";
import Quizz from '@/components/Molecules/Quizz/Quizz';

const SpecsCard = ({
    title,
    image,
    subtitle,
    button,
    isSelected
  }: Iprops) => {
    const [quizzActive, setQuizzActive] = useState(false)
    
    const quizzHandle = () => {
      setQuizzActive(!quizzActive)
    }

    return (
        <InfomationUnit $isSelected={isSelected}>
            <Margin margin="2rem 0 1rem 0" marginMobile="1rem 0 0.5rem 0">
                <Titles
                titleTag="h3" 
                color="steel"
                font="light"
                fontSize="1.2em"
                >
                  {isSelected ? "Encontrá tu" : title.text}
                </Titles>

                <Titles
                titleTag="h3"
                color="offBlack"
                font="extraBold"
                fontSize="1.2em">
                {isSelected ? "Almohada Ideal" : title.subtext}
                </Titles><br/>
            </Margin>

            <DivImgInformation>
                <Images
                    src={isSelected ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8ef34e54-e4e1-490b-b2fe-632ed60b3200/fit=cover" : image.src}
                    alt={image.alt}
                    height='auto'
                    width="100%"
                    isLazy
                />
                <Margin margin="0 0 1rem 0" marginMobile="1rem 0 0.5rem 0"/>
            </DivImgInformation>

            {
                isSelected ? (
                <DivMapInformation>
                    <DivTextInformation>
                        <Margin margin="0 5px">
                            <Text
                            color="offBlack"
                            font="light"
                            fontSize=".9em"
                            >
                                Respondé esta breve test para encontrar
                            </Text>
                            
                            <Text
                            color="offBlack"
                            font="extraBold"
                            fontSize=".9em">
                                tu match perfecto.
                            </Text>
                        </Margin>
                    </DivTextInformation>
                    <DivTextInformation>
                        <Text
                        color="offBlack"
                        font="light"
                        fontSize=".9em"
                        >
                            Tranqui, no toma más de
                        </Text>
                        
                        <Text
                        color="offBlack"
                        font="extraBold"
                        fontSize=".9em">
                            5 minutos.
                        </Text>
                    </DivTextInformation>
                </DivMapInformation>
                ) : 
                subtitle && subtitle.map((subtitle, index) => (
                    <DivMapInformation key={index}>
                        <DivTextInformation>
                            <>
                                <Text
                                color="offBlack"
                                font="extraBold"
                                fontSize="1em"
                                >
                                    {subtitle.text}
                                </Text>
                                
                                <Text
                                color="offBlack"
                                font="light"
                                fontSize="1em">
                                    {subtitle.subtext}
                                </Text>
                            </>
                        </DivTextInformation>
                    </DivMapInformation>
                    ))
            }

            <DivTextInformation>
                <Margin margin="1rem 0" marginMobile="0.5rem 0">
                    {
                        isSelected ?
                        <Button 
                        borderRadius='8px'
                        backgroundColor="lynxWhite"
                        borderColor='yellowCalm'
                        backgroundColorHover="yellowCalm"
                        textColor="yellowCalm"
                        textColorHover="white"
                        font="bold"
                        fontSize="15px"
                        sizeMobile="small"
                        onClick={quizzHandle}
                        >
                            Responder
                        </Button> : 
                        <Button 
                        href={button.href}
                        borderRadius='8px'
                        backgroundColor="lynxWhite"
                        borderColor='yellowCalm'
                        backgroundColorHover="yellowCalm"
                        textColor="yellowCalm"
                        textColorHover="white"
                        font="bold"
                        fontSize="15px"
                        sizeMobile="small"
                        >
                            Es para mí
                        </Button>
                    }
                </Margin>
            </DivTextInformation>
            {
                quizzActive && 
                    <Quizz quizzActive={quizzActive} closeHandle={quizzHandle} quizzKey="FB7U3xzq"/>
            }
        </InfomationUnit>
    )}


export default SpecsCard;