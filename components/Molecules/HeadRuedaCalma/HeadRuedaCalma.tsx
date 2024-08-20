import {
    ContainerRuedaDeCalma,
    ContainerText,
    EmptyDiv,
  } from "./styled";

import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text"

export const HeadRuedaCalma = () => {
    return (
        <ContainerRuedaDeCalma>
            <ContainerText>
            <Titles
            align="right"
            font="extraBold"
            letterSpacing="-1.1px"
            lineHeight="1em"
            fontSize="92px"
            color="shadeOfViolet"
            responsiveMobile={{
                fontSize:"3.2rem",
                align:"center"
            }}
            >
                Rueda de la Calma
            </Titles>
            <Text
            color="shadeOfViolet"
            font="regular"
            align="right"
            fontSize="1.6rem"
            responsiveMobile={{
                fontSize:"1rem",
                align:"center"
            }}
            >
                hacé girar la rueda y ganá platita.
            </Text>
            </ContainerText>
            <EmptyDiv></EmptyDiv>
        </ContainerRuedaDeCalma>
    )
}