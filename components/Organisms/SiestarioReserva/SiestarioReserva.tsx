import {
    DivSleepTest,
    DivTexto,
    DivImage,
    DivButtons,
  } from "./styled";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Titles from "@/components/Atoms/Typography/Titles";
import Button from "@/components/Atoms/Buttons/Button";
import Images from "@/components/Atoms/Images/Images";
  
  const SiestarioReserva = () => {
    return (
      <DivSleepTest>
        <DivTexto>
          <Titles
            titleTag="h3"
            color="offBlack"
            font="light"
            fontSize="2.2em"
            letterSpacing="-0.2px"
            align="left"
            responsiveMobile={{
                fontSize:"1.3em"
            }}
            boldTitle="la siesta">Venite a dormir
          </Titles>

          <Margin margin="20px" />

          <Titles 
            titleTag="h2"
            color="offBlack"
            font="light"
            align="left"
            fontSize="18px"
            letterSpacing="-0.2px"
            responsiveMobile={{
                fontSize:"0.9em"
            }}>
            Probá nuestros productos durante 45 minutos de siesta en nuestro local
            de Santos Dumont 3507. Te damos todo lo que necesitás para un buen
            descanso.
          </Titles>

          <Margin margin="20px" />

          <DivButtons>
            <Button
                href="https://calmessimple.meitre.com/"
                font="extraBold"
                fontSize="1.1em"
                backgroundColor="dullViolet"
                borderRadius="8px"
                textColor="white"
                backgroundColorHover="lynxWhite"
                textColorHover="dullViolet"
                borderColor="dullViolet"

            >
                Reservar
            </Button>

            <Button
                href="https://calmessimple.com.ar/siestario-calm/"
                font="extraBold"
                fontSize="0.9em"
                textColor="dullViolet"
            >
                Ver más
            </Button>
          </DivButtons>
        </DivTexto>
        
        <DivImage>
            <Images 
            src="https://calmessimple.com.ar/wp-content/uploads/2023/08/IMG_9610-1.webp"
            alt="Prueba Colchon"
            width="80%"
            borderRadius="10px"
            responsiveMobile={{
                width:"100%"
            }}
            />
        </DivImage>
      </DivSleepTest>
    );
  };
  
  export default SiestarioReserva;
  