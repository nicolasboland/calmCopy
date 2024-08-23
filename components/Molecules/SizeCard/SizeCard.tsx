import { useEffect, useState } from "react";
import { Container } from "./styled"
import { IPropsSize } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

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
    const [size, setSize] = useState<string | string[]>()
    
    useEffect(() => {
      if (/\(.*?\)/.test(text)) {
        setSize(text.split(regex));
      } else if (text) {
        setSize(text);
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
      {
        size ? (
        <>
        <Text
          font={isCategory ? "bold" : "medium"}
          align="center"
          responsiveMobile={{
            width:"auto",
            fontSize:"0.85rem"
          }}
        >
            {Array.isArray(size) ? size[0] : size}
        </Text>

        {
          Array.isArray(size) &&
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
        }
          </> ) : (
            <SkeletonLoader  width="100%" height="58px"/>
          )
      }
     
    </Container>
  )
}

export default SizeCard