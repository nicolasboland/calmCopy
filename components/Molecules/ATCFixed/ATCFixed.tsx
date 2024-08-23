import {
    Container,
    Wrapper,
    WrapperButton
} from "./styled"
import { IProps } from "./types"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import { useEffect, useState } from "react"
import Spinner from "@/components/Atoms/Spinner/Spinner"
import { getOpenSideCart } from "@/state/cart/cartSelector";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@/state/types";
import { getQuizzOpen } from "@/state/products/productsSelector"
import ATCFixesPriceVisor from "../ATCFixesPriceVisor/ATCFixesPriceVisor"
import { isATCNotVisible, isATCVisible, onCloseCart, onShowCart } from "@/state/cart/cartActions"

export const ATCFixed = ({
    imageSrc,
    title,
    size,
    publishedPrice,
    regularPrice,
    nrFees,
    ATC,
    addToCartEnabled,
    showATCButton,
    stateLoading,
    selectedChild,
    idProd,
    quantity
}: IProps) => {
    const dispatch = useDispatch()
    const [ show, setShow] = useState<boolean>(false)
    const sideCartOpened = useSelector((state: IStore) => getOpenSideCart(state))
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const isQuizzOpen = useSelector((state: IStore) => getQuizzOpen(state))
    const [price, setPrice] = useState<number>(0);
    const [ isATCvisible, setIsATCvisible] = useState(false)

    useEffect(() => {
        const ATCButtonVisible = () => {
          const atcButton = document.getElementById('atcButton');
          if (atcButton) {
            const rect = atcButton.getBoundingClientRect();
            const isVisible = (rect.top <= 0) && (rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
            
            if (isVisible) {
              setIsATCvisible(true)
                dispatch(onShowCart())
                dispatch(isATCVisible())
            } else {
              setIsATCvisible(false)
                dispatch(onCloseCart())
                dispatch(isATCNotVisible())
            }
          }
        };
    
        window.addEventListener('scroll', ATCButtonVisible);
        return () => {
          window.removeEventListener('scroll', ATCButtonVisible);
        };
      }, []);

    useEffect(() => {
        if (isATCvisible && showATCButton && !sideCartOpened && !isQuizzOpen) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [isATCvisible, showATCButton, sideCartOpened, isQuizzOpen])

    useEffect(() => {
        if (show) {
          setHasBeenVisible(true);
        }
      }, [show]);

    const percentageDiscount = 20;
    const discountForCoupon = false;

    useEffect(() => {
    if (publishedPrice == regularPrice && discountForCoupon) {
        let resultado = publishedPrice - (publishedPrice * (percentageDiscount / 100));
        let redondeado = Math.round(resultado / 50) * 50;
        setPrice(redondeado);
    } else {
        setPrice(publishedPrice);
    }
    }, [publishedPrice]);


  return (
    <Container $showATCButton={show} $hasBeenVisible={hasBeenVisible}>
        <Wrapper>
            <Images src={imageSrc} alt="productImage" borderRadius="12.583px"/>
        </Wrapper>

        <ATCFixesPriceVisor
        nrFees={nrFees}
        title={title}
        size={size}
        regularPrice={regularPrice}
        price={price}
        quantity={(idProd == '2249180' || idProd == "2249006" || idProd == "1831947" || idProd == "1855350" || idProd == "724708" || idProd == "537") ? quantity : undefined}
        />

        <WrapperButton>
                <Button
                backgroundColor={addToCartEnabled ? "stoneCold" : "parkPicnic"}
                backgroundColorHover={addToCartEnabled ? "edgeOfBlack" : "hawaiianTiLead"}
                width="100%"
                borderRadius="100px"
                font="medium"
                size="none"
                height="65px"
                fontSize="0.9rem"
                textColor="white"
                disabled={addToCartEnabled}
                onClick={ATC}
                >
            {!addToCartEnabled && selectedChild ? (
                stateLoading ?
                <Spinner />
                :
                    "Comprar"
                ) : (idProd === "2111657" || idProd === "1952731") ? "Ingresar CP" : "Agotado"}
                </Button>
            </WrapperButton>
        </Container>
  )
}
