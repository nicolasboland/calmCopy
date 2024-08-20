export interface IProps{
    items: PaymentObject[]
}

interface PaymentObject{
    img: string
    alt: string
    href?: string
    dataFiscal?: boolean
}