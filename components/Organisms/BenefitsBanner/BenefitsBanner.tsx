import Images from "@/components/Atoms/Images/Images"
import BenefitsBannerCarousel from "../BenefitsBannerCarousel/BenefitsBannerCarousel"
import { BenefitWrapper, Wrapper } from "./styled"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { useRouter } from "next/router"

const Benefit = ({ img, text }: { img: string; text: string }) => {
  return (
    <BenefitWrapper>
      <Images src={img} alt={text} width="20px" isLazy/>
      <Margin margin="0 3px" />
      <Text
        fontSize=".8em"
        lineHeight="30px"
        font="medium"
        color="wildViolet"
        responsiveMobile={{ fontSize: "0.7em" }}
        align="center"
      >
        {text}
      </Text>
    </BenefitWrapper>
  )
}

const BenefitsBanner = () => {
  const router = useRouter()
  const { asPath } = router;
  const isSixCuotas = /bb|perros|almohada|edredon|tusor|sabanas|protector|mesa|mueble/i.test(asPath);
  
  return (
    <Wrapper>
      <BenefitsBannerCarousel
        items={[
          <Benefit
            img="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/bb7fe7fb-e75c-48c9-6580-118c01b71a00/fit=cover"
            text="30 noches de prueba"
          />,
          <Benefit
            img="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/472a8bb1-fcb0-43ee-f2f8-059c277b1200/fit=cover"
            text="Envío gratis"
          />,
          <Benefit
            img="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ee9490e7-ef85-4e4b-ea08-dc58c725d800/fit=cover"
            text={ isSixCuotas ? "6 cuotas sin interés" : "12 cuotas sin interés"}
          />,
          <Benefit
            img="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/5d4d0487-1509-483a-b2a6-516472ebff00/fit=cover"
            text={ isSixCuotas ? "10% Off extra con transferencia" : "20% Off extra con transferencia"}
          />
        ]}
      />
    </Wrapper>
  )
}

export default BenefitsBanner
