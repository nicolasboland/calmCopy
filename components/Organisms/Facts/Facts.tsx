import React, { useState, useEffect } from "react"
import { FullWrapper, FactsSection, TextWrapper } from "./styles"
import Text from "@/components/Atoms/Typography/Text"

function Facts() {
  const [isAmarillo, setIsAmarillo] = useState<boolean>(true)
  const amarillo = "https://calmessimple.com.ar/wp-content/uploads/2023/08/Circulos.png"
  const violeta = "https://calmessimple.com.ar/wp-content/uploads/2023/08/Circulos22.png"

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAmarillo((anterior) => !anterior)
    }, 6000)

    return () => clearInterval(interval)
  }, [])
  return (
    <FullWrapper>
      <FactsSection $image={isAmarillo ? amarillo : violeta}>
        <TextWrapper $leftAlign={true} $paddingTop={"1rem"}>
          <Text
          align="left"
          fontSize="1.8rem"
          lineHeight="1.9rem"
          font="light"
          width={58}
          responsiveMobile={{
            fontSize:"1.1rem",
            width:"70%"
          }}
          >
            Queremos ver cuánto cambia tu día en <b>45 minutos de descanso</b>. Una habitación que te invita a <b>despertar</b>.
          </Text>
        </TextWrapper>
        <TextWrapper $leftAlign={false} $paddingTop={"21rem"}>
          <Text
          align="right"
          fontSize="1.8rem"
          lineHeight="1.9rem"
          font="light"
          width={58}
          responsiveMobile={{
            fontSize:"1.1rem",
            width:"70%"
          }}
          >
            Para ejercer el despertar hace falta <b>frenar y observar</b>. Animarse a pasar del sueño a la vigilia, es decir, <b>despabilarse</b>.
          </Text>
        </TextWrapper>
      </FactsSection>
    </FullWrapper>
  )
}

export default Facts
  