import { DivHelp, DivCards } from "./styled"
import { IProps } from "./types"
import InfoCard from "@/components/Molecules/InfoCard/InfoCard"
import Titles from "@/components/Atoms/Typography/Titles"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"

const InfoCards = ({ cards, title, is30Noches, isPickUp, isHotSale }: IProps) => {
  return (
    <DivHelp>
      <Titles
        titleTag="h2"
        fontSize="1.9em"
        align="center"
        font="light"
        responsiveMobile={{
          fontSize: "1.5em"
        }}
      >
        {title}
      </Titles>
      <Margin margin="20px 0 0 0" />
      <DivCards>
        {cards.map((card, index) => (
          <InfoCard
            image={card.img.url}
            altImage={card.img.alt}
            title={card.step}
            text={card.text}
            index={index}
            isHotSale={isHotSale}
            is30Noches={is30Noches}
            isPickUp={isPickUp}
            key={index}
          />
        ))}
      </DivCards>
    </DivHelp>
  )
}

export default InfoCards
