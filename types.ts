import { IProduct } from "./state/products/types";
import { IPillsData, IBannerAndCucarda } from "@/state/hygraph/types"
import { IPlainImageSlide } from "@/state/hygraph/types";
import { IHeaderBanner } from "@/state/hygraph/types"

export interface ILanding {
    landingSEO: ILandingSEO
    graphImageObject?: {[key: string]: string | number | object}
    graphWebPage?: {[key: string]: string | number | object}
    faqAccordion?: {title: string; description?: string}[]
}

export interface IHomeLanding extends ILanding {
    bigBanner: IPlainImageSlide[] | undefined
    currentProductsRelated?: IProduct[] | null
    colchon?: IProduct | null
}

export interface ICategoryLanding extends ILanding {
    products: IProduct[]
}

export interface IProductLanding extends ILanding {
    relatedProducts?: IProduct[] | null
    defaultProducts?: string[] | null
    product?: IProduct | null
    pills?: IPillsData[] | null
    bannerAndCucarda?: IBannerAndCucarda[] | null
    priceEDE?: number | null
}

export interface ILandingSEO {
    id?: string;
    title: string;
    description: string;
    image: string;
    url: string;
}

export interface IBannerSidecart {
    colorBackground: string;
    colorText: string;
    textBanner: string;
}

export interface INavbar {
    headbannerData?: IHeaderBanner;
}