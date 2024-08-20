import { useEffect, useState } from "react";
import { Container } from "./styled"
import { IPropsSize } from "./types"
import Text from "@/components/Atoms/Typography/Text"

const SizeCard = ({
  text,
  setSelected,
  selected,
  childId,
  setIsSizeChange,
  landing,
  hasRenders,
  isCategory
}: IPropsSize) => {

    const regex = /\((.*?)\)/g;
    const [size, setSize] = useState<string[]>()
    
    useEffect(() => {
      if (/\(.*?\)/.test(text)) {
        setSize(text.split(regex));
      }
    }, [text]);

  return (
    <Container 
    onClick={() => {
      setSelected(childId);
      hasRenders && setIsSizeChange(true)
    }} 
    $isSelected={selected ? selected.id === childId : false}
    $landing={landing}
    >
      <Text
        font={isCategory ? "bold" : "medium"}
        align="center"
        responsiveMobile={{
          width:"auto",
          fontSize:"0.85rem"
        }}
      >
          {size ? size[0] : text}
      </Text>

      {
        size && (
          <Text
            font="medium"
            align="center"
            color="millionGray"
            responsiveMobile={{
              width:"auto",
              fontSize:"0.75rem"
              }}
          >
              ({size[1]})
          </Text>
        )
      }
    </Container>
  )
}

export default SizeCard