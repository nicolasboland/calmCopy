import { Container, Indicator, NumberIndicator, ImagesContainer } from "./styled";
import { IProps } from "./types";
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text";

const CapaImagen = ({
  zIndex,
  image,
  index,
  isSelected,
  setSelected
}: IProps) => {

  return (
    <Container>
      {
        image && (
          <ImagesContainer $zIndex={zIndex} $isSelected={isSelected} >
            <Images src={image} alt={`capa${zIndex}`} isLazy/>
          </ImagesContainer>
        )
      }

      <Indicator $index={index} onClick={() => setSelected(index)}>
        <NumberIndicator $isSelected={isSelected} $index={index}>
          <Text
          color={ isSelected ? "white" : "yellowCalm"}
          >
            {index + 1}
          </Text>
        </NumberIndicator>
      </Indicator>
    </Container>
  );
};

export default CapaImagen;
