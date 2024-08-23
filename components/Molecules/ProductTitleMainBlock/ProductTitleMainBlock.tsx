import { ComponentWrapper, TitleWrapper } from "./styled"
import { IProps } from "./types"
import parse from "html-react-parser"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"

const ProductTitleMainBlock = ({
  title,
  description,
  isCombo
}: IProps) => {

  return (
    <ComponentWrapper>
      <TitleWrapper>
        <Titles
          titleTag="h1"
          fontSize="1.9rem"
          font="bold"
          color="offBlack"
          responsiveMobile={{
            fontSize: "1.7rem",
            lineHeight: "32px"
          }}
          lineHeight="40px"
        >
          {title}
        </Titles>

        <Text
        color="millionGray"
        fontSize="1rem" 
        font="medium"
        responsiveMobile={{
          fontSize: "0.9rem",
        }}
        >
          {description && parse(description)}
        </Text>

        {isCombo && (
          <>
            <Text
                textTag="span"
                font="extraBold"
                color="thamarBlack"
                fontSize="1em"
                lineHeight="20px"
              >
                ¿Qué incluye?
                <br />
                x1 Colchón Calm
                <br />
                x1 Base de Hierro Calm
              </Text>
          </>
        )}
      </TitleWrapper>
    </ComponentWrapper>
  )
}

export default ProductTitleMainBlock
