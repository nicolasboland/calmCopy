import { Card, DivContainerCard, DivImageCard, DivTextCard } from "./styled"
import { IProps } from "./types"
import parse from "html-react-parser"
import Text from "@/components/Atoms/Typography/Text"
import Images from "@/components/Atoms/Images/Images"
import Titles from "@/components/Atoms/Typography/Titles"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { useEffect, useState } from "react"
const InfoCard = ({
  image,
  title,
  text,
  carousel,
  is30Noches,
  isPickUp,
  isHotSale,
  altImage,
  index
}: IProps) => {
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [])

  if (!render) return null
  
  return (
    <Card $carousel={carousel} $is30Noches={is30Noches} $isHotSale={isHotSale} key={index}>
      <DivContainerCard $carousel={carousel}>
        <DivImageCard $carousel={carousel}>
          <Images src={image} alt={altImage} width="125px" height="15vh" responsiveMobile={{width:"125px", height:"auto"}}/>
        </DivImageCard>
        <DivTextCard $carousel={carousel}>
          <Titles
            titleTag="h2"
            color={(is30Noches || isHotSale) ? "decorYellow" : "transparentCalm"}
            fontSize={(is30Noches || isHotSale) && !isPickUp ? "1.4rem" : "2.2em"}
            font="bold"
            textShadow={(is30Noches || isHotSale) ? "0px 0px 10px rgba(0,0,0,0.3)" : ""}
            textStroke={(is30Noches || isHotSale) ? "" : "0.4px white"}
            responsiveMobile={{ fontSize: (is30Noches || isHotSale) ? "20px" : "2em" }}
            lineHeight="1em"
          >
            {title}
          </Titles>
          <Margin margin="20px 0 0 0" />
          <Text
            textTag={(is30Noches || isHotSale) ? "p" : "b"}
            color="drWhite"
            letterSpacing="0"
            font="light"
            fontSize={(is30Noches || isHotSale) ? "0.85em" : "0.95em"}
            responsiveMobile={{ fontSize: (is30Noches || isHotSale) ? "12px" : "0.5em" }}
          >
            {parse(text)}
          </Text>
        </DivTextCard>
      </DivContainerCard>
    </Card>
  )
}

export default InfoCard
