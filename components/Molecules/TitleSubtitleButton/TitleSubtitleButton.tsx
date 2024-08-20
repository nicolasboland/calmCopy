import React from "react";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Button from "@/components/Atoms/Buttons/Button";
import { Iprops } from "./types";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { Container, DivButton } from "./styled";

const TitleSubtitleButton = ({
  title,
  subtitle,
  button,
  margin,
}: Iprops) => {
  return (
    <Container>
        <Titles 
        titleTag={title.titleTag}
        font={title.font || "extraBold"}
        color={title.color}
        fontSize={title.fontSize}
        align={title.align}
        responsiveMobile={title.responsiveMobile}
        width={title.width}
        boldTitle={title.boldTitle}
        lineHeight={title.lineHeight}
        letterSpacing={title.letterSpacing}
        >
         {title.text}
        </Titles>
        {margin && <Margin margin={margin}/>}
        {subtitle && <Text
        textTag={subtitle.textTag}
        font={subtitle.font}
        color={subtitle.color}
        fontSize={subtitle.fontSize}
        textDecoration={subtitle.textDecoration}
        align={subtitle.align}
        width={subtitle.width}
        responsiveMobile={subtitle.responsiveMobile}
        >
            {subtitle.text}
        </Text>}
        <Margin margin="0.5em"/>
        {button && <DivButton>
          <Button 
          href={button.href}
          borderRadius='0.313em'
          children= {button.text}
          backgroundColor={button.backgroundColor}
          size={button.size || 'medium'}
          backgroundColorHover={button.backgroundColorHover}
          textColor={button.textColor}
          textColorHover={button.textColorHover}
          borderColor={button.borderColor}
          fontSize={button.fontSize}
          font={button.font}
          />
        </DivButton>
        }
    </Container>
  );
};

export default TitleSubtitleButton;
