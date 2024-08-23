import ProductTitleMainBlock from "@/components/Molecules/ProductTitleMainBlock/ProductTitleMainBlock"
import { IProps } from "./types"
import { SetStateAction, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  LandingContent,
  Wrapper,
  Breadcrumbs,
  LeftColumn,
  GalleryWrapper,
  RightColumn,
  SpanColumns,
  DivTitlePills,
  ImagePromo,
  ButtonInfo,
  ContainerPaymentMethod,
  MiniBannerMobile
} from "./styled"
import { onAddItemToCart, onUpdateItemFromCart } from "@/state/cart/cartActions"
import NuggetReview from "@/components/Molecules/Reviews/NuggetReviews/NuggetReview"
import { getCartData, getHasEDE, getShowFixedCart } from "@/state/cart/cartSelector"
import getIDBySKU from "@/utils/idBySKU"
import FormStockOut from "@/components/Molecules/FormStockOut/FormStockOut"
import tags from "../../../jsons/tags_mailchimp.json"
import { topPage } from "@/utils/topPage"
import Text from "@/components/Atoms/Typography/Text"
import Carrousel from "@/components/Molecules/Carousel/Carousel"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import PricesVisor from "@/components/Molecules/PricesVisor/PricesVisor"
import Pills from "@/components/Atoms/Pills/Pills"
import {
  ModalPayment,
  ModalPaymentIcons
} from "../Modals/ModalPaymentMethods/ModalPaymentMethods"
import Modal from "../Modals/Modal"
import InformationShipping from "../../Molecules/InformationShipping/InformationShipping"
import Spinner from "@/components/Atoms/Spinner/Spinner"
import Button from "@/components/Atoms/Buttons/Button"
import { Purchase } from "@/utils/Icons"
import { formatNumberPixelFb } from "@/utils/formatPrices"
import * as fbq from "@/lib/fpixel";
import { formatNumber } from "@/utils/formatPrices"
import PaymentCards from "@/components/Molecules/PaymentCards/PaymentCards";
import { ATCFixed } from "@/components/Molecules/ATCFixed/ATCFixed";
import variations_sizes from "@/utils/variations_sizes"
import { BannerAndCucarda } from "@/components/Molecules/BannerAndCucarda/BannerAndCucarda"
import EDEProduct from "@/components/Molecules/EDEProduct/EDEProduct"
import { ModalPostal } from "../Modals/ModalPostal/ModalPostal"
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"
import { getLoadingRedirect } from "@/state/loading/loadingSelector"
import { IStore } from '@/state/types';
import { isThursday } from "@/utils/GaliciaPromo"
import { MainBlockPreviewLoaders , MainBlockLoaders } from "./Loaders"
/* import { DevicePickerRenders } from "../DevicePickerRenders/DevicePickerRenders" */
import ProductProps from "@/components/Organisms/ProductProps/ProductProps"
import { childrenVariationWithoutStock, atrrToRender } from "@/utils/productsFunctios"

interface Data {
  [key: string]: string
}

const tagsData: Data = tags

const MainBlock = ({
  title,
  dreamDelivery,
  priceEDE,
  description,
  category,
  children,
  discount,
  renders,
  installments,
  galleryImages,
  skus,
  tranferDiscount,
  stateLoading,
  defaultProds,
  isCombo,
  idProd,
  pillIdSpecialOffer,
  stockAndPrices,
  atcImage,
  feriaATCEnabled,
  headPills,
  SecondheadPills
}: IProps) => {
  const dispatch = useDispatch()
  const cartData = useSelector(getCartData)
  const hasEDE = useSelector(getHasEDE)
  const showATCButton = useSelector(getShowFixedCart)
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))
  const [galleryLoaded, setGalleryLoaded] = useState(false)

  let propsNames = atrrToRender(children)

  const [addToCartEnabled, setAddToCartEnabled] = useState(false)

  const [selectedChild, setSelectedChild] = useState(
    children ? children[0] : undefined
  )
  const [checkboxEnsueno, setCheckboxEnsueno] = useState<boolean>(false)
  const [modalPostal, setModalPostal] = useState(false)
  const [isRenderSelected, setIsRenderSelected] = useState(false)
  const [isSizechange, setIsSizeChange] = useState(false)
  const [isColorchange,  setIsColorChange] = useState(false)
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState<number>(selectedChild ? selectedChild.regular_price : 0);
  const [adjustedRegularPrice, setAdjustedRegularPrice] = useState<number>(selectedChild ? selectedChild.regular_price : 0 );

  useEffect(() => {
    if(selectedChild) {
      if(quantity === 2) {
        if(idProd == '2249180' || idProd == "2249006"){
            setAdjustedRegularPrice(selectedChild.price * 2);
            setPrice((selectedChild.price*2)*0.90)
          } else {
            setAdjustedRegularPrice(selectedChild.regular_price * 2);
            setPrice((selectedChild.price*2))
          }
        
      } else if((quantity === 1)) {
        setPrice(selectedChild.price)
        setAdjustedRegularPrice(selectedChild.regular_price);
      }
    }
  }, [quantity, adjustedRegularPrice, price, selectedChild])

  const displayFormStockout = () => {
    return childrenVariationWithoutStock(selectedChild) /* || allChildrenWithoutStock() */
  }

  useEffect(() => {
    if (selectedChild) {
      setAddToCartEnabled(selectedChild.stock > 0 || selectedChild.backorder)
    }
  }, [selectedChild])

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const AddToCart = async (hasEDE: boolean = false) => {
    if (selectedChild) {
      if (parseInt(selectedChild.id) !== -1 && addToCartEnabled) {
        if (isCombo) {
          const skus = selectedChild.sku.split(";")
          await Promise.all(
            skus.map(async (sku) => {
              const id = getIDBySKU(sku)
              const itemInCart = cartData?.items.find(
                (item) => item.id.toString() === id
              )
              if (itemInCart) {
                const key = itemInCart.key
                const qty = itemInCart.quantity + quantity
                await dispatch(onUpdateItemFromCart(key, qty, itemInCart.name))
              } else {
                await dispatch(onAddItemToCart(parseInt(id), quantity, hasEDE))
              }
            })
          )
        } else {
          const { id } = selectedChild
          const itemInCart = cartData?.items.find(
            (item) => item.id.toString() === id
          )
          if (itemInCart) {
            const key = itemInCart.key
            const qty = itemInCart.quantity + quantity
            await dispatch(onUpdateItemFromCart(key, qty, itemInCart.name))
          } else {
            await dispatch(onAddItemToCart(parseInt(id), quantity, hasEDE))
          }
        }
      }

    fbq.event( 'AddToCart', { 
      content_type: "product",
      content_ids: [`${selectedChild.sku}_${selectedChild.id}`],
      content_name: selectedChild.name,
      contents: [{"id":`${selectedChild.sku}_${selectedChild.id}`, "quantity":1}],
      value: selectedChild.price,
      currency: "ARS"
    })
    }
    topPage()
  }

  useEffect(() => {
      if (!stateLoading && modalPostal) {
          setModalPostal(false)
      }
  }, [stateLoading])

  const modalHandle = () => {
    setModalPostal((prevState) => !prevState)
  }

  const checkEDE = () => {
    if((idProd === "2111657" || idProd === "1952731") && !feriaATCEnabled) {
      const element = document.getElementById('cpFeria');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: "end" });
      }
    } else {
      const hasEDE = cartData?.items.some((item) => item.id == 2024353);
      if (dreamDelivery && checkboxEnsueno && !hasEDE) {
        modalHandle()
      } else if (!dreamDelivery || (dreamDelivery && !checkboxEnsueno) || hasEDE) {
        AddToCart()
      }
    }
  }

  useEffect(() => {
    if (selectedChild) {
      setTimeout(() => {
        fbq.event( 'ViewContent', { 
          content_type: 'product',
          content_ids: [`${selectedChild.sku}_${selectedChild.id}`],
          value: formatNumberPixelFb(selectedChild.price),
          currency: 'ARS'
        })
      }, 2000)
    }
  }, [selectedChild])

  return (
    <LandingContent>
        <Wrapper>
          <Breadcrumbs>
            <Text
              textTag="a"
              link={productURLRedirectionByEnv(`/${category
                .split(" ")
                .join("-")}`)}
              color="millionGray"
              font="extraBold"
            >
              {category}
            </Text>
            <Text textTag="span" color="millionGray">
              / {title}
            </Text>
          </Breadcrumbs>
        <SpanColumns>
          <LeftColumn>

            <GalleryWrapper>

              {galleryImages && (
                <>
                  {/* {
                    process.env.NEXT_PUBLIC_RENDERS === "true" && (
                      <DevicePickerRenders
                      isRenderSelected={isRenderSelected}
                      setIsRenderSelected={setIsRenderSelected}
                      altoState={altoState}
                      idProd={idProd}
                      />
                    )
                  } */}

                  <Carrousel
                    galleryCarrousel={{
                      images: galleryImages,
                      category: category,
                    }}
                    isSizechange={isSizechange}
                    isRenderSelected= {isRenderSelected}
                    color={selectedChild?.attributes[
                      propsNames.color as keyof typeof selectedChild.attributes
                    ]} 
                    isColorchange={isColorchange}
                    setIsSizeChange={setIsSizeChange}
                    hasRenders={ renders ? true : false}
                    renders={renders}
                    fatherLoader={setGalleryLoaded}
                    selectedChild={selectedChild}
                  />
                </>
              )}
            </GalleryWrapper>

            <ImagePromo>
              <BannerAndCucarda isBanner category={category}
                srcBanner={
                  idProd === "2196410" 
                  ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/bb906305-1d05-4d46-2bf8-11e65a031e00/fit=cover" 
                  : idProd === "2249180" 
                  ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/4a8c246c-a309-4fff-017c-d0436ae8e000/fit=coverc" 
                  : idProd === "2249006" 
                  ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/11fbbd15-1f33-460d-ac0f-e9780102f100/fit=cover" 
                  : isThursday()
                  ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ae07339d-b0c4-484f-f6d2-91a53a2c7900/fit=cover"
                  : undefined
                }
              />
            </ImagePromo>
          </LeftColumn>

          {
            (loadingRedirect) ?(
              <MainBlockLoaders />
             ) : (
          
          <RightColumn >
            {
              headPills &&
              <DivTitlePills>
                  <Pills
                    isCategoriesSection
                    color="parkPicnic"
                    backgroundColor="wildCaribbeanGreen"
                  >
                    {headPills}
                  </Pills>
                
                <Margin margin="0 3px" />
                {
                  SecondheadPills &&
                  <Pills
                    isCategoriesSection
                    color="yellowCalm"
                    backgroundColor="antiqueIvory"
                  >
                    {SecondheadPills}
                  </Pills>
                }
              </DivTitlePills>
            }

            <ProductTitleMainBlock
              title={title}
              description={description}
              isCombo={isCombo}
            />

            {skus && <NuggetReview skus={skus} />}

            {selectedChild && discount && installments && (
                <PricesVisor
                  publishedPrice={price ?? 0}
                  regularPrice={adjustedRegularPrice ?? 0}
                  nrFees={category != "feria" ? installments : 1}
                  isFeria={category == "feria"}
                  category={category}
                  tranferDiscount={tranferDiscount}
                  pillIdSpecialOffer={pillIdSpecialOffer}
                />
            )}

            <ProductProps
                children={children}
                setSelectedChild={setSelectedChild}
                stockAndPrices={stockAndPrices}
                selectedChild={selectedChild}
                hasRenders={renders ? true : false}
                setIsSizeChange={setIsSizeChange}
                category={category}
                defaultProds={defaultProds}
                setIsColorChange={setIsColorChange}
                idProd={idProd}
                onQuantityChange={handleQuantityChange}
            />

            {idProd != "1952731" ? (
              <Margin margin="10px 0 0 0" marginMobile="0">
                <InformationShipping product={selectedChild}/>
              </Margin>
            ) : (
              <Margin margin="1rem 0">
                <Text color="millionGray" font="medium" fontSize="0.9em">
                  Hasta agotar stock
                </Text>
                <Text color="millionGray" font="medium" fontSize="0.9em">
                  Entrega a partir de 5 días hábiles
                </Text>
              </Margin>
            )}

            {selectedChild && (
              <>
                {displayFormStockout() && idProd && (
                  <FormStockOut tag={tagsData[idProd]} />
                )}
              </>
            )}

            {
              dreamDelivery && priceEDE &&
              <>
                <EDEProduct 
                  onClick={() => setCheckboxEnsueno((prevState) => !prevState)}
                  priceEDE={priceEDE}
                />

                <ModalPostal
                  addToCart={AddToCart}
                  stateLoading={stateLoading}
                  setShowPostal={setModalPostal}
                  showPostal={modalPostal}
                />
              </>
            }
          
            <div id="atcButton"> 
                <Button
                  backgroundColor={(idProd === "2111657" || idProd === "1952731")
                  ? (feriaATCEnabled && addToCartEnabled) ? "lead" : "stoneCold"
                  : addToCartEnabled ? "lead" : "stoneCold"}
                  backgroundColorHover={category === "feria"
                  ? (feriaATCEnabled && addToCartEnabled) ? "offBlack" : "edgeOfBlack"
                  : addToCartEnabled ? "offBlack" : "edgeOfBlack"}
                  width="100%"
                  borderRadius="641.649px"
                  font="bold"
                  size="big"
                  height="60px"
                  fontSize="1rem"
                  textColor="white"
                  disabled={!addToCartEnabled}
                  onClick={checkEDE}
                >
                  { ((idProd === "2111657" || idProd === "1952731") && !feriaATCEnabled) ?
                  "Ingresar CP" :(
                  addToCartEnabled && selectedChild ? (
                    stateLoading ?
                      <Spinner />
                    :
                    <ButtonInfo>
                      {Purchase()}
                      <Text>
                        Añadir al carrito 
                      </Text>
                      <Text font="bold">
                        ${formatNumber(price)}
                      </Text>
                    </ButtonInfo>
                  ) : "Agotado")}
                </Button>
            </div>

            {
              galleryImages && selectedChild &&  (
                <ATCFixed
                imageSrc={atcImage ?? galleryImages[0]}
                title={title}
                size={
                  variations_sizes[
                    selectedChild.attributes[
                      propsNames.tamano as keyof typeof selectedChild.attributes
                    ] as keyof typeof variations_sizes
                  ]
                }
                publishedPrice={price ?? 0}
                regularPrice={adjustedRegularPrice ?? 0}
                ATC={checkEDE}
                nrFees={category != "feria" ? installments : 1}
                addToCartEnabled={(idProd === "2111657" || idProd === "1952731") ? (!feriaATCEnabled || !addToCartEnabled) : !addToCartEnabled}
                showATCButton={showATCButton}
                stateLoading={stateLoading}
                selectedChild={selectedChild}
                idProd={idProd}
                quantity={quantity}
                />
              )
            }

            <ContainerPaymentMethod>
              <Modal>
                <ModalPaymentIcons showText/>
                <ModalPayment />
              </Modal>
              <PaymentCards/>
            </ContainerPaymentMethod>
            
          </RightColumn>
          )}

        <MiniBannerMobile>
          <BannerAndCucarda isBanner category={category}
              srcBanner={
                idProd === "2196410" 
                ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/bb906305-1d05-4d46-2bf8-11e65a031e00/fit=cover" 
                : idProd === "2249180" 
                ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/4a8c246c-a309-4fff-017c-d0436ae8e000/fit=coverc" 
                : idProd === "2249006" 
                ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/11fbbd15-1f33-460d-ac0f-e9780102f100/fit=cover" 
                : isThursday()
                ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ae07339d-b0c4-484f-f6d2-91a53a2c7900/fit=cover"
                : undefined
              }
            />
          </MiniBannerMobile>
        </SpanColumns>
      </Wrapper>
    </LandingContent>
  )
}

export default MainBlock
