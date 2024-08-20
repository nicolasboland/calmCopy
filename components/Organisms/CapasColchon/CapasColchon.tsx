import { useState } from "react";
import { Container, Wraper, WraperInfo, WraperImages } from "./styled";
import { IProps } from "./types";
import CapaImagen from "@/components/Molecules/CapaImagen/CapaImagen";
import Titles from "@/components/Atoms/Typography/Titles";
import Accordion from "@/components/Organisms/Accordion/Accordion"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const CapasColchon = ({ capasInfo, title }: IProps) => {
  const [isSelected, setIsSelected] = useState<number>(0);

  return (
    <Container>
      <Margin margin="35px 0 0 0" marginMobile="20px 0">
        <Titles
          font="bold"
          titleTag="h3"
          fontSize="1.7em"
          align="center"
          responsiveMobile={{
            fontSize:"1.4rem"
          }}
          >Dentro del {title}</Titles>
      </Margin>
      <Wraper>
        <WraperImages>
          {capasInfo.map((item, index) => 
            <CapaImagen
              key={index}
              zIndex={capasInfo.length - index}
              index={index}
              image={item.image}
              isSelected={isSelected === index}
              setSelected={setIsSelected}
            />
          )}
        </WraperImages>

        <WraperInfo>
            <Accordion items={capasInfo} setSelected={setIsSelected} firstBoxIsActive isFromCapas indexActive={isSelected}/>
        </WraperInfo>
      </Wraper>
    </Container>
  );
};

export default CapasColchon;