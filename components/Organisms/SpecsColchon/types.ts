import { IChildrenProd } from "@/state/products/types"
import { IProduct } from "@/state/products/types";

export interface IProps {
    category: {
        products: IProduct[];
        installments: number;
    }
}