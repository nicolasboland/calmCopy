import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Text from "@/components/Atoms/Typography/Text"
import TitleAndVideo from "@/components/Molecules/TitleAndVideo/TitleAndVideo"
import TitleDescriptionAndMedia from "@/components/Molecules/TitleDescriptionAndMedia/TitleDescriptionAndMedia"
import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection"
import Directions from "@/components/Organisms/Directions/Directions"
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"
import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor"
import SiestarioReserva from "@/components/Organisms/SiestarioReserva/SiestarioReserva"
import faqQuestions from "@/jsons/FrequentQuestions/Localm.json";
import {trustLocalm} from "./trustLocalm";
import { ThreeBlockText } from "@/components/Molecules/ThreeBlockText/ThreeBlockText"
import { ContainerExperience } from "./styled"

const Localm = () => {
    return(
        <>
        <HeaderBackColor 
            backgroundImage="https://calmessimple.com.ar/wp-content/uploads/2023/07/portada_localm-1.webp"
            height="40vw"
            title="Localm."
            titleColor="white"
            titleFont="bold"
            titleFontSize="9.2em"
            subtitle="vení a visitarnos y llevate"    
            subtitleBold=" el mejor descanso"
            subtitleColor="white"
            subtitleFont="light"
            subtitleFontSize="2.5em"
            lessMargin
        />
        <Directions/>

        <SiestarioReserva />
        
        <ContainerExperience>
            <TitleDescriptionAndMedia 
            image={{
                src: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8c38695d-2973-46f8-a677-c773f73dc800/fit=cover',
                alt: "experienceImage"
            }}
            text={{
                title: (<>nuestra receta para una <br /> </>),
                boldTitle: "experiencia inolvidable",
                text:(
                <>
                Acercate al localm y abrí la puerta hacia tu 
                <Text
                textTag="span"
                font="extraBold"
                > descanso soñado</Text>,
                vení en bici o con tu mascota. Vas a ser recibido por{" "}
                <Text
                textTag="span"
                font="extraBold"> sommeliers de colchones</Text> que te van a ayudar a encontrar tu
                descanso ideal. 
                </>
                )
            }}/>
            <ThreeBlockText
                info={trustLocalm}
                hasAccordion
            />
        </ContainerExperience>

        <TitleAndVideo 
            title="conocé nuestro"
            boldTitle="localm"
            videoUrl='https://calmessimple.com.ar/wp-content/uploads/2023/06/Final-Ad-Horizontal.mp4'
            isMp4
            hasAutoPlay
            hasMuted
            hasLoop
        />

        <Margin margin="3em"/>

        <FrequentQuestions items={faqQuestions} title="preguntas" boldTitle="frecuentes"/>

        <ButtonSection 
        imageDesktop="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8b1775e5-dc87-4d4e-87e7-7fd4f6c5f900/fit=cover" 
        imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8b1775e5-dc87-4d4e-87e7-7fd4f6c5f900/fit=cover" 
        middleButton={false}/>
        </>
    )
}
export default Localm