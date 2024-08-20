import Images from "@/components/Atoms/Images/Images"
import Text from "@/components/Atoms/Typography/Text"
import { IProps, IconFunctions } from "./types"
import { 
    NucleoYellowcalm,
    DosCapasYellowcalm,
    TresCapasYellowcalm
 } from "@/utils/Icons"
 import { Container, ImagesContainer, Specs, ImagesPosition } from "./styled"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"

const InfoCapasCategory = ({arrCapas, specs, isOriginal}: IProps) => {

    const iconFunctions: IconFunctions = {
        NucleoYellowcalm,
        DosCapasYellowcalm,
        TresCapasYellowcalm
    };

    return (
        <Container>
            <ImagesContainer $isOriginal={isOriginal}>
            {
                arrCapas.map((item, index) => 
                    <ImagesPosition $index={arrCapas.length - index} $isOriginal={isOriginal} key={index}>
                        <Images src={item} alt={item} key={index}/>
                    </ImagesPosition>
                )
            }
            </ImagesContainer>

            <Margin margin="15px"/>

            {
                specs.map((item, index) => {
                    const IconComponent = iconFunctions[item.icon];

                    return (
                        <Specs key={index}>
                            <IconComponent />

                            <Text
                            font="medium"
                            fontSize="1.2rem"
                            align="center"
                            responsiveMobile={{
                                fontSize:"1rem"
                            }}
                            >
                                {item.text}
                            </Text>
                        </Specs>
                    )

                })
            }

            <Margin margin="35px"/>
        </Container>
    )
}

export default InfoCapasCategory;