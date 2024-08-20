import { IChildrenProd } from "@/state/products/types"

export interface IProps {
    imageSrc: string
    title: string
    size: string
    publishedPrice: number
    regularPrice: number
    nrFees?: number
    ATC: () => void
    addToCartEnabled: boolean
    showATCButton?: boolean
    stateLoading?: boolean
    selectedChild?: IChildrenProd
    idProd?: string
}