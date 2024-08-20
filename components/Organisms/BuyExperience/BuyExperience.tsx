import { Container } from "./styled"
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Images from "@/components/Atoms/Images/Images";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const BuyExperience = () => {
    return (
    <Container>
        <Margin margin="1rem"/>

        <Titles
        titleTag="h2"
        color="yellowCalm"
        font="extraBold"
        fontSize="4rem"
        align="center"
        lineHeight="1"
        responsiveMobile={{
            fontSize:"1.7rem"
        }}
        >
            Creamos una nueva <br/>experiencia de compra.
        </Titles>
        
        <Margin margin="2rem" marginMobile="1rem"/>

        <Images 
        src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/c0357769-b2f5-4ec9-2571-2d5583dfba00/fit=cover"
        alt="compra"
        width="75%"
        />

       <Margin margin="2rem" marginMobile="1rem"/>

        <Text
        color="black"
        fontSize="1.5rem"
        align="center"
        hasStrong
        responsiveMobile={{
            fontSize:".8rem",
            width:"80%"
        }}
        >
            Oferecemos a cada cliente productos de la más <b>alta calidad</b>, precios y descuentos <b>honestos</b><br/> y <b>30 noches de prueba en tu casa</b>, con <b>entrega gratis y rápida</b> a todo el país.
        </Text>

        <Margin margin="1.5rem" marginMobile="1rem"/>

        <Images 
        src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2de38758-5022-4ec9-273b-524ef3dfa800/fit=cover"
        alt="compra"
        width="75%"
        />
        
        <Margin margin="1.5rem" marginMobile=".5rem"/>
    </Container>
    )
}

export default BuyExperience;