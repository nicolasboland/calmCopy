import { IPlainImageSlide } from "@/state/hygraph/types";
import { IBannerAndCucarda } from "@/state/hygraph/types"

export interface IProps {
    title: string;
    description: string;
    imageSrc?: string;
    url: string;
    graphImageObject?: {[key: string]: string | number | object}
    graphWebPage?: {[key: string]: string | number | object}
    faqAccordion?: {nro?: number; title: string; description?: string}[];
    showCalmRichSnippet?: boolean
    productReviewsSKUs?: string
    bigBanner?: IPlainImageSlide[] | null
    productLandingGallery?: string[]
    miniBanner?: IBannerAndCucarda
}