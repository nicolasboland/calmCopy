import TextAndImageCancelar from "@/components/Molecules/TextAndImageCancelar/TextAndImageCancelar"
import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection"
import HeaderBackColor from "@/components/Organisms/HeaderBackColor/HeaderBackColor"

const CancelarCompra = () => {
  return (
    <>
      <HeaderBackColor
        title="Arrepentimiento de compra"
        subtitle="Tenes 30 días corridos para cancelar tu compra a partir del día de la entrega del producto."
        titleColor="decorYellow"
        titleFontSize="2em"
        titleFont="extraBold"
        subtitleColor="thamarBlack"
        subtitleFontSize="15px"
        subtitleFont="extraBold"
        backgroundColor="lightAswadBlack"
      />

      <TextAndImageCancelar />

      <ButtonSection
        imageDesktop="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
        imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/b7a49075-6d15-4198-e230-8df717639600/fit=cover"
        middleButton
      />
    </>
  )
}

export default CancelarCompra
