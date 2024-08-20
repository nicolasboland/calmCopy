import { IProduct } from "@/state/products/types";

export interface IProps{
    category:{
        name: "bases" | "colchones" | "ropa-de-cama" | "almohadas" | "feria" | "accesorios" | "muebles";
        title: string;
        subtitle?: string
        products: IProduct[];
        installments: number;
        relatedProducts?: string
    }
}