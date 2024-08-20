import React, { useEffect, useState } from 'react'
import {
  CartHeading,
  CartItemImgContainer,
  CartSubheading,
  CartSummaryContainer,
  CartItemsContainer,
  ShowDetailsText,
  StyledHr,
  TitleAndPrice,
  ItemDescription,
  ImgWrapper,
  ItemsList
} from './styled'
import CartMobile from '../CartMobile/CartMobile'
import { useDispatch, useSelector } from 'react-redux'
import { onGetCart, onGetVariation } from '@/state/cart/cartActions'
import { getCartData, getVariationsData } from '@/state/cart/cartSelector'
import Image from 'next/image'
import { IStore } from '@/state/types'
import { getCheckoutOnlyToPay, getOrderExist } from '@/state/order/orderSelector'
import { IImage, IItem, IVariation } from '@/state/cart/types'
import variations_products from '@/utils/variations_products'

interface IImageAux {
  name: string,
  images: IImage[]
}

interface ICartAux {
  items: IItem[] | undefined,
  items_count: number | undefined,
  totals: {
    total_price: string | undefined,
    currency_code: string | undefined,
  },
}

function CartSummary() {
  const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
  const infoOrderExist = useSelector((state: IStore) => getOrderExist(state));

  const [isCartOpen, setIsCartOpen] = useState(false)
  const dispatch = useDispatch()
  const cartData = useSelector(getCartData);
  const variationsData = useSelector((state: IStore) =>
    getVariationsData(state)
  )

  const [cartInfo, setCartInfo] = useState<ICartAux>({
    items: !checkoutOnlyToPay ? cartData?.items : [],
    items_count: !checkoutOnlyToPay ? cartData?.items_count : 0,
    totals: {
      total_price: !checkoutOnlyToPay ? cartData?.totals.total_price : "",
      currency_code: !checkoutOnlyToPay ? cartData?.totals.currency_code : "ARS"
    },
  });

  useEffect(() => {
    if (!checkoutOnlyToPay && !cartData) {
      dispatch(onGetCart())
    }

    if(checkoutOnlyToPay && infoOrderExist) {
      
      const {order_data} = infoOrderExist;

      const items = order_data?.items.map((item: any) => ({
        name: item.product_name,
        id: item.variation_id,
        images: [{src: item.img_url}],
        quantity: item.quantity
      }));
      
      let items_count = 0
      items.forEach((item: any) => {
        items_count = items_count + item.quantity
      })

      setCartInfo({
          ...cartInfo,
          items: items,
          items_count: items_count,
          totals: {
            total_price: order_data?.total,
            currency_code: order_data?.currency_code
          }
      })
    }
  }, []);

  useEffect(() => {
    if(cartData && !checkoutOnlyToPay) {
      
      setCartInfo(cartInfoPrev => ({
        ...cartInfoPrev,
        items: cartData?.items,
        items_count: cartData?.items_count,
        totals: {
          ...cartInfoPrev.totals,
          total_price: cartData?.totals.total_price,
          currency_code: cartData?.totals.currency_code
        }
      }));
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
  }, [cartData, checkoutOnlyToPay])

  return (
    <CartSummaryContainer>
      {isCartOpen && <CartMobile closeCart={() => setIsCartOpen(false)} isCartOpen={isCartOpen}/>}
      <TitleAndPrice>
        <CartHeading>Tu Pedido</CartHeading>
        <CartSubheading>

            {
              Intl.NumberFormat('es-AR', {
              
                style: 'currency',
                currency: cartInfo?.totals?.currency_code,
                minimumFractionDigits: 0,
              
              }).format(Number(cartInfo?.totals?.total_price))
            }
            

          </CartSubheading>
      </TitleAndPrice>

      {cartInfo && (
        <>
        <CartItemsContainer>
          <ImgWrapper>
            {cartInfo?.items?.map((item) => {
              return (
                  <CartItemImgContainer key={item.id}>
                    <Image
                      src={item.images[0].src}
                      alt={item?.name + 'image'}
                      width={200}
                      height={200}
                      priority
                    />
                    {Boolean(item?.quantity > 1) && <p>{item?.quantity}x</p>}
                  </CartItemImgContainer>
            )})}
          </ImgWrapper>

          <ItemsList>
            {cartInfo?.items?.map((item) => {
              let propsNames = {
                tamano: "",
              }

              const attributes = variationsData?.find((it) => it.id == item.id)

            if (attributes) {
                for (let clave in attributes?.attributes) {
                  if (clave.includes("tamano")) {
                    propsNames.tamano = clave
                  }
                }
            }
            
            return (
                <ItemDescription key={item.id}>
                  <p>
                    {`${item.quantity}x`}{item.name}, {
                      variations_products
                      [attributes?.attributes[
                        propsNames.tamano as keyof typeof attributes
                      ] as keyof typeof variations_products]
                    }
                  </p>
                </ItemDescription>
                )})}
            </ItemsList>
          </CartItemsContainer>
        </>
      )}

      <ShowDetailsText onClick={() => setIsCartOpen(true)}>
        Mostrar detalles del pedido
      </ShowDetailsText>
    </CartSummaryContainer>
  )
}
export default CartSummary
