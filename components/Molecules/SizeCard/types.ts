import { IChildrenProd } from "@/state/products/types"
import { Dispatch, SetStateAction } from "react"

export interface IPropsSize {
    text: string
    setSelected: (id: string) => void
    selected?: IChildrenProd
    childId: string
    setIsSizeChange: Dispatch<SetStateAction<boolean>>
    landing?: string
    hasRenders?: boolean
    isCategory?: boolean
}
