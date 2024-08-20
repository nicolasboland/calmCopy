import { useEffect, useState } from "react";
import { DivAccordion } from "./styled";
import AccordionUnit from "@/components/Molecules/AccordionUnit/AccordionUnit";
import { IProps } from "./types";

const Accordion = ({
  items,
  isProductSS,
  firstBoxIsActive,
  hasBorder,
  isOrange,
  setSelected,
  isFromCapas,
  indexActive
}: IProps) => {
  const [active, setActive] = useState<string | null>();

  const handleClick = (name: string, index: number) => {
    setActive(name === active ? null : name);
    if (setSelected) setSelected(index)
  };

  useEffect(() => {
    if(items && firstBoxIsActive) {
      setActive(items[0].title)
    }
  }, [firstBoxIsActive])

  useEffect(() => {
    if(items && (indexActive || indexActive == 0)) {
      setActive(items[indexActive].title)
    }
  }, [indexActive])

  return (
    <DivAccordion $isProductSS={isProductSS} $hasBorder={hasBorder}>
      {items && items.map((item, index) => {
        let isActive = active === item.title;
        return (
          <AccordionUnit
            key={item.title}
            onClick={() => handleClick(item.title, index)}
            itemName={item.title}
            itemContent={item.description}
            isActive={isActive}
            isProductSS={isProductSS}
            isLastUnit={index == items.length - 1}
            isOrange= {isOrange}
            isFromCapas={isFromCapas}
          />
        );
      })}
    </DivAccordion>
  );
};

export default Accordion;
