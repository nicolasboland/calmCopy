import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection"
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"
import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor"
import InfoCards from "@/components/Organisms/InfoCards/InfoCards"
import helpJson from "@/utils/helpComponent.json"
import faqAccordion from "@/jsons/FrequentQuestions/FrequentQuestions.json"

const NochesDePruebaEnCasa = () => {
  return (
    <>
      <HeaderBackColor
        title="Cómo funcionan las 30 noches de prueba"
        subtitle="Probá cualquier producto de Calm por 30 noches. Si no te gusta, te devolvemos todo el dinero. Así de simple"
        titleColor="decorYellow"
        titleFontSize="1.9rem"
        subtitleColor="aswadBlack"
        subtitleFontSize="1.2rem"
        backgroundColor="superSilver"
      />

      <InfoCards
        title="Paso a paso:"
        cards={helpJson.cards30Noches}
        is30Noches
      />

      <FrequentQuestions
        title=""
        boldTitle="Preguntas Frecuentes"
        items={faqAccordion.TestNights}
        noBackgroundColor
      />

      <ButtonSection
        middleButton
        imageDesktop="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
        imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
      />
    </>
  )
}

export default NochesDePruebaEnCasa
