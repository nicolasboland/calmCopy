import React from "react"
import Titles from "@/components/Atoms/Typography/Titles"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { Container, DivTitleShadow, SubtitleDiv } from "./styled"
import { HeaderSectionProps } from "./types"

const HeaderBackColor = ({
  backgroundImage,
  backgroundColor,
  title,
  subtitle,
  height,
  titleColor,
  titleFont,
  titleFontSize,
  subtitleColor,
  subtitleFont,
  subtitleFontSize,
  subtitleBold,
  hasTitleShadow,
  lessMargin,
  titleLineHeight, 
  paddingTop,
  subtitleLineHeight,
  heightMobile,
  fontSizeMobile
}: HeaderSectionProps) => {
  return (
    <>
      <Container
        $backgroundImage={backgroundImage}
        $backgroundColor={backgroundColor}
        $height={height}
        $paddingTop={paddingTop}
        $lessMargin={lessMargin}
        $heightMobile={heightMobile}
      >
        {hasTitleShadow ? (
          <DivTitleShadow>
            <Titles
              titleTag="h1"
              font="extraBold"
              fontSize="4rem"
              color="transparentCalm"
              align="center"
              letterSpacing="0.5px"
            >
              {title}
            </Titles>
          </DivTitleShadow>
        ) : (
          <Titles
            titleTag={"h1"}
            color={titleColor || "decorYellow"}
            font={titleFont || "regular"}
            fontSize={titleFontSize || "2em"}
            align={"center"}
            lineHeight={titleLineHeight}
            responsiveMobile={{
              fontSize: lessMargin ? "90px" : "2em"
            }}
          >
            {title}
          </Titles>
        )}
        {lessMargin &&
        <Margin margin="-10px" />
        }
        {!lessMargin &&
        <Margin margin={hasTitleShadow ? "0 0 10px 0" : "20px"} />
        }
        <SubtitleDiv>
          <Text
            textTag={"p"}
            color={subtitleColor || "black"}
            font={subtitleFont || "extraBold"}
            fontSize={subtitleFontSize || "20px"}
            align="center"
            lineHeight={subtitleLineHeight}
            responsiveMobile={{
              fontSize: lessMargin ? "1.5em" : fontSizeMobile ? fontSizeMobile :"0.9rem"
            }}
          >
            {subtitle}
            {subtitleBold && (
              <>
                <br />
                <Text
                  textTag="span"
                  font={hasTitleShadow ? "medium" : "extraBold"}
                >
                  {subtitleBold}
                </Text>
              </>
            )}
          </Text>
        </SubtitleDiv>
      </Container>
      <Margin margin="2rem" />
    </>
  )
}

export default HeaderBackColor
