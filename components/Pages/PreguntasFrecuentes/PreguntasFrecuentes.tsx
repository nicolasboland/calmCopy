import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"
import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor"
import QuestionsJson from "./FrequentQuestions.json"
import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection"

const PreguntasFrecuentes = () => {
  return (
    <>
      <HeaderBackColor
        title="Preguntas frecuentes"
        subtitle="Estas son las preguntas que más nos hacen, si tenes otra escribinos al chat. Te contestamos al toque."
        titleColor="decorYellow"
        titleFontSize="2em"
        titleFont="bold"
        subtitleColor="aswadBlack"
        subtitleFontSize="0.9rem"
        subtitleFont="extraBold"
        backgroundColor="superSilver"
      />

      <FrequentQuestions
        title=""
        boldTitle="¿Dudas sobre los productos?"
        items={QuestionsJson.Products}
        noBackgroundColor
      />

      <FrequentQuestions
        title=""
        boldTitle="¿Dudas sobre los medios de pago?"
        items={QuestionsJson.PaymentMethods}
        noBackgroundColor
      />

      <FrequentQuestions
        title=""
        boldTitle="¿Dudas sobre el envío?"
        items={QuestionsJson.Shipment}
        noBackgroundColor
      />

      <ButtonSection
        imageDesktop="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
        imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
        middleButton
      />
    </>
  )
}

export default PreguntasFrecuentes
