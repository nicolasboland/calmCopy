import { IChildrenProd, IStockAndPrice } from "@/state/products/types"
import { Dispatch, SetStateAction } from "react"

export interface IProps {
    children?: IChildrenProd[]
    setSelectedChild:  Dispatch<SetStateAction<IChildrenProd | undefined>>
    stockAndPrices?: IStockAndPrice
    selectedChild?: IChildrenProd
    hasRenders?: boolean
    setIsSizeChange: Dispatch<SetStateAction<boolean>>
    category?: string
    setIsColorChange?: Dispatch<SetStateAction<boolean>>
    defaultProds: string[] | undefined
    isCategory?: boolean
    idProd?: string
    onQuantityChange?: (quantity: number) => void;
}