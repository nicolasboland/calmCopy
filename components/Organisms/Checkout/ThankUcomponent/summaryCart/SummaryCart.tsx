import {
  CartHeading,
  CartItem,
  CartItemDescription,
  CartItemImage,
  CartItemSubtotal,
  CartItemTotal,
  CartTotals,
  CartItemText,
  CartItemsContainer,
  CartText,
  GreenText,
  PurpleText,
  StyledCart,
  StyledHr,
  ListItem,
  NameCoupon,
} from '@/components/Organisms/Checkout/CartDesktop/styled'
import { CartTitleThank, CartDescriptionThank, CouponContainer } from './SummaryCartCss'
import { formatNumber } from '@/utils/formatPrices'
import variations_sizes from '@/utils/variations_sizes';
import { CASH } from '@/utils/payment_methods'
import { IProps } from "./types"
import { CardCartThankuProps } from "@/state/order/types"
import { ICoupon } from '@/state/order/types';
import parse from 'html-react-parser';
import Text from '@/components/Atoms/Typography/Text';

export const SummaryCart = ({  
    items,
    coupons,
    subtotal,
    total,
    shipping,
    payment_method,
    isSeguimiento,
    couponDiscountSeguimiento}: IProps) => {

  return (
    <StyledCart $isSeguimiento={isSeguimiento}>
      <CartHeading>
        <h3>Detalles de tu compra</h3>
      </CartHeading>
      <CartItemsContainer>
        {
          items.map((item: CardCartThankuProps) => (
            <CartItem key={item.product_id}>
              <CartItemImage src={item.img_url} />
              <CartItemDescription>
                <CartTitleThank>{item.product_name}</CartTitleThank>
                {
                  item.attributes && (
                    item.attributes.pa_tamano ? (
                      <CartDescriptionThank>{variations_sizes[item.attributes.pa_tamano as keyof typeof variations_sizes]}</CartDescriptionThank>
                    ) : (
                      <CartDescriptionThank>{variations_sizes[item.attributes.tamano as keyof typeof variations_sizes]}</CartDescriptionThank>
                    )
                  )
                }
                <CartItemText>Cantidad: {item.quantity}</CartItemText>
              </CartItemDescription>
              <CartTotals>
                <CartItemSubtotal>
                  {
                    !item.attributes ? (
                      item.total > "0" ? (
                        <span>
                          ${formatNumber(Number(item.total))}
                        </span>
                      ) : (
                        <GreenText>¡Gratis!</GreenText>
                      )
                    ) : (
                      <span>
                        ${formatNumber(Number(item.subtotal))}
                      </span>
                    )
                  }
                </CartItemSubtotal>
              </CartTotals>
            </CartItem>
          ))}
      </CartItemsContainer>
      <StyledHr />
      <CartText>
            <span>Subtotal</span>
            {
            isSeguimiento ?
            <span>{parse(total)}</span>
            : <span>${formatNumber(Number(subtotal))}</span> 
          }
            
      </CartText>
      <StyledHr />


          <CouponContainer $isSeguimiento={isSeguimiento}>
            <CartText>
              Cupones:
            </CartText>
            {
            coupons && coupons.map( (coupon: ICoupon) => 
              <div key={coupon.code}>
                <ListItem $isSeguimiento={isSeguimiento} >
                  <NameCoupon>
                    {
                      coupon.code.toUpperCase() === "CALMFERENCIA_DISCOUNT" ? (
                        <>
                        {
                          payment_method === CASH && <span> Descuento Efectivo</span>
                        }
                        {
                          payment_method === "bacs" && <span> Descuento Transferencia</span>
                        }
                        </>
                      ) : (
                        coupon.code.toUpperCase() || coupon.code.toUpperCase()
                      )
                    }
                  </NameCoupon>
                  
                {
                    !isSeguimiento && coupon.totals.total_discount != "0" && (
                      <CartItemSubtotal>
                      - ${formatNumber(Number(coupon.totals.total_discount))}
                      </CartItemSubtotal>
                    )
                  }
                </ListItem>
              </div>
            ) 
          } 
          {
            isSeguimiento && couponDiscountSeguimiento &&
              <>
                <CartText>
                  Descuento:

                <span>{parse(couponDiscountSeguimiento)}</span>
                </CartText>
              </>
          }
          </CouponContainer>

      
      {
        coupons && coupons.length > 0 && 
          <StyledHr />
      } 
      
      <CartText>
        <span>Envío</span>
        {
          isSeguimiento ?
            <>{shipping.shipping_text}</>
        : shipping && (
          shipping.is_pickup ? 
          <p>Retiro por local</p> : !shipping.shipping_cost ? (
            <GreenText>¡Gratis!</GreenText>
          ) : (
            <span>
              ${formatNumber(Number(shipping.shipping_cost))}
            </span>
          ))
        }
      </CartText>
      <StyledHr />

      {
        isSeguimiento && payment_method && (
          <> 
            <CartText>
              <span>Método de pago:</span>
              <span>{payment_method}</span>
            </CartText>
            <StyledHr />
          </>
      )}
      
      <CartText $fontSize="lg">
          <span>Total</span>
          {
            isSeguimiento ?
            <span>{parse(subtotal)}</span>
            : <span>${formatNumber(Number(total))}</span> 
          }
      </CartText>
      <PurpleText>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 9.62354C26 9.88875 25.8947 10.1431 25.7071 10.3306C25.5196 10.5182 25.2652 10.6235 25 10.6235H23V12.6235C23 12.8888 22.8947 13.1431 22.7071 13.3306C22.5196 13.5182 22.2652 13.6235 22 13.6235C21.7348 13.6235 21.4804 13.5182 21.2929 13.3306C21.1054 13.1431 21 12.8888 21 12.6235V10.6235H19C18.7348 10.6235 18.4804 10.5182 18.2929 10.3306C18.1054 10.1431 18 9.88875 18 9.62354C18 9.35832 18.1054 9.10396 18.2929 8.91643C18.4804 8.72889 18.7348 8.62354 19 8.62354H21V6.62354C21 6.35832 21.1054 6.10396 21.2929 5.91643C21.4804 5.72889 21.7348 5.62354 22 5.62354C22.2652 5.62354 22.5196 5.72889 22.7071 5.91643C22.8947 6.10396 23 6.35832 23 6.62354V8.62354H25C25.2652 8.62354 25.5196 8.72889 25.7071 8.91643C25.8947 9.10396 26 9.35832 26 9.62354ZM14 4.62354H15V5.62354C15 5.88875 15.1054 6.14311 15.2929 6.33064C15.4804 6.51818 15.7348 6.62354 16 6.62354C16.2652 6.62354 16.5196 6.51818 16.7071 6.33064C16.8947 6.14311 17 5.88875 17 5.62354V4.62354H18C18.2652 4.62354 18.5196 4.51818 18.7071 4.33064C18.8947 4.14311 19 3.88875 19 3.62354C19 3.35832 18.8947 3.10397 18.7071 2.91643C18.5196 2.72889 18.2652 2.62354 18 2.62354H17V1.62354C17 1.35832 16.8947 1.10396 16.7071 0.916428C16.5196 0.728892 16.2652 0.623535 16 0.623535C15.7348 0.623535 15.4804 0.728892 15.2929 0.916428C15.1054 1.10396 15 1.35832 15 1.62354V2.62354H14C13.7348 2.62354 13.4804 2.72889 13.2929 2.91643C13.1054 3.10397 13 3.35832 13 3.62354C13 3.88875 13.1054 4.14311 13.2929 4.33064C13.4804 4.51818 13.7348 4.62354 14 4.62354ZM23.0963 16.7485C23.2127 16.8841 23.2906 17.0483 23.3221 17.2241C23.3535 17.4 23.3373 17.5811 23.275 17.7485C22.5811 19.6409 21.4217 21.328 19.9039 22.6542C18.386 23.9803 16.5585 24.9027 14.5902 25.3364C12.6218 25.77 10.5759 25.7008 8.64126 25.1352C6.70666 24.5696 4.94568 23.5259 3.52085 22.1002C2.09602 20.6746 1.05325 18.913 0.488761 16.9781C-0.0757265 15.0432 -0.143739 12.9972 0.290999 11.0291C0.725738 9.06094 1.64922 7.23401 2.97622 5.7169C4.30323 4.19978 5.99099 3.04136 7.88376 2.34854C8.05036 2.28752 8.23019 2.27193 8.4048 2.30336C8.57941 2.33478 8.74252 2.4121 8.87739 2.52738C9.01226 2.64265 9.11403 2.79173 9.17226 2.95932C9.23049 3.12691 9.24309 3.30697 9.20876 3.48104C8.85833 5.25475 8.95014 7.08746 9.47609 8.81727C10.002 10.5471 10.9459 12.1207 12.2244 13.3992C13.5028 14.6776 15.0765 15.6215 16.8063 16.1475C18.5361 16.6734 20.3688 16.7652 22.1425 16.4148C22.3168 16.3807 22.497 16.3937 22.6646 16.4523C22.8323 16.511 22.9812 16.6132 23.0963 16.7485ZM20.6725 18.6085C20.4488 18.6198 20.2238 18.626 20 18.626C16.5529 18.6224 13.248 17.2512 10.8108 14.8135C8.37351 12.3758 7.00299 9.07067 7.00001 5.62354C7.00001 5.39979 7.00001 5.17479 7.01751 4.95104C5.68699 5.71667 4.5506 6.77835 3.69638 8.05381C2.84217 9.32927 2.29306 10.7843 2.0916 12.3061C1.89014 13.8279 2.04174 15.3756 2.53466 16.8294C3.02758 18.2832 3.84857 19.604 4.93404 20.6895C6.01951 21.775 7.34031 22.596 8.7941 23.0889C10.2479 23.5818 11.7957 23.7334 13.3175 23.5319C14.8393 23.3305 16.2943 22.7814 17.5697 21.9272C18.8452 21.0729 19.9069 19.9366 20.6725 18.606V18.6085Z"
            fill="#631F99"
          />
        </svg>
        <span>Tenés 30 noches de prueba</span>
      </PurpleText>
    </StyledCart>
  )
}

export default SummaryCart

