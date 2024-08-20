import Images from "@/components/Atoms/Images/Images";
import {
  Container,
  DivTexto,
  DivImage,
  DivIframe,
  Iframe,
  DivInfo,
  DivButton,
} from "./styled";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Button from "@/components/Atoms/Buttons/Button";
import { IProps } from "./types";
import { useWidth } from "@/hooks/useWidth";

const TitleDescriptionAndMedia = ({
  image,
  text,
  video,
  button,
  imageRight,
  videoLeft,
  maxWidth,
  isCombo,
}: IProps) => {
  const width = useWidth();
  const mobileView = width <= 768;
  return (
    <Container>
      <DivInfo $maxWidth={maxWidth}>
        {mobileView && video && (
          <DivIframe>
            <Iframe
              allow={video.allow}
              title={video.title}
              width="640"
              height="360"
              src={video.src}
              data-gtm-yt-inspected-11="true"
            />{" "}
          </DivIframe>
        )}
        {videoLeft && (
          <DivIframe>
            <Iframe
              allow={videoLeft.allow}
              title={videoLeft.title}
              width="640"
              height="360"
              src={videoLeft.src}
              data-gtm-yt-inspected-11="true"
            />{" "}
          </DivIframe>
        )}
        {mobileView && imageRight && (
          <DivImage>
            <Images src={imageRight.src} alt={imageRight.alt} />
          </DivImage>
        )}
        {image && (
          <DivImage>
            <Images src={image.src} alt={image.alt} />
          </DivImage>
        )}

        <Margin margin="1em" />

        <DivTexto>
          <Titles
            titleTag="h2"
            color={ isCombo ? "yellowCalm" : "offBlack"}
            font="light"
            fontSize="2em"
            lineHeight="1em"
            letterSpacing="-0.4px"
            align="left"
            boldTitle={text.boldTitle}
            responsiveMobile={{
              fontSize: "23px",
            }}
          >
            {text.title}
          </Titles>

          <Margin margin="30px" marginMobile="30px" />

          <Text
            fontSize="1.2em"
            color="offBlack"
            font="regular"
            lineHeight="1.2em"
            align="left"
          >
            {text.text}
          </Text>
          
          {button && (
            <>
              <Margin margin="30px" />
              <DivButton>
                <Button
                  href={button.href}
                  font="extraBold"
                  fontSize="1.2em"
                  textColor="white"
                  backgroundColor="yellowCalm"
                  borderRadius="16px"
                  size="small"
                >
                  {button.text}
                </Button>
              </DivButton>
            </>
          )}
        </DivTexto>
        {!mobileView && video && (
          <DivIframe>
            <Iframe
              allow={video.allow}
              title={video.title}
              width="640px"
              height="360px"
              src={video.src}
              data-gtm-yt-inspected-11="true"
            />{" "}
          </DivIframe>
        )}
        {!mobileView && imageRight && (
          <DivImage>
            <Images src={imageRight.src} alt={imageRight.alt} />
          </DivImage>
        )}
      </DivInfo>
    </Container>
  );
};

export default TitleDescriptionAndMedia;
