import Text from "@/components/Atoms/Typography/Text"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import Input from "@/components/Atoms/Input/Input"
import Separator from "@/components/Atoms/Spacing/Separator/Separator"
import { DivAddCoupon, DivSideCart, UlCoupons } from "./styled"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAddCouponToCart } from "@/state/cart/cartActions"
import { getDescriptionCoupons } from "@/state/cart/cartSelector"
import { IStore } from "@/state/types"
import Spinner from "@/components/Atoms/Spinner/Spinner"
import { AddCouponProps } from "./types"
import ListCoupons from "@/components/Molecules/ListCoupons/ListCoupons"

const AddCoupon = ({ cartData, loading, errCoupon, setErrCoupon }: AddCouponProps) => {
  const dispatch = useDispatch()
  const [coupon, setCoupon] = useState("")
  const [openCoupon, setOpenCoupon] = useState(false)
  const descriptionCoupons = useSelector((state: IStore) =>
    getDescriptionCoupons(state)
  )

  const onAddCoupon = () => {
    if (coupon !== "") {
      if(!checkHasInfluencersCoupon(coupon)){
        dispatch(onAddCouponToCart(coupon))
        setCoupon("")
      } else {
        setErrCoupon("Sólo se permite 1 cupón de lanzamiento por pedido")
        setTimeout(() => {
          setErrCoupon("")
        }, 3000)
      }
    }
  }

  const toggleCoupon = () => {
    setOpenCoupon(!openCoupon)
  }

  const checkHasInfluencersCoupon = (coupon:string) => {
    const coupons = cartData.coupons;
    const regexHotSale = /^hotsale-/;
    const regexCyber = /^cyber-/;
    const regexLanzamiento = /^lanzamiento-/;
    const couponInput = (regexHotSale.test(coupon.trim().toLowerCase()) || regexCyber.test(coupon.trim().toLocaleLowerCase()));
    for (const couponCart of coupons) {
        if ((regexHotSale.test(couponCart.code) || regexCyber.test(couponCart.code)) && couponInput ) {
            return true;
        }
    }
    return false;
  } 

  const renderCoupons = () => {
    if (cartData?.coupons.length === 0) {
      return null
    }

    const deleteCouponIcon = loading.loadingAddCoupon 
    || loading.loadingDeleteCoupon 
    || loading.loadingPay 
      ? "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/fae8fa5e-13ed-4b81-9d55-66fd299e6900/fit=cover"
      : "https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/527083b1-56bb-4a75-1a98-e7cffd083800/fit=cover"

    return (
      <UlCoupons>
        {descriptionCoupons && (
          <ListCoupons
            couponsArray={cartData}
            disabled={loading.loadingAddCoupon ?? loading.loadingDeleteCoupon}
            deleteCuponIcon={deleteCouponIcon}
          />
        )}
      </UlCoupons>
    )
  }

  return (
    <>
      <Separator color="millionGray" />
      <DivSideCart>
        {loading.loadingUpdateToCart ? (
          <Margin margin="1rem 1rem 0.7rem">
            <Button
              size="none"
              aria-label="Agregar cupón descuento"
              title="Agregar cupón descuento"
            >
              <Images
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/203e4d54-8aff-4b8c-d7b1-1af5f7148500/fit=cover"
                alt="cupon icono"
                width="auto"
              />
            </Button>
          </Margin>
        ) : (
          <Margin margin="1rem 1rem 0.7rem">
            <Button
              size="none"
              aria-label="Agregar cupón descuento"
              title="Agregar cupón descuento"
              onClick={toggleCoupon}
            >
              <Images
                src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/203e4d54-8aff-4b8c-d7b1-1af5f7148500/fit=cover"
                alt="cupon icono"
                width="auto"
              />
              <Text fontSize="1rem" color="fadingHorizon">
                Agregar cupón
              </Text>
            </Button>
          </Margin>
        )}

        {openCoupon && (
          <>
            <DivAddCoupon>
              {loading.loadingAddCoupon ? (
                <>
                  <Input
                    value={coupon}
                    placeholder="Ingresá tu cupón"
                    aria-placeholder="Ingresá tu cupón"
                    disabled
                  />
                  <Button
                    size="xsmall"
                    borderRadius="7px"
                    borderColor="millionGray"
                    backgroundColor="millionGray"
                    title="Aplicando..."
                    aria-label="Aplicando"
                  >
                    <Spinner />
                  </Button>
                </>
              ) : (
                <>
                  {loading.loadingDeleteCoupon ? (
                    <>
                      <Input
                        value={coupon}
                        placeholder="Ingresá tu cupón"
                        aria-placeholder="Ingresá tu cupón"
                        disabled
                      />
                      <Button
                        size="xsmall"
                        borderRadius="7px"
                        borderColor="millionGray"
                        backgroundColor="millionGray"
                        disabled
                      >
                        <Spinner />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Input
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Ingresá tu cupón"
                        aria-placeholder="Ingresá tu cupón"
                      />
                      <Button
                        size="xsmall"
                        borderRadius="7px"
                        borderColor="millionGray"
                        backgroundColor="millionGray"
                        onClick={onAddCoupon}
                        title="Aplicar cupón"
                        aria-label="Aplicar cupón"
                      >
                        <Text
                          fontSize="0.6rem"
                          font="extraBold"
                          letterSpacing="1.5px"
                          color="white"
                        >
                          Aplicar
                        </Text>
                      </Button>
                    </>
                  )}
                </>
              )}
            </DivAddCoupon>
            <Margin margin="0.4rem">
              <Text
                fontSize="0.8rem"
                color="rareRed"
                font="bold"
                align="center"
              >
                {errCoupon}
              </Text>
            </Margin>
          </>
        )}

        {!loading.loadingUpdateToCart && renderCoupons()}
      </DivSideCart>
    </>
  )
}

export default AddCoupon
