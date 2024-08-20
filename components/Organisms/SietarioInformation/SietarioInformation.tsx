import {
  DivKeys,
  KeysContent,
  KeyCell,
  InformationSection,
  FullWrapper
} from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Images from "@/components/Atoms/Images/Images";

function SietarioInformation () {
  return (
    <FullWrapper>
      <InformationSection>
        <DivKeys>
          <KeysContent $imageToLeft={true}>
            <KeyCell $isToLeft={true}>
              <Titles
              titleTag="h3"
              font="extraBold"
              align="left"
              color="offBlack"
              responsiveMobile={{
                align:"center",
                lineHeight:"1",
              }}
              >
                Te damos todo lo necesario.
              </Titles>

              <Margin margin="1rem"/>

              <Text
              titleTag="h3"
              font="regular"
              color="offBlack"
              align="left"
              fontSize="1.1rem"
              lineHeight="1.15rem"
              width={93}
              responsiveMobile={{
                align:"center",
                width:"100%"
              }}
              >
                Vas a tener a tu disposición todo lo necesario tanto para dormir
                como para despertar. Desde el pijama hasta el café/té para
                levantarte.
              </Text>
            </KeyCell>
            <KeyCell>
              <Images
              src="https://calmessimple.com.ar/wp-content/uploads/2023/08/Mask-group-1.webp"
              alt="Siestario"
              borderRadius="50%"
              width="23rem"
              height="23rem"
              responsiveMobile={{
                width:"17rem",
                height:"17rem"
              }}
              />
            </KeyCell>
          </KeysContent>

          <KeysContent $imageToLeft={false}>
            <KeyCell $isToLeft={false}>
              <Titles
              titleTag="h3"
              font="extraBold"
              align="right"
              color="offBlack"
              responsiveMobile={{
                align:"center",
                lineHeight:"1",
              }}
              >
                Elegí tus productos Calm.
              </Titles>

              <Margin margin="1rem"/>

              <Text
              font="regular"
              color="offBlack"
              align="right"
              fontSize="1.1rem"
              lineHeight="1.15rem"
              width={93}
              responsiveMobile={{
                align:"center",
                width:"100%"
              }}
              >
                Podés elegir entre cualquiera de nuestras almohadas. Recordá que
                el colchón varía semana a semana entre Original e Híbrido.
              </Text>
            </KeyCell>
            <KeyCell>
              <Images
              src="https://calmessimple.com.ar/wp-content/uploads/2023/08/Mask-group.webp"
              alt="Siestario"
              borderRadius="50%"
              width="23rem"
              height="23rem"
              responsiveMobile={{
                width:"17rem",
                height:"17rem"
              }}
              />
            </KeyCell>
          </KeysContent>

          <KeysContent $imageToLeft={true}>
            <KeyCell $isToLeft={true}>
              <Titles
              font="extraBold"
              align="left"
              titleTag="h4"
              color="offBlack"
              responsiveMobile={{
                align:"center",
                lineHeight:"1",
              }}
              >
                Personalizá tu habitación.
              </Titles>

              <Margin margin="1rem"/>
              
              <Text
              font="regular"
              color="offBlack"
              align="left"
              fontSize="1.1rem"
              lineHeight="1.15rem"
              width={93}
              responsiveMobile={{
                align:"center",
                width:"100%"
              }}
              >
                Vas a poder personalizar el sonido, la iluminación y temperatura
                de la habitación en todo momento para que puedas alcanzar tu
                descanso soñado.
              </Text>
            </KeyCell>
            <KeyCell>
              <Images
              src="https://calmessimple.com.ar/wp-content/uploads/2023/08/Mask-group-6.webp"
              alt="Siestario"
              borderRadius="50%"
              width="23rem"
              height="23rem"
              responsiveMobile={{
                width:"17rem",
                height:"17rem"
              }}
              />
            </KeyCell>
          </KeysContent>
        </DivKeys>
      </InformationSection>
    </FullWrapper>
  );
}

export default SietarioInformation;
