import { IChildrenProd, IStockAndPrice } from "@/state/products/types"

export interface IProps {
  title: string
  category: string
  dreamDelivery?: boolean
  description?: string
  galleryImages?: string[]
  renders?: {[key: string]: string }
  children: IChildrenProd[] | undefined
  discount: number | undefined
  installments: number | undefined
  skus?: string
  stateLoading?: boolean
  defaultProds: string[] | undefined
  isCombo?: boolean
  tranferDiscount?: string
  idProd: string | undefined
  priceEDE?: number
  pillIdSpecialOffer?: string
  stockAndPrices?: IStockAndPrice
  atcImage?:string
  feriaATCEnabled: boolean
  headPills?:string
  SecondheadPills?:string
}
