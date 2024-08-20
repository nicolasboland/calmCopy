import React from "react";
import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text";
import { Iprops } from "./types";
import { Container } from "./styled";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const ImageAndSubtitle = ({
  image,
  firstText,
  secondText
}: Iprops) => {
  return (
    <Container>
        <Images 
        src={image.src}
        alt={image.alt}
        height='5vh'
        objectFit='contain'
        />
        <Margin margin="3px 0 -10px 0">
          <Text
          font='regular'
          color='millionGray'
          fontSize='12px'
          >
            {firstText}
          </Text>
          <Text
          font='regular'
          color='millionGray'
          fontSize='12px'
          >
            {secondText}
          </Text>
        </Margin>
    </Container>
  );
};

export default ImageAndSubtitle;
