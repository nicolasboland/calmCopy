import { DivCancel, DivImagen, ContactText, DivText } from "./styled"
import Images from "@/components/Atoms/Images/Images"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"

const TextAndImageCancelar = () => {
  return (
    <DivCancel>
      <DivImagen>
        <Images
          width="100px"
          height="100px"
          src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2ad809c2-f0bf-4c19-1ff4-eaad569fdf00/fit=cover"
          data-src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2ad809c2-f0bf-4c19-1ff4-eaad569fdf00/fit=cover"
          alt="Icono de Caja con colchón"
        ></Images>
      </DivImagen>
      <DivText>
        <Titles
          titleTag="h4"
          color="thamarBlack"
          fontSize="1.41rem"
          font="extraBold"
        >
          Para solicitar una cancelación contáctanos por:
        </Titles>
        <Margin margin="1rem 0">
          <ContactText>
            <Text font="bold" color="yellowCalm">
              Teléfono o WhatsApp:
            </Text>
            <Margin margin="3px" />
            <Text font="bold" color="steel">
              +54 9 11 4049-0344
            </Text>
          </ContactText>
        </Margin>
        <Margin margin="1rem 0">
          <ContactText>
            <Text font="bold" color="yellowCalm">
              Mail:
            </Text>
            <Margin margin="3px" />
            <Text font="bold" color="steel">
              hola@calmessimple.com.ar
            </Text>
          </ContactText>
        </Margin>
      </DivText>
    </DivCancel>
  )
}

export default TextAndImageCancelar
