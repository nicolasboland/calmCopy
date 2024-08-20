import Images from "@/components/Atoms/Images/Images";
import {
    Container,
    DivText,
    Wrapper
} from "./styled";
import Text from "@/components/Atoms/Typography/Text";
import TitleSubtitleButton from "../TitleSubtitleButton/TitleSubtitleButton";

  const ChatWithUs = () => {
    function openChat(bool:any) {
        var eventData = {
              open:bool
        };
        var customEvent = new CustomEvent('toggleIframe', { detail: eventData });
        window.dispatchEvent(customEvent);
      }

    return (
        <>
            {process.env.NEXT_PUBLIC_PAULA_CHAT != "true" &&
                <Wrapper>
                    <Images
                     src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/118a5d15-4598-4e9f-4853-e5aed236a100/fit=cover"
                     alt="chat" 
                     width="50px"
                     height="50px"
                     borderRadius="100%"
                    />
                   
                    <Container>
                        <TitleSubtitleButton 
                        title={{
                            text: "¿Tenés alguna pregunta?",
                            titleTag: "h5",
                            font:"bold",
                            color:"lead",
                            fontSize:"1.1em"
                        }}
                        subtitle={{
                            text:(
                                <>
                                Podés escribirle a nuestros especialistas <br/> del descanso por cualquier consulta.
                                </>),
                            font:"light",
                            color:"millionGray",
                            fontSize:"0.9em"
                        }}
                        margin="5px"
                        />
                         <DivText onClick={() => openChat(true)}>
                         <Text 
                         color="wildViolet"
                         textDecoration="underline"
                         fontSize="1em"
                         font="extraBold">Hablá con nosotros</Text>
                         </DivText>
                    </Container>
                </Wrapper>
            }
        </>
    );
  };
  
  export default ChatWithUs;
  