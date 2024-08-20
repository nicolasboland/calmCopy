import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {
  onRemoveItemFromCart,
  onAddCouponToCart,
  onRemoveCouponFromCart,
  onUpdateShippingFromCart,
  onGetCartRelatedProducts,
  onGetVariation,
  onGetCart,
  onAddItemToCart,
  onUpdateCartDataWithSession
} from "@/state/cart/cartActions"
import Modal from "./ModalSidecart/Modal"
import { IStore } from "@/state/types"
import {
  PEmptyCart,
  SectionCards,
  DivToast,
  Content,
  Wrapper,
  SectionSubtotal,
  LoadingSubtotal,
  DivSubtotal,
  DivTotal,
  LoadingTotal
} from "./styled"
import { formatNumber } from "@/utils/formatPrices"
import BannerSidecart from "./BannerSidecart/BannerSidecart"
import ShippingCalc from "./ShippingCalc/ShippingCalc"
import { IVariation } from "@/state/cart/types"
import RelatedProducts from "../RelatedProducts/RelatedProducts"
import {
  getCartCurrentProductsRelated,
  getCartData,
  getCartError,
  getShippingCost,
  getSubtotalPrice,
  getSubtotalPriceDiscount,
  getTotalPrice,
  getVariationsData
} from "@/state/cart/cartSelector"
import { getLoadingValues } from "@/state/loading/loadingSelector"
import Spinner from "@/components/Atoms/Spinner/Spinner"
import { ToastContainer, toast } from "react-toastify"
import { itemIsEDEAble } from "@/utils/itemIsEDEAble"
import { getFormData } from "@/state/formData/formDataSelector"
import { CartProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Separator from "@/components/Atoms/Spacing/Separator/Separator"
import { useRouter } from "next/router"
import AddCoupon from "./AddCoupon/AddCoupon"
import { CartCard } from "@/components/Molecules/CartCard/CartCard"
import 'react-toastify/dist/ReactToastify.css'
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv"
import { onDefineCheckoutPath } from "@/state/order/orderActions"
import { getCheckoutPath } from "@/state/order/orderSelector"
import { sendClarityCustomEvent } from '@/lib/clarity';

const Cart = ({ isOpen, openCart, closeCart }: CartProps) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [ redirectCheckout, setRedirectCheckout] = useState<boolean>(false)
  const pathToCheckout = useSelector((state: IStore) => getCheckoutPath(state))
  const shippingCost = useSelector((state: IStore) => getShippingCost(state))
  const formData = useSelector(getFormData)
  const cartError = useSelector((state: IStore) => getCartError(state))
  const cartData = useSelector((state: IStore) => getCartData(state))
  const variationsData = useSelector((state: IStore) =>
    getVariationsData(state)
  )
  const currentProductsRelated = useSelector((state: IStore) =>
    getCartCurrentProductsRelated(state)
  )
  const loading = useSelector((state: IStore) => getLoadingValues(state))

  const [isCartLoaded, setIsCartLoaded] = useState(false)
  const [urlCouponAdded, setURLCouponAdded] = useState(false)
  const [errCoupon, setErrCoupon] = useState<string>("")
  const [ CouponSecUnid, setCouponSecUnid] = useState<boolean>(false)
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(true)
  }, [render])

  const totalPrice = parseInt(
    useSelector((state: IStore) => getTotalPrice(state))
  )
  const subtotalPrice = parseInt(
    useSelector((state: IStore) => getSubtotalPrice(state))
  )
  const subtotalPriceDiscount = parseInt(
    useSelector((state: IStore) => getSubtotalPriceDiscount(state))
  )
  const [initSidecart, setInitSidecart] = useState(false)

  const [urlCoupon, setURLCoupon] = useState<string | null>()
  const [ModalAlert, setModalAlert] = useState(false)
  const [couponAddedError, setCouponAddedError] = useState(false)
  const [urlAddToCart, setUrlAddToCart] = useState<{
    "add-to-cart": number
    quantity: string
  } | null>(null)

  const [paymentLoading, setPaymentLoading] = useState<boolean>(false)

  useEffect(() => {
    if (cartError.error && cartError.errorDetail) {
      setErrCoupon(cartError.errorDetail)
      setTimeout(() => {
        setErrCoupon("")
      }, 3000)
    }
  }, [cartError.errorDetail])

  useEffect(() => {
    if (cartError.error && cartError.addToCartErrorDetail) {
      toast.error(cartError.addToCartErrorDetail, {
        position: "top-right",
        autoClose: 5000,
        toastId: "stockError",
        icon: false,
        pauseOnFocusLoss: false,
        hideProgressBar: true,
        style: {
          backgroundColor: "#BA0000",
          color: "white",
          borderRadius: "0.5rem",
          fontFamily: "Gilroy-Bold",
        }
      })
    }
    }, [cartError.addToCartErrorDetail]);

    useEffect(() => {
      if(redirectCheckout && pathToCheckout) {
        sendClarityCustomEvent("checkout", `${pathToCheckout}`);
        router.push(productURLRedirectionByEnv(`/${pathToCheckout}`))
      }
    }, [pathToCheckout, redirectCheckout])

  useEffect(() => {
    const saveSessionCartData = async () => {
      const sessionCartData = localStorage.getItem("cartData")
      const cartDataDate = localStorage.getItem("cartDataDate")
      let validCartData = true
      if (cartDataDate != null && !isNaN(parseInt(cartDataDate))) {
        validCartData =
          (new Date().getTime() - new Date(parseInt(cartDataDate)).getTime()) /
            (1000 * 3600 * 24) <
          5
      }
      if (validCartData && sessionCartData) {
        dispatch(onUpdateCartDataWithSession(sessionCartData))
      }
      setInitSidecart(true)
    }
    saveSessionCartData()
  }, [])

  useEffect(() => {
    if (cartData) {
      localStorage.setItem("cartData", JSON.stringify(cartData))
      localStorage.setItem("cartDataDate", new Date().getTime().toString())

      let totalItems = 0;
      cartData.items.forEach(item => {
          totalItems += item.quantity;
        });
      setCouponSecUnid(!(totalItems > 1 || totalItems == 0))
      }
  }, [cartData])

  useEffect(() => {
    if (cartError && cartError.error) {
      localStorage.removeItem("cartData")
      localStorage.removeItem("cartDataDate")
    }
  }, [cartError])

  useEffect(() => {
    if (initSidecart && window) {
      //GET CART AL CARGAR LA PAGINA COMENTADO, PORQUE CON EL LOCAL STORAGE, AL HACER ALGUNA ACCION CON EL CARRITO, DEBERIA ACTUALIZARSE SIN NECESIDAD DEL GET CART
      /*
            if (!cartData) {
                dispatch(onGetCart())
            }
            */
      const queryParameters = new URLSearchParams(window.location.search)
      setURLCoupon(queryParameters.get("coupon"))
      const productId = queryParameters.get("add-to-cart")
      if (productId) {
        setUrlAddToCart({
          "add-to-cart": parseInt(productId),
          quantity: queryParameters.get("quantity") || "1"
        })
      }
    }
  }, [initSidecart])

  useEffect(() => {
    if (!isCartLoaded && cartData) {
      setIsCartLoaded(true)
    }
  }, [cartData])

  useEffect(() => {
    if (urlCoupon && isCartLoaded && !urlCouponAdded) {
      dispatch(onAddCouponToCart(urlCoupon))
      openCart()
      setURLCouponAdded(true)
    }
    const openWhenLoaded = async () => {
      if (urlAddToCart && isCartLoaded) {
        await dispatch(
          onAddItemToCart(
            urlAddToCart["add-to-cart"],
            parseInt(urlAddToCart["quantity"])
          )
        )
        openCart()
      }
    }

    openWhenLoaded()
  }, [isCartLoaded, urlAddToCart, urlCoupon])

  useEffect(() => {
    if (!loading.loadingAddCoupon) {
      setCouponAddedError(cartData?.coupons.length === 0)
    }
  }, [loading.loadingAddCoupon])

  useEffect(() => {
    if (cartData && cartData.items_count > 0) {
      dispatch(
        onGetCartRelatedProducts(cartData.items.map((i) => i.id.toString()))
      )
    }

    if (cartData?.items) {
      const { items } = cartData

      items.forEach((item) => {
        let child: IVariation | null = null

        if (variationsData) {
          const foundChild = variationsData.find((prod) => prod.id == item.id)

          if (foundChild) child = foundChild
        }

        if (!child) {
          dispatch(onGetVariation(item.id.toString()))
        }
      })
    }
  }, [cartData])

  useEffect(() => {
    const handler = () => {
      setPaymentLoading(false)
      setRedirectCheckout(false)
    };

    window.addEventListener("pageshow", handler);
    window.addEventListener("pagehide", handler);
    return () => {
      window.removeEventListener("pageshow", handler);
      window.removeEventListener("pagehide", handler);
    };
  }, [])

  const renderTotals = () => {
    if (!cartData?.items || cartData.items.length === 0) {
      return null
    }
    return (
      <>
        <Separator margin="0" width="2px" color="superSilver" />
        <SectionSubtotal>
          <DivSubtotal>
            <Text font="bold">Subtotal</Text>
            <Wrapper>
              {loading.loadingUpdateToCart ? (
                <Content>
                  <LoadingSubtotal />
                </Content>
              ) : (
                <Text font="bold">
                  ${subtotalPrice ? formatNumber(subtotalPrice) : 0}
                </Text>
              )}
            </Wrapper>
          </DivSubtotal>
          <ShippingCalc
            totalShipping={shippingCost}
            updateShipping={(postcode: string) =>
              dispatch(onUpdateShippingFromCart(postcode))
            }
            isCpCalc={loading.loadingCalcShippingCost}
          />
        </SectionSubtotal>

        {cartData.items_count > 0 ? (
          <AddCoupon
            cartData={cartData}
            loading={loading}
            errCoupon={errCoupon}
            setErrCoupon={setErrCoupon}
          />
        ) : (
          <PEmptyCart>
            <Text>Tu carrito está vacío</Text>
            <Images
              src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/fdded6b5-f37f-4eae-a0fa-522f87e77500/fit=cover"
              alt="Carrito img"
              width="20px"
            />
          </PEmptyCart>
        )}

        <Separator width="2px" color="weldedIron" />
        <Margin margin="1rem">
          <DivTotal>
            <Text fontSize="1.3rem" font="medium">
              TOTAL
            </Text>
            <Wrapper>
              {loading.loadingUpdateToCart ? (
                <Content>
                  <LoadingTotal />
                </Content>
              ) : (
                <Text fontSize="1.3rem" font="medium">
                  ${totalPrice ? formatNumber(totalPrice) : 0}
                </Text>
              )}
            </Wrapper>
          </DivTotal>
        </Margin>
      </>
    )
  }

  const renderButtons = () => {
    if (!cartData?.items || cartData.items.length === 0) {
      return null
    }

    const loadingPagoLanding = () => {
      setPaymentLoading(true)
      dispatch(onDefineCheckoutPath())
      setRedirectCheckout(true)
    }

    return (
      <>
        {loading.loadingDeleteToCart ||
        loading.loadingUpdateToCart ||
        loading.loadingEmptyCart ||
        loading.loadingStartBuy ||
        loading.loadingAddCoupon ||
        loading.loadingAddToCart ||
        paymentLoading ||
        loading.loadingDeleteCoupon ? (
          <Margin margin="1rem 1rem">
            <Button
              borderRadius="6px"
              width="100%"
              backgroundColor="parkPicnic"
              backgroundColorHover="hawaiianTiLead"
              aria-label="Iniciar compra"
            >
              <Spinner />
            </Button>
          </Margin>
        ) : (
          <Margin margin="1rem 1rem">
            <Button
              borderRadius="6px"
              width="100%"
              backgroundColor="parkPicnic"
              backgroundColorHover="hawaiianTiLead"
              onClick={loadingPagoLanding}
            >
              <Text
                fontSize="1rem"
                font="bold"
                color="white"
                letterSpacing="1.2px"
              >
                Iniciar compra
              </Text>
            </Button>
          </Margin>
        )}
      </>
    )
  }

  const removeItemFromCart = async (key: string, product?: string) => {
    const edeItem = cartData?.items.find((item) => item.id == 2024353)
    const edeAbledItems = cartData?.items.filter((item) =>
      itemIsEDEAble(item.sku)
    )
    if (
      edeItem &&
      edeAbledItems?.length == 1 &&
      edeAbledItems.some((i) => i.key == key)
    ) {
      await dispatch(onRemoveItemFromCart(edeItem.key))
    }
    dispatch(onRemoveItemFromCart(key, product))
  }

  const renderAddedProducts = () => {
    if (cartData?.items && cartData.items.length > 0 && variationsData) {
      return (
        <SectionCards>
          {cartData.items.map((item) => {
            const attributes = variationsData?.find((it) => it.id == item.id)

            return (
              attributes && (
                <CartCard
                  key={item.key}
                  keyItem={item.key}
                  quantity={item.quantity}
                  quantity_limit={item.quantity_limit}
                  name={item.name}
                  totals={item.totals}
                  regular_price={item?.prices?.regular_price as string}
                  imageSrc={item.images?.[0]}
                  removeItem={removeItemFromCart}
                  removeCoupon={(code: string) =>
                    dispatch(onRemoveCouponFromCart(code))
                  }
                  variations={attributes}
                  isChange={loading?.loadingUpdateToCart}
                  isDelete={loading?.loadingDeleteToCart}
                  isCpCalc={loading?.loadingEmptyCart}
                  isAddCoupon={loading?.loadingAddCoupon}
                />
              )
            )
          })}
        </SectionCards>
      )
    }
  }

  if (!render) return null

  return (
    <>
      <ToastContainer />
      <Modal
        isOpen={isOpen}
        closeModal={closeCart}
        titleHeader={`Mi Carrito (${cartData?.items_count ?? 0})`}
      >
        {cartData && (
          <>
            <BannerSidecart show={CouponSecUnid}/>

            {renderAddedProducts()}

            {renderTotals()}

            {renderButtons()}
            {cartData.items_count > 0 && (
              <Margin margin="0 20px">
                <Text color="offBlack" font="extraBold" align="center">
                  El descuento adicional por traferencia se aplica cuando elegis la forma de pago
                </Text>
              </Margin>
            )}
            {cartData.items_count > 0 && (
              <RelatedProducts
                relatedItems={currentProductsRelated}
                title=""
                boldTitle=""
                isMobile
                fromCart
              />
            )}

            {ModalAlert && urlCoupon && (
              <DivToast>
                {loading.loadingAddCoupon ? (
                  <>
                    {toast.error(<Spinner />, {
                      position: "bottom-center",
                      autoClose: 2000,
                      toastId: "loader",
                      icon: false,
                      pauseOnFocusLoss: false,
                      style: {
                        textAlign: "center",
                        backgroundColor: "#8f4f9a",
                        color: "white",
                        borderRadius: "0.5rem",
                        width: "500px",
                        fontFamily: "Gilroy-Bold",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        letterSpacing: "1px",
                        lineHeight: "21px"
                      }
                    })}
                  </>
                ) : couponAddedError ? (
                  <>
                    {toast.error("Hubo un error al cargar el cupon", {
                      position: "bottom-center",
                      autoClose: 5000,
                      toastId: "error",
                      icon: false,
                      pauseOnFocusLoss: false,
                      onClose: () => setModalAlert(false),
                      style: {
                        backgroundColor: "#8f4f9a",
                        color: "white",
                        borderRadius: "0.5rem",
                        width: "500px",
                        fontFamily: "Gilroy-Bold",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        letterSpacing: "1px",
                        lineHeight: "21px"
                      }
                    })}
                  </>
                ) : (
                  <>
                    {toast.error("Se cargo el cupon correctamente", {
                      position: "bottom-center",
                      autoClose: 5000,
                      toastId: "succeeded",
                      icon: false,
                      pauseOnFocusLoss: false,
                      onClose: () => setModalAlert(false),
                      style: {
                        backgroundColor: "#8f4f9a",
                        color: "white",
                        borderRadius: "0.5rem",
                        width: "500px",
                        fontFamily: "Gilroy-Bold",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        letterSpacing: "1px",
                        lineHeight: "21px"
                      }
                    })}
                  </>
                )}
              </DivToast>
            )}
          </>
        )}
      </Modal>
    </>
  )
}

export default Cart
