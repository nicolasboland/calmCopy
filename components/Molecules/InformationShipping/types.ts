import { IChildrenProd } from "@/state/products/types"
import { Dispatch, SetStateAction } from 'react';

export interface IProps {
    product?: IChildrenProd,
    clearInput?: boolean
    setClearInput?: Dispatch<SetStateAction<boolean>>
}