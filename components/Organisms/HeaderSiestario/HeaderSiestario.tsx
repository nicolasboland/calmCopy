import React, { useState, useEffect } from "react"
import { MainCircleSection, MainWrapper } from "./styled"
import Titles from "@/components/Atoms/Typography/Titles"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Text from "@/components/Atoms/Typography/Text"
import Button from "@/components/Atoms/Buttons/Button"

function HeaderSiestario() {
  const amarillo = "https://calmessimple.com.ar/wp-content/uploads/2023/08/circuloXL_1.png"
  const violeta = "https://calmessimple.com.ar/wp-content/uploads/2023/08/circuloXL_2.png"
  const [isAmarillo, setIsAmarillo] = useState<boolean>(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAmarillo((anterior) => !anterior)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <MainWrapper>
      <MainCircleSection $image={isAmarillo ? amarillo : violeta}>
        <Margin margin="3rem 0 0 0"/>

        <Titles
        font="extraBold"
        fontSize="3.4rem"
        textDecoration="none"
        lineHeight="0.8rem"
        letterSpacing="-1px"
        align="center"
        color="offBlack"
        responsiveMobile={{
          fontSize:"2.2rem"
        }}
        >
          Siestario calm.
        </Titles>

        <Margin margin="3rem" marginBiggerDesktop="4rem" marginMobile="1.5rem"/>

        <Text
        color="marsh"
        font="regular"
        fontSize="1.7rem"
        textDecoration="none"
        lineHeight="2rem"
        letterSpacing="-1px"
        width={40}
        align="center"
        responsiveMobile={{
          width: "90%",
          fontSize:"1rem",
          lineHeight:"1.2rem",
          align:"center",
        }}
        >
          Despabilate reservando 45 minutos en nuestro siestario, te damos todo lo que necesitás para un buen descanso.
        </Text>

        <Margin margin="2rem"/>

        <Button
        size="medium"
        backgroundColor="darkGrey"
        font="extraBold"
        textColor="white"
        fontSize="1.5rem"
        borderRadius="12px"
        backgroundColorHover="stoneCold"
        href="https://calmessimple.meitre.com/"
        sizeMobile="xsmall"
        >
          Reservar
        </Button>

        <Margin margin="2rem"/>

        <Text
        font="regular"
        fontSize="1.1rem"
        align="center"
        lineHeight="1rem"
        letterSpacing="-0.6px"
        color="marsh"
        width={30}
        responsiveMobile={{
          fontSize:"0.8rem",
          width:"90%"
        }}
        >
          Nuestro siestario <b>es gratuito</b> pero para que más personas puedan disfrutar de esta experiencia, incluimos un <b>seguro de cancelación</b>. Si cancelás 
          con menos de 24hs de anticipación o no asistís el día reservado, se va a cobrar un monto de $2.000 a la tarjeta que ingresas al reservar, si asistís no se te cobra nada.
        </Text>
      </MainCircleSection>
    </MainWrapper>
  )
}

export default HeaderSiestario
