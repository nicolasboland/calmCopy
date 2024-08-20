import {IProps} from "./types"
import { useEffect, useState } from "react";
import AccordionUnit from "../../Molecules/AccordionUnit/AccordionUnit";
import Titles from '@/components/Atoms/Typography/Titles'
import {
  DivContainer,
  DivAccordion,
  DivAccordionUnit
} from "./styled";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";

const FrequentQuestions = ({
  title, 
  boldTitle,
  items,
  isProductSS,
  firstBoxIsActive,
  isOrange,
  color,
  noBackgroundColor
  } : IProps) => {

  const [active, setActive] = useState<string | null>();

  const handleClick : Function = (name: string) => {
    setActive(name === active ? null : name);
  };

  useEffect(() => {
    if(items && firstBoxIsActive) {
      setActive(items[0].title)
    }
  }, [firstBoxIsActive])

  const width = useWidth()

  return (
    <DivContainer $noBackgroundColor={noBackgroundColor}>
      <Margin margin="2rem 0">
      <Titles 
      titleTag="h3"
      color={color ? color : "offBlack"}
      font="regular"
      fontSize={width <= deviceSizes.mobile ? "25px" : "2em"}
      boldTitle={boldTitle}
      >{title}</Titles>
      </Margin>
      <DivAccordion>
      <DivAccordionUnit $isProductSS={isProductSS} $noBackgroundColor={noBackgroundColor}>
      {items && items.map((item, index) => {
        let isActive = active === item.title;
        return (
          <AccordionUnit
            key={item.title}
            onClick={() => handleClick(item.title)}
            itemName={item.title}
            itemContent={item.description}
            isActive={isActive}
            isProductSS={isProductSS}
            isLastUnit={index == items.length - 1}
            isOrange= {isOrange}
          />
        );
      })}
      </DivAccordionUnit>
      </DivAccordion>
      <Margin margin="2rem 0" />
    </DivContainer>
  );
};

export default FrequentQuestions;
