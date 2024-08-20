import {
  ContainerImg,
  ContainerTitleButton,
  ContainerNotFound,
  DivButton
} from "./styled"
import { IProps } from "./types"
import Titles from "@/components/Atoms/Typography/Titles"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import LinksContact from "@/components/Molecules/LinksContact/LinksContact"

export default function NotFoundComponent({ isYellowTitle }: IProps) {
  return (
    <ContainerNotFound>
      <ContainerImg>
        <Images
          width="300px"
          height="150px"
          src="https://calmessimple.com.ar/wp-content/uploads/2021/04/404.svg"
          alt="404"
        />
      </ContainerImg>
      <ContainerTitleButton>
        <Titles
          titleTag="h3"
          font="bold"
          fontSize="1.7em"
          align="center"
          color={isYellowTitle ? "decorYellow" : "millionGray"}
          responsiveMobile={{
            align: "center",
            fontSize: "1.7rem",
            lineHeight: "1",
            width: "90%"
          }}
        >
          Ups, parece que esta página se fue a mimir
        </Titles>
        <DivButton>
          <Button
            borderRadius="0.313em"
            backgroundColor="decorYellow"
            size="xsmall"
            borderColor="decorYellow"
            href="/"
            font="bold"
            textColor="white"
            fontSize="1.3em"
          >
            Volver a la Home
          </Button>
        </DivButton>
      </ContainerTitleButton>
      <LinksContact
        subtitle={{
          text: "Escribinos",
          subtext: "hola@calmessimple.com.ar",
          text1: "Llámanos",
          subtext1: "+54 9 1151714371"
        }}
        image={{
          href: "mailto:hola@calmessimple.com.ar",
          src: "https://calmessimple.com.ar/wp-content/uploads/2021/04/mail.svg",
          alt: "contact mail",
          href1: "tel:+5491140490344",
          src1: "https://calmessimple.com.ar/wp-content/uploads/2021/04/telefono.svg",
          alt1: "contact telefono"
        }}
      />
    </ContainerNotFound>
  )
}
