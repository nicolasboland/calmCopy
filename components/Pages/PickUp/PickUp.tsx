import DescriptionVehicles from "@/components/Organisms/DescriptionVehicles/DescriptionVehicles"
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"
import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor"
import InfoCards from "@/components/Organisms/InfoCards/InfoCards"
import { useWidth } from "@/hooks/useWidth"
import faqAccordionJson from "@/jsons/FrequentQuestions/FrequentQuestions.json"
import { deviceSizes } from "@/utils/Theme"
import helpJson from "@/utils/helpComponent.json"

const PickUp = () => {
  const width = useWidth()

  return (
    <>
      <HeaderBackColor
        backgroundImage="https://calmessimple.com.ar/wp-content/uploads/2021/09/2700x900_HOme9del9_Desktop.webp"
        height="45vh"
        title="RETIRO"
        subtitle="Retira tu pedido por nuestras oficinas "
        subtitleColor="white"
        subtitleFontSize="1.2em"
        subtitleFont="medium"
        subtitleBold="de forma simple, rápida y efectiva."
        hasTitleShadow
      />

      <HeaderBackColor
        title="Ofrecemos la opción de retiro para todos nuestros productos."
        subtitle="Si vivís cerca de nuestras oficinas, estabas por la zona o solo no podes aguantar las ganas de tener tu nuevo descanso, desde Calm te ofrecemos esta opción 🚀"
        titleColor="lightOffBlack"
        titleFontSize="20px"
        titleFont="extraBold"
        subtitleColor="lightOffBlack"
        subtitleFontSize="20px"
        subtitleFont="regular"
        backgroundColor="lynxWhite"
      />

      <InfoCards
        title="¿Cómo funciona?"
        cards={helpJson.cardsPickUp}
        is30Noches
        isPickUp
      />

      <DescriptionVehicles />

      <FrequentQuestions
        title="Preguntas Frecuentes"
        items={faqAccordionJson.PickUp}
        color="black"
        noBackgroundColor
      />
    </>
  )
}

export default PickUp
