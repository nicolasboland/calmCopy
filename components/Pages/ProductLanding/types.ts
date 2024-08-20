import { IProduct } from "@/state/products/types"
import { ILandingSEO } from "@/types"

export interface IProps {
    productId: string
    comboIds?: string[]
    title: string
    titleDescription: string
    renders?: {[key: string]: string }
    selectedLink: string
    landingSEO: ILandingSEO
    graphImageObject?: {[key: string]: string | number | object}
    graphWebPage?: {[key: string]: string | number | object}
    dreamDelivery?: boolean
    skus?: string
    skusFeria?: string
    layoutImages?: string[]
    layoutImagesHaveVideo?: boolean
    layoutImageHaveVideo?: {
        image0: boolean,
        image1: boolean,
        image2: boolean,
        image3: boolean
    }
    accordionSpecsTexts?: {title: string, description: string}[]
    specsTitle?: string
    specsBoldTitle?: string
    generalSpecsDescription?: string
    specsImage?: string
    specsValues?: {name: string, size: string, description?: string}[]
    faqAccordionTitle?: string
    faqAccordion?: {title: string, description: string}[]
    reviewsTitle?: { title: string, bold: string}
    product?: IProduct | null
    relatedProducts?: IProduct[] | null
    defaultProducts?: string[] | null
    tranferDiscount?: string
    priceEDE?: number | null
    textImages?: {
        firstText?: string
        secondText?: string
    }
    benefitsProduct?: {
        imagen: string;
        texto: string
    }[]
    capasInfo?: {
        title: string,
        image: string | null,
        description: string
    }[],
    estructuraInfo?: {
        title: string,
        description: string
    }[],
    estructuraImagen?: string
    titleAndVideo?: {
        title: string,
        video: string
    },
    atcImage?:string
    headPills?:string
    SecondheadPills?:string
}