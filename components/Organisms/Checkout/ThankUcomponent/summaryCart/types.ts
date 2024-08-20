import { CardCartThankuProps } from "@/state/order/types"

export interface IProps {
    items: CardCartThankuProps[],
    coupons?: {
        code: string,
        totals: {
          total_discount: string
        },
    }[]
    subtotal: string
    total: string
    shipping: {
        is_pickup?: boolean
        shipping_cost?: string,
        shipping_text?: string
    }
    payment_method: string
    isSeguimiento?: boolean
    couponDiscountSeguimiento?: string
}
