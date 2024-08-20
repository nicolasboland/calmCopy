import React from "react";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Image from "@/components/Atoms/Images/Images";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { Container, TextDiv, ImageDiv, EmptySpace } from "./styled";
import parse from "html-react-parser";
import { Iprops } from "./Types";

const TextAndImageEnvios = ({
  imagePosition,
  title,
  subtitle,
  image,
  altImage,
}: Iprops) => {
  return (
    <Container>
        <>
          <ImageDiv $imagePosition={imagePosition}>
            <Image
              src={image}
              alt={altImage}
            />
          </ImageDiv>

          <TextDiv>
            <Titles
              color={"thamarBlack"}
              font={"light"}
              fontSize={"2em"}
              align={imagePosition}
              titleTag={"h2"}
            >
              {title}
            </Titles>

            <Margin margin={"20px 0"} />

            <Text color={"millionGray"} align={imagePosition}>
              {parse(subtitle)}
            </Text>
          </TextDiv>

          <EmptySpace $imagePosition={imagePosition}></EmptySpace>
        </>
    </Container>
  );
};

export default TextAndImageEnvios;
