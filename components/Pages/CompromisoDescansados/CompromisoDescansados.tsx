import React from "react";
import helpJson from "@/utils/helpComponent.json"
import { useWidth } from "@/hooks/useWidth";
import HeaderButton from "../../Organisms/HeaderButton/HeaderButton"
import InfoCards from "@/components/Organisms/InfoCards/InfoCards";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Withdrawals from "@/components/Molecules/Withdrawals/Withdrawals";
import TitleDescriptionAndMedia from "@/components/Molecules/TitleDescriptionAndMedia/TitleDescriptionAndMedia";
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions";
import faqQuestions from "@/jsons/FrequentQuestions/CommitmentQuestions.json";


const CompromisoDescansados = () => {
  const width = useWidth()
  const breakpoint = 768;

return(
    <>
    <HeaderButton 
    isCompromiso
    image="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a353d3ad-9c02-4662-34d0-e3cb1b164400/fit=cover"
    altImage="CompormisoDescansados"
    title={(
      <>
      Doná tu ex colchón <br />
      y le buscamos un <br />
      nuevo hogar.
      </>
    )}
    subTitle= "Ahora no 1, sino 2 van a descansar mejor"
    textButton="¡Quiero Donar!"
    redirectButton="https://calmessimple.com.ar/compromiso-descansados/"
    />
    <div>
        <Margin margin="2rem"/>
    {width > breakpoint ? (
      <Margin margin="0" marginMobile="0 1em">
          <Text
            color="offBlack"
            font="medium"
            fontSize="1.3em"
            letterSpacing="-0.3px"
            align="center"
           >
            Tenemos una propuesta para vos: el colchón que ya no vas a usar,{" "}
            <br />
            tu ex colchón, lo podés donar y nosotrxs nos encargamos de buscarle
            <br />
            un nuevo hogar para que alguien más pueda descansar mejor.
          </Text></Margin>
        ) : (
      <Margin margin="0" marginMobile="0 1em">
          <Text
            color="offBlack"
            font="medium"
            fontSize="0.9em"
            letterSpacing="-0.3px"
            align="center"
            >
            Tenemos una propuesta para vos: el colchón que ya no vas a usar, tu
            ex colchón, lo podés donar y nosotrxs nos encargamos de buscarle un
            nuevo hogar para que alguien más pueda descansar mejor.
          </Text></Margin>
        )}
        <Margin margin="3rem"/>
        <Text 
            color="offBlack"
            font="bold"
            fontSize="1.3em"
            letterSpacing="-0.3px"
            align="center"
            responsiveMobile={{
                fontSize: "1.2em"
            }}>#CompromisoDescansadxs ✨</Text>

            <Margin margin="1rem" marginMobile="0"/>
    </div>
    <Margin margin="0 0 1rem 0"/>
    
    <InfoCards cards={helpJson.cardsCompromisosDescansados} title="¿Cómo hago para ayudar?"/>

    <Withdrawals />

    <TitleDescriptionAndMedia 
    image={{
        src:"https://calmessimple.com.ar/wp-content/uploads/2021/11/PHOTO-2021-11-08-18-26-59-1024x768.jpg",
        alt:"colchones donados"
    }} 
    text={{
        boldTitle:"Cyber Compromiso Descansadxs ✨",
        text:(
            <>
            Durante Cyber Monday 2021 ampliamos nuestra propuesta para llegar a
            más zonas del país.
            <br />
            <br />
            Se donaron 282 colchones, 282 familias recibieron un colchón y
            mejoraron su descanso.
            </>
            ),
    }}
    maxWidth="1140px"
    />
    <TitleDescriptionAndMedia 
   
    text={{
        boldTitle:"Hot Sale Solidario",
        text:(
            <>
           En nuestro último Hot Sale nos unimos a Techo Argentina y a Cruz del
          Sur para ofrecer una propuesta solidaria.
          <br />
          <br />
          240 personas donaron su ex colchón para que más familias tengan un
          lugar donde descansar.
            </>
            ),
    }}
    video={{
        src:"https://www.youtube.com/embed/P5QaFyfjDO0?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcalmessimple.com.ar&amp;widgetid=1",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        title:"Compromiso Descansadxs - Hot Sale 2021"
    }}
    maxWidth="1140px"
    />
    <FrequentQuestions noBackgroundColor items={faqQuestions} title="" boldTitle="Preguntas frecuentes"/>
    <Margin margin="3em"/>
    </>
)
}
export default CompromisoDescansados;