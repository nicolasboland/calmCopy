import {
  DivInformation,
  DivImages,
  DivDivisor,
  DivDivisorImg,
  DivDivisorText,
  DivBar,
  DivBarImgs,
  DivImgHot,
  DivImgCold,
  DivTexts,
  DivCombinationsText,
  DivRight
} from "./styled";
import Images from "@/components/Atoms/Images/Images";
import Titles from "@/components/Atoms/Typography/Titles";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Text from "@/components/Atoms/Typography/Text";


const ProductComparison = () => {
  return (
      <DivInformation>
        <DivImages>
          <DivDivisor>
            <DivRight>
              <DivDivisorImg>
                <Images 
                src="https://calmessimple.com.ar/wp-content/uploads/2022/05/edredón-abrazo.webp"
                alt="edredón abrazo"
                borderRadius="8px"
                />
              </DivDivisorImg>
              <DivDivisorText>
                <Titles
                  titleTag="h4"
                  color="thamarBlack"
                  font="regular"
                  boldTitle="Abrazo"
                  fontSize="0.8em">
                  edredón <br /> 
                </Titles>
              </DivDivisorText>
            </DivRight>
          </DivDivisor>
          <DivDivisor>
            <DivDivisorImg>
              <Images
                src="https://calmessimple.com.ar/wp-content/uploads/2022/05/funda-tusor-4-estaciones.webp"
                alt="Funda de tusor"
                borderRadius="8px"
              />
            </DivDivisorImg>
            <DivDivisorText>
              <Titles
                titleTag="h4"
                color="thamarBlack"
                font="regular"
                fontSize="0.8em"
                boldTitle="4 estaciones"
                >
                funda de tusor <br /> 
              </Titles>
            </DivDivisorText>
          </DivDivisor>
          <DivBar />
          <DivBarImgs>
            <DivImgHot>
              <Images 
               src="https://calmessimple.com.ar/wp-content/uploads/2022/09/sol.png"
               alt="icono de sol"
               width="10%"
              />
            </DivImgHot>
            <DivImgCold>
            <Images 
                src="https://calmessimple.com.ar/wp-content/uploads/2022/09/hhielo.png"
                alt="icono de sol"
                width="10%"
              />
            </DivImgCold>
          </DivBarImgs>
        </DivImages>
        <DivTexts>
            <DivCombinationsText>
          <Titles
            titleTag="h3"
            font="bold"
            fontSize="1.3em"
            color="thamarBlack">
              Combinaciones perfectas.
          </Titles>

          <Margin margin="1rem" />

          <Text
            color="millionGray"
            font="regular"
            fontSize="0.9em">
            La funda es ligera y transpirable para que la uses
            <b> todo el año</b>. El edredón combate el frío y la humedad. Entre
            ambos son la <b>combinación perfecta</b> contra el frío.
          </Text>
          </DivCombinationsText>
        </DivTexts>
      </DivInformation>
  );
};

export default ProductComparison;
