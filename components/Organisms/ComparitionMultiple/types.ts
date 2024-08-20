import { IComparitionCard } from "@/components/Molecules/ComparacionCard/types"

export interface IProps {
    info: {
        title: string,
        description: string,
        quizzLink: string, 
        cards: {
                title: string,
                img: string,
                textButton?: string,
                id: string,
                firmeza?: number,
                Respirabilidad?: number,
                description?: string
                specs: {
                        icon: string,
                        text: string
                    }[]
            }[]
    }
    productId?: string
  }

