import {
    ContainerBenefitsCalm,
    ContainerBenefitsCalmBox,
    ContainerImg,
} from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from  "@/components/Atoms/Typography/Text";
import Images from "@/components/Atoms/Images/Images";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

export const BeneficiosCalma = () => {
    return(
        <ContainerBenefitsCalm>
            <ContainerBenefitsCalmBox>
                <Margin margin="1.5rem" >
                    <Titles
                    titleTag="h3"
                    align="center"
                    fontSize="1.8rem"
                    font="light"
                    color="dullViolet"
                    responsiveMobile={{
                        fontSize:"1.1rem"
                    }}
                    >
                        Beneficios por proteger y transmitir La Calma
                    </Titles>
                </Margin>

                <Text
                font="medium"
                align="center"
                fontSize="1rem"
                color="dullViolet"
                responsiveMobile={{
                    fontSize:"0.7rem"
                }}
                >
                    Cuando alguien realiza una compra gracias a vos, lxs 2 ganan.
                </Text>

                <ContainerImg>
                    <Images 
                    src={"https://calmessimple.com.ar/wp-content/uploads/2023/09/tabla_rdc.webp"} 
                    alt="beneficios"
                    width="90%"
                    height="auto" 
                    borderRadius="5px" 
                    responsiveMobile={{ width:"100%"}}/>
                </ContainerImg>
            </ContainerBenefitsCalmBox>
        </ContainerBenefitsCalm>
    )
}