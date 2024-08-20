import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import { ContactContainer, ChatHandler, Info } from "./styled";
import { IProps } from "./types";
import { useDispatch } from "react-redux";
import { onGetOpenChekoutChatSucceeded } from "@/state/user/userActions";

const FooterContact = ({ items, title }: IProps) => {
  const dispatch = useDispatch()

  const chatHandler = () => {
    dispatch(onGetOpenChekoutChatSucceeded())
    var eventData = {
      open:true
    };
    var customEvent = new CustomEvent('togleIframe', { detail: eventData });
    window.dispatchEvent(customEvent);
  }

  return (
    <ContactContainer>
      <Titles titleTag="h3" color="offBlack" font="bold" fontSize="1.75rem">
        {title}
      </Titles>

    {/*   <ChatHandler onClick={chatHandler}>
        <Text
        color="wildViolet"
        font="bold"
        fontSize="1.3rem"
        textDecoration="underline"
        >
          Chateá con Soporte
        </Text>
      </ChatHandler> */}

      {items.map(({ links }, index) => {
        return (
          <div key={index}>
            {links.map(
              (
                { text, href }: { text: string; href: string },
                index: number
              ) => {
                return (
                  <Info key={index}>
                    <Text
                      textTag="a"
                      link={href}
                      fontSize="1rem"
                      font="medium"
                      textDecoration="none"
                      color="offBlack"
                    >
                      {text}
                    </Text>
                  </Info>
                );
              }
            )}
          </div>
        );
      })}
    </ContactContainer>
  );
};

export default FooterContact;
