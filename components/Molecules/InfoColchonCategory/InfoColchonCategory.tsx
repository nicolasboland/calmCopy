import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import { IProps, IconFunctions } from "./types"
import Separator from "@/components/Atoms/Separator/Separator"
import { Container, Specs } from "./styled";
import {
    Shield,
    BackPain,
    Temperature,
    AireOriginal,
    AireHibrido
} from "@/utils/Icons"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const InfoColchonCategory = ({title, isCirculacion, originalInfo, hibridoInfo, mobileLeftText}: IProps) => {

    const iconFunctions: IconFunctions = {
        Shield,
        BackPain,
        Temperature,
        AireOriginal,
        AireHibrido
    };

    const OriginalIcon = iconFunctions[originalInfo.icon];
    const HibridoIcon = iconFunctions[hibridoInfo.icon];

    return (
    <>
        <Titles
        titleTag="h4"
        font="bold"
        fontSize="1.5rem"
        align="center"
        >
            {title}
        </Titles>

        <Separator />

        <Container>
            <Specs $isCirculacion={isCirculacion}>
                <OriginalIcon/>

                <Margin margin="5px"/>

                <Text
                font="medium"
                fontSize="1.1rem"
                align={isCirculacion ? "left" : "center"}
                responsiveMobile={{
                    align:mobileLeftText ? "left" : "center",
                    fontSize:"1rem"
                }}
                >
                    {originalInfo.text}
                </Text>
            </Specs>
            
            <Specs $isCirculacion={isCirculacion}>
                <HibridoIcon/>

                <Margin margin="5px"/>

                <Text
                font="medium"
                fontSize="1.1rem"
                align="center"
                responsiveMobile={{
                    align:mobileLeftText ? "left" : "center",
                    fontSize:"1rem"
                }}
                >
                    {hibridoInfo.text}
                </Text>
            </Specs>
        </Container>
    </>
    )
}

export default InfoColchonCategory;