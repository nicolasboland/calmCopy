import ImageAndSubtitle from "@/components/Molecules/ImageAndSubtitle/ImageAndSubtitle";
import {
    DivExperience,
    DivLimit,
    DivInformation,
  } from "./styled";
  import { useWidth } from "@/hooks/useWidth";
  import { deviceSizes } from "@/utils/Theme";
import Titles from "@/components/Atoms/Typography/Titles";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
  
  const ShoppingExperience = () => {
    return (
      <DivExperience>
        <DivLimit>
        <Margin 
          margin="0.5rem"/>
          <Titles
          titleTag="h2"
          color="millionGray"
          font="light"
          fontSize="1.8em"
          align="center"
          responsiveMobile={{
            fontSize: "1.2em"
          }}
          boldTitle="experiencia de compra."
          >
            creamos una nueva 
          </Titles>
          <Margin 
          margin="2rem"/>
          {useWidth() > deviceSizes.mobile ? (
            <DivInformation>
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/1cad7c50-4701-4304-c72b-32b5ac7e8000/fit=cover",
                alt:"Icono de Facebook"}
              }
              firstText= "Caso de éxito"
              secondText= "Facebook 2020"
              />
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/57b241fa-53b1-4e1c-ecc0-757ceb8d2300/fit=cover",
                alt:"puntuacion colchon calm"}
              }
              firstText= "El colchón mejor"
              secondText= "puntuado"
              />
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/364a8712-63a0-4f71-5dd4-1c7ef1289a00/fit=cover",
                alt:"la nacion"}
              }
              firstText= "Una marca innovadora"
              secondText= "para el mercado argentino"
              />
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/6fd620d0-a351-4c30-472d-f782e3b87700/fit=cover",
                alt:"Sello"}
              }
              firstText= "Sello Buen Diseño Argentino"
              secondText= ""
              />
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ee119511-098e-49a1-2b4e-866a38b0e900/fit=cover",
                alt:"Icono de Google"}
              }
              firstText= "Selección programa de"
              secondText= "crecimiento acelerado"
              />
            </DivInformation>
          ) : (
            <DivInformation>
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/57b241fa-53b1-4e1c-ecc0-757ceb8d2300/fit=cover",
                alt:"puntuacion colchon calm"}
              }
              firstText= "El colchón mejor"
              secondText= "puntuado"
              />
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/364a8712-63a0-4f71-5dd4-1c7ef1289a00/fit=cover",
                alt:"la nacion"}
              }
              firstText= "Una marca innovadora para"
              secondText= "el mercado argentino"
              />
              <ImageAndSubtitle 
              image={{
                src:"https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/6fd620d0-a351-4c30-472d-f782e3b87700/fit=cover",
                alt:"Sello"}
              }
              firstText= "Sello Buen"
              secondText= "Diseño Argentino"
              />
            </DivInformation>
          )}
        </DivLimit>
      </DivExperience>
    );
  };
  
  export default ShoppingExperience;
  