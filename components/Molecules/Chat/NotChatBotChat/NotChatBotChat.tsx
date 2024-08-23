import { useEffect, useState, } from "react";
import { useSelector } from "react-redux"
import { getShowFixedCart, getATCVisible } from "@/state/cart/cartSelector"
import { IStore } from '@/state/types'
import { getOpenSideCart } from "@/state/cart/cartSelector";
import { getMobileMenu } from "@/state/cart/cartSelector"
import { useRouter } from "next/router";
import { getOverlay } from "@/state/products/productsSelector";
import { getOpenCheckoutChat } from "@/state/user/userSelector";

const NotChatBotChat = () => {
  const router = useRouter();
  const showFixedCart = useSelector(getShowFixedCart)
  const ATCVisible = useSelector(getATCVisible)
  const openCheckoutChat = useSelector(getOpenCheckoutChat)
  const [chatLoaded, setChatLoaded] = useState(false)
  const [render, setRender] = useState(false)
  const sideCartOpened = useSelector((state: IStore) => getOpenSideCart(state))
  const isMobileMenuOpen = useSelector(getMobileMenu);
  const [isProduct, setIsProduct] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      setRender(true)
    }, 4000)
  },[]);

  useEffect(() => {
    if (!chatLoaded && render) {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://app.notchatbot.com/iframeBody.js?apikey=78457365-24c0-4fc5-8d83-3324d6aa8ef5&showPopupMobile=false';
    scriptElement.async = true;
    scriptElement.defer = true;
    document.body.appendChild(scriptElement);

    scriptElement.onload = () => {
      setChatLoaded(true)
      
      const chatBot = document.getElementById("chatbot-iframe");
      if (chatBot) {
        chatBot.style.zIndex = '99';
      }
    };

    return () => {
      document.body.removeChild(scriptElement);
    };
  }
  },[render]);

    function sendMessageToIframe(space: string) {
      var eventData = {
          y: `${space}`
      };
      var customEvent = new CustomEvent('addCustomPadding', { detail: eventData });
      window.dispatchEvent(customEvent);
    }

    useEffect(() => {
      if (router.asPath.includes("producto")) {
        setIsProduct (true)
      } else {
        setIsProduct (false)
      }
      
      if(chatLoaded) {
        const chatBot = document.getElementById("chatbot-iframe");
        if (chatBot) {
          if (router.asPath.includes("checkout-pago")) {
            if (!openCheckoutChat) {
              chatBot.style.display = 'none';
            } else {
              chatBot.style.bottom = '0';
              chatBot.style.transition = 'bottom 0.4s ease';
              chatBot.style.display = 'block';
            }
          } else {
            if (sideCartOpened || isMobileMenuOpen) {
              chatBot.style.display = 'none';
            } else if (!showFixedCart && !ATCVisible) {
              chatBot.style.bottom = '0';
              chatBot.style.transition = 'bottom 0.4s ease';
              chatBot.style.display = 'block';
            } else if (isProduct) {
              sendMessageToIframe("130px")
              chatBot.style.display = 'block';
            } else {
              chatBot.style.bottom = '0';
              chatBot.style.transition = 'bottom 0.4s ease';
              chatBot.style.display = 'block';
            }
          }
        }
      }
  },[showFixedCart, chatLoaded, sideCartOpened, openCheckoutChat, router]);

  if (!render) return null

  return (
    <div></div>
  );
};

export default NotChatBotChat;