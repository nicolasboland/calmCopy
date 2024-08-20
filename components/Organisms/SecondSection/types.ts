export interface IProps {
    skus?: string;
    layoutImages?: string[];
    layoutImagesHaveVideo?: boolean;
    layoutImageHaveVideo?: {
        image0: boolean,
        image1: boolean,
        image2: boolean,
        image3: boolean
    }
    accordionSpecsTexts?: {title: string, description: string}[]
    product: string
    productId: string
    description: string
    benefitsProduct?: {
        imagen: string;
        texto: string
    }[]
    textImages?: {
        firstText?: string
        secondText?: string
    }
}