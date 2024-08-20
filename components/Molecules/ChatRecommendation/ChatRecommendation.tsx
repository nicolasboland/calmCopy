import Images from "@/components/Atoms/Images/Images";
import Text from "@/components/Atoms/Typography/Text";
import { Button, Container, Wrapper } from "./styled";
import { ChatRecommendationProps } from "./types";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";

const ChatRecommendation: React.FC<ChatRecommendationProps> = ({ isForMobile }) => {
  function openChat(bool:any) {
    var eventData = {
          open:bool
    };
    var customEvent = new CustomEvent('toggleIframe', { detail: eventData });
    window.dispatchEvent(customEvent);
  }

  return (
    <Wrapper $isForMobile={isForMobile}>
      <Images
        src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/5263fe10-6cd3-4624-7bb4-c05d3b041d00/public"
        alt="chatea con nosotros"
        width="50px"
        height="50px"
        isLazy
      />
      <Container>
        <Text font="bold" color="lead" fontSize="1.1em">
          ¿Tenés alguna pregunta?
        </Text>
        <Margin margin="10px 0 0 0" />
        <Text font="medium" color="millionGray" fontSize="0.9em ">
          Podés escribirle a nuestros especialistas del descanso por
          cualquier consulta.
        </Text>
        <Margin margin="15px 0 0 0" />
        <Button onClick={openChat}>
          <Text
            color="wildViolet"
            font="extraBold"
            fontSize="1em"
            textDecoration="underline"
          >
            Hablá con nosotros{" "}
          </Text>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ChatRecommendation;
