import HeaderSiestario from "@/components/Organisms/HeaderSiestario/HeaderSiestario"
import Facts from "@/components/Organisms/Facts/Facts"
import SietarioInformation from "../../Organisms/SietarioInformation/SietarioInformation"
import SiestarioReserva from "@/components/Organisms/SiestarioReserva/SiestarioReserva"
import VirtualTour from "../../Organisms/VirtualTour/VirtualTour"
import { SeparatorSiestario } from "@/utils/Icons"
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"
import faqQuestions from "@/jsons/FrequentQuestions/SiestarioQuestions.json";

const Siestario = () => {
  return (
    <>
      <HeaderSiestario />
      <Facts />
      <SeparatorSiestario/>
      <SietarioInformation />
      <FrequentQuestions
        title="preguntas"
        boldTitle="frecuentas"
        items={faqQuestions}
        color="millionGray"
      />
      <SiestarioReserva/>
      <VirtualTour />
    </>
  )
}

export default Siestario
