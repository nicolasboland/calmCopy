import Titles from "@/components/Atoms/Typography/Titles";
import ButtonSection from "@/components/Organisms/ButtonSection/ButtonSection";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { TyCCards } from "@/components/Organisms/TyCCards/TyCCards";

const InformationTyCPromos = () => {

  return (
    <>
      <Margin margin="3rem 0">
        <Titles
        font="regular"
        fontSize="1.8rem"
        align="center"
        lineHeight="2rem"
        letterSpacing="0.1rem"
        color="millionGray"
        >
          Términos y condiciones de promociones
        </Titles>
      </Margin>

      <TyCCards/>

      <ButtonSection
      imageDesktop="https://calmessimple.com.ar/wp-content/uploads/2019/10/FotoColch%C3%B3n-02.jpg"
      imageMobile="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/cdaf6cdb-48ef-4752-b813-63d88f389d00/fit=cover"
      middleButton
      />
    </>
  );
};

export default InformationTyCPromos;
