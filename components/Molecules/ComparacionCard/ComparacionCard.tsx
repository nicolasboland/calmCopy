import { Container, ContainerText, InfoHeight } from "./styled";
import Text from "@/components/Atoms/Typography/Text";
import Images from "@/components/Atoms/Images/Images";
import Titles from "@/components/Atoms/Typography/Titles";
import Bar from "@/components/Atoms/Bar/Bar"
import { Nucleo,
    DosCapas,
    Garantia,
    TresCapas,
    Star,
    Viento,
    Caja,
    Herramienta,
    Maletin,
    Insignia,
    Lavarropa,
    Cloud,
    noSlipBase,
    FullBar,
    HalfBar,
    Adjustable,
    EmptyBar,
    Acaro
 } from "@/utils/Icons"
import Icons from "@/components/Atoms/Icons/Icons";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { IComparitionCard, IconFunctions } from "./types"
import Button from "@/components/Atoms/Buttons/Button";
import { productURLRedirectionById } from "@/utils/productURLById";
import { useWidth } from "@/hooks/useWidth";

const iconFunctions: IconFunctions = {
    Nucleo,
    DosCapas,
    Garantia,
    TresCapas,
    Star,
    Viento,
    Caja,
    Herramienta,
    Maletin,
    Insignia,
    Lavarropa, 
    Cloud,
    noSlipBase,
    FullBar,
    HalfBar,
    Adjustable,
    EmptyBar,
    Acaro
};

const ComparacionCard = ({
    title,
    img,
    id,
    firmeza,
    Respirabilidad,
    textButton,
    isSelected,
    specs,
    isFourItems,
    description
}: IComparitionCard) => {
    const width = useWidth();
    const breakpoint = 768

    return (
      <Container $isFourItems={isFourItems}>
        {!(width < breakpoint) && (
          <>
            <Margin
              margin={!isSelected ? "0 0 15px 0" : ""}
              marginMobile={!isSelected ? "0 0 11px 0" : ""}
            >
              <Titles font="bold" titleTag="h5" fontSize="1rem">
                {title}
              </Titles>
            </Margin>
            {isSelected && (
              <Text
                font="medium"
                textTag="span"
                fontSize="0.7rem"
                color="millionGray"
                responsiveMobile={{
                  fontSize: "0.6rem",
                }}
              >
                {" "}
                Estas viendo este producto
              </Text>
            )}
          </>
        )}

        <Margin margin="10px 0">
          <Images
            borderRadius="8px"
            src={img}
            alt="producto"
            isLazy
            responsiveMobile={{
              height: "auto",
            }}
          />
        </Margin>

        {firmeza && Respirabilidad && (
          <>
            <Bar cantidad={firmeza} title="Firmeza"></Bar>
            <Bar cantidad={Respirabilidad} title="Respirabilidad"></Bar>
          </>
        )}

        {
          description && 
          <Margin margin="1rem 0">
          <Text
            font="medium"
            fontSize="0.9rem"
            responsiveMobile={{
              fontSize: "0.9rem",
            }}
          >
            {description}
          </Text>
          </Margin>
        }

        <InfoHeight $isFourItems={isFourItems}>
          {specs.map((spec, index) => {
            const IconComponent = iconFunctions[spec.icon];
            return (
              <ContainerText key={index}>
                <Margin
                  margin="5px 20px 5px 3px"
                  marginMobile="10px 10px 10px 0"
                >
                  <Icons>
                    <IconComponent />
                  </Icons>
                </Margin>
                <Text
                  font="medium"
                  width={75}
                  responsiveMobile={{
                    fontSize: "0.9rem",
                  }}
                >
                  {spec.text}
                </Text>
              </ContainerText>
            );
          })}
        </InfoHeight>

          {
            textButton && 
                <Button
                href={productURLRedirectionById(id)}
                size="none"
                height="50px"
                borderRadius="598.211px"
                borderColor="black"
                backgroundColorHover="black"
                textColorHover="white"
            >
                <Text
                font="medium"
                fontSize=".75rem"
                textDecoration="none"
                responsiveMobile={{
                    fontSize: ".9rem",
                }}
                >
                {textButton}
                </Text>
            </Button>
          }
      </Container>
    );
}

export default ComparacionCard