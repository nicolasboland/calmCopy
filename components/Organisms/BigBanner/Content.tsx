import { 
  SliderWrapper,
  Button,
  ButtonsWrapper,
  Description,
  Title,
  UpperText,
  Column,
  ContentWrapper,
  SecondaryButton,
  Cucarda
} from './styled'
import parse from 'html-react-parser';
import { IPlainImageSlide } from "@/state/hygraph/types";
import { useWidth } from "@/hooks/useWidth";
import { useEffect, useState } from 'react';
import { IContent } from "./types"

const SlideContent = ({ 
  slider,
  isDefault,
  isImagesLoaded,
  preloadImageDesktop,
  preloadImageMobile
  }: IContent) => {
  const [render, setRender] = useState(false)
  const widthScreen = useWidth()
  const breakpoint = 768;

  useEffect(() => {
    setRender(true)
  },[])

  return (
    <SliderWrapper
     $imageSrc={isImagesLoaded ? slider.imagenDesktop : preloadImageDesktop} 
     $mobileImageSrc={isImagesLoaded ? slider.imagenMobile : preloadImageMobile}
     key={slider.titulo}>
      <Cucarda src={slider.cucarda}/>
      <Column>
        <ContentWrapper
        $templateDesktop={slider.templateDesktop}
        $templateMobile={slider.templateMobile}
        >
          {(slider.textoSuperior && render) && <UpperText>{parse(slider.textoSuperior.html)}</UpperText>}
            <Title 
            $isDefault={isDefault}
            $templateDesktop={slider.templateDesktop}
            $templateMobile={slider.templateMobile}
            >
              {slider.titulo}
            </Title>
            {(slider.subtitulo && widthScreen > breakpoint && render) && <Description>{parse(slider.subtitulo.html)}</Description>}
        </ContentWrapper>
          <ButtonsWrapper $hasSecondButton={!!slider.redireccionSecundario && slider.botonTextoSecundario != ""}>
              <Button
                href={slider.redireccionBoton}
                $textColor={slider.botonTextoColor.hex}
                $backgroundColor={slider.botonColorFondo.hex}
                $backgroundHoverColor={slider.botonHoverFondo.hex}
                $hasSecondButton={!!slider.redireccionSecundario && slider.botonTextoSecundario != ""}
              >
                {slider.botonTexto}
              </Button>
              {slider.redireccionSecundario && slider.botonTextoSecundario != "" &&
                <SecondaryButton
                  href={slider.redireccionSecundario}
                >
                  {slider.botonTextoSecundario}
                </SecondaryButton>
              }
            </ButtonsWrapper>
            {(slider.subtitulo && widthScreen < breakpoint&& render) && <Description>{parse(slider.subtitulo.html)}</Description>}
      </Column>
    </SliderWrapper>
  );
};

export default SlideContent;