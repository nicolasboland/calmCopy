import Referidos from "../../Organisms/Referidos/Referidos";
import { useEffect, useState } from "react";
import faqAccordionJson from '@/jsons/FrequentQuestions/FrequentQuestions.json'
import { HeadRuedaCalma } from "@/components/Molecules/HeadRuedaCalma/HeadRuedaCalma"
import { CodigoReferidos } from "@/components/Organisms/CodigoReferidos/CodigoReferidos"
import info from "./info.json"
import { ThreeBlockText } from "@/components/Molecules/ThreeBlockText/ThreeBlockText"
import { BeneficiosCalma } from "../../Organisms/BeneficiosCalma/BeneficiosCalma";
import FrequentQuestions from "../../Organisms/FrequentQuestions/FrequentQuestions";
import { getRDC } from "@/state/order/orderSelector"
import { useSelector, useDispatch } from "react-redux";
import { IStore } from '@/state/types';
import { topPage } from '@/utils/topPage';
import { onRDCLoadingFinished } from "@/state/loading/loadingActions";

export const RuedaDeCalmaComponent = () => {
  const dispatch = useDispatch()
  const rdcData = useSelector(getRDC)
  const orderDataError = useSelector((state: IStore) => state.order.error)
  const [isSearch, setIsSearch] = useState(false);
  const [errorText, setErrorText] = useState< string | undefined>();

  useEffect(() => {
    if (rdcData && !orderDataError && rdcData.error === null) {
      setIsSearch(true)
      topPage()
    } else if (rdcData && rdcData.error !== null) {
      const couponRegex = /coupon: (\S+)/;
      const match = rdcData.error.match(couponRegex);
      if (match) {
        setErrorText(`No se encontraron ordenes que hayan usado este cupon: ${match[1]}` )
      } else {
        setErrorText(`No se encontró ningún cupón asociado al mail` )
      }
      setIsSearch(false)
    } else {
      setIsSearch(false)
    }
    dispatch(onRDCLoadingFinished())
    }, [rdcData, orderDataError])

    const handleViewChange = () => {
      setIsSearch(prevState => !prevState)
      topPage()
    }

  return (
    <div>
      {!isSearch ? (
        <>
          <HeadRuedaCalma/>

          <CodigoReferidos errorText={errorText}/>

          <ThreeBlockText
          info={info}
          isOrange
          title={{
            color:"darkerYellowCalm",
            hasTitle: true,
            font:"light",
            boldTitle:"rueda de la calma.",
            fontSize:"2em",
            title: "cómo funciona la",
            responsiveFontSize: "1.5em"
          }}
        />
          <BeneficiosCalma/>

          <FrequentQuestions
            title="Preguntas Frecuentes"
            items={faqAccordionJson.RuedaDeLaCalma}
            noBackgroundColor
          />
        </>
      ) : ( isSearch && rdcData && rdcData.error === null) && (
        <Referidos
        data={rdcData.data}
        setView={handleViewChange}
        />
      )}
    </div>
  );
};

export default RuedaDeCalmaComponent;
