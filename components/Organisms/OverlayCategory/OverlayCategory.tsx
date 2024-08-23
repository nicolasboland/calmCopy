import { useEffect, useState } from "react";
import { 
    Overlay,
    CardsContainer, 
    Card,
    TextAndImage,
    ButtonContainer
} from "./styled";
import { IProps } from "./types"
import Button from "@/components/Atoms/Buttons/Button";
import ATCFixesPriceVisor from "@/components/Molecules/ATCFixesPriceVisor/ATCFixesPriceVisor";
import variations_sizes from "@/utils/variations_sizes";
import Images from "@/components/Atoms/Images/Images";
import Pills from "@/components/Atoms/Pills/Pills";
import { useDispatch, useSelector } from "react-redux";
import { onGetCloseOverlay, onGetOpenOverlay } from "@/state/products/productsActions";
import { productURLRedirectionById } from "@/utils/productURLById";
import { getIsNavbarVisible, getQuizzOpen } from "@/state/products/productsSelector";
import { IStore } from "@/state/types";
import { getMobileMenu, getOpenSideCart } from "@/state/cart/cartSelector";

const OverlayCategory = ({items}: IProps) => {
    const dispatch = useDispatch()
    const isNavbarVisible = useSelector(getIsNavbarVisible)
    const [ show, setShow] = useState<boolean>(false)
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const isMobileMenuOpen = useSelector(getMobileMenu);
    const sideCartOpened = useSelector((state: IStore) => getOpenSideCart(state))
    const isQuizzOpen = useSelector((state: IStore) => getQuizzOpen(state))
    
    useEffect(() => {
        const overlayVisible = () => {
          const categoryComparition = document.getElementById('comparition');
          if (categoryComparition) {
            const rect = categoryComparition.getBoundingClientRect();
           const isVisible = rect.top <= 200 && rect.bottom >= 200
           
            if (isVisible) {
              setShow(true)
              dispatch(onGetOpenOverlay())
            } else {
              setShow(false)
              dispatch(onGetCloseOverlay())
            }
          }
        };
    
        window.addEventListener('scroll', overlayVisible);
        return () => {
          window.removeEventListener('scroll', overlayVisible);
        };
      }, []);

      useEffect(() => {
        if (!sideCartOpened && !isQuizzOpen && !isMobileMenuOpen && show) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [sideCartOpened, isQuizzOpen, isMobileMenuOpen, show])

      useEffect(() => {
        if (show) {
          setHasBeenVisible(true);
        }
      }, [show]);

    return (
            <Overlay $showOverlay={show} $hasBeenVisible={hasBeenVisible} $isNavbarVisible={isNavbarVisible}>
                <CardsContainer>
                    {
                        items && items.map((item) => 
                            <Card key={item.name}>
                              <TextAndImage>
                                {
                                  /* width > breakpoint */false &&
                                  <>
                                    <Pills isOfferProduct categoryPill={item.category} isCategoryComparition />
                                    <Images src={item.image} alt="productImage" borderRadius="12.583px" width="150px"/>
                                  </>
                                }

                                <ATCFixesPriceVisor
                                    nrFees={12}
                                    title={item.name}
                                    size={
                                      variations_sizes[item.attributes.pa_tamano as keyof typeof variations_sizes]
                                    }
                                    regularPrice={item.regular_price}
                                    price={item.price}
                                    isCategory
                                />
                              </TextAndImage>

                              <ButtonContainer>
                                <Button
                                  backgroundColor="lead"
                                  backgroundColorHover="offBlack"
                                  height="50px"
                                  width="100%"
                                  borderColor="lead"
                                  textColor="white"
                                  borderRadius="1000px"
                                  sizeMobile="small"
                                  href={productURLRedirectionById(item.id_parent)}
                                  responsiveMobile={{
                                    height:"45px"
                                  }}
                                >
                                  Comprar
                                </Button>
                              </ButtonContainer>
                            </Card>
                        )
                    }
                </CardsContainer>
            </Overlay>
    )
}

export default OverlayCategory;