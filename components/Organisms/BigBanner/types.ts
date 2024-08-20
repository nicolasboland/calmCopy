import { IPlainImageSlide } from "@/state/hygraph/types"

export interface IBigbanner {
    bigBanner: IPlainImageSlide[] | undefined, 
    isDefault: boolean
    isImagesLoaded: boolean
    preloadImageDesktop: string
    preloadImageMobile: string
    isFirstImageLoaded: boolean
}

export interface IContent {
    slider: IPlainImageSlide, 
    isDefault: boolean
    isImagesLoaded: boolean
    preloadImageDesktop: string
    preloadImageMobile: string
}