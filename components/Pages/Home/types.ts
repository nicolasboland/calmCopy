import { IProduct } from "@/state/products/types";
import { IPlainImageSlide } from "@/state/hygraph/types";

export interface IProps {
    bigBannerData: IPlainImageSlide[] | undefined,
    currentProductsRelated?: IProduct[] | null
    colchon?: IProduct | null
}
