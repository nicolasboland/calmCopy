import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Icons from "@/components/Atoms/Icons/Icons"
import { IProps, IconFunctions} from "./types"
import { InfoCard } from "./styled"
import {
    Box,
    Levels,
    noSlipBase,
    ArgentineFlag,
    Acaro,
    Generic,
    AlmohadaCapa,
    Herramienta,
    Insignia,
    Caja,
    Cloud,
    DosCapas,
    BiggerDosCapas,
    Funda,
    BiggerTresCapas,
    SuitCase,
    Moon,
    Ruler,
    Shield,
    Laundry,
    HandOk,
    Tissue,
    Match,
    Treatment,
    DoubleHearts,
    Espacio,
    Lavarropa
} from "@/utils/Icons"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"

export const ProductInfo = ({product, description, info}: IProps) => {

    const iconFunctions: IconFunctions = {
        Box,
        Levels,
        noSlipBase,
        ArgentineFlag,
        Acaro,
        Generic,
        AlmohadaCapa,
        Herramienta,
        Insignia,
        Caja,
        Cloud,
        DosCapas,
        BiggerDosCapas,
        Funda,
        BiggerTresCapas,
        SuitCase,
        Moon,
        Ruler,
        Shield,
        Laundry,
        HandOk,
        Tissue,
        Match,
        Treatment,
        DoubleHearts,
        Espacio,
        Lavarropa
    };
  return (
    <>
        <Titles 
            titleTag="h4"
            font="medium"
            color="lead"
            fontSize="1.3rem"
            fontWeight={600}
        >
            Conocé más sobre {product}
        </Titles>

        <Margin margin="10px 0"/>

        <Text 
            font="medium"
            fontSize="1rem"
            color="millionGray"
            responsiveMobile={{
                fontSize:"0.9rem"
            }}
        >
            {description}
        </Text>

        <Margin margin="20px 0"/>

        <>
            {
                info.map((item, index) => {
                    const IconComponent = iconFunctions[item.imagen];
                    return (
                        <InfoCard key={index}>
                            <Icons>
                                <IconComponent />
                            </Icons>
                            <Text font="medium" fontSize="0.9rem" responsiveMobile={{ fontSize:"0.8rem"}}>
                                {item.texto}
                            </Text>
                        </InfoCard>
                    )
                })
            }
        </>
    </>
  )
}
