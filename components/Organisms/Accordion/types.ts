import { IStyledComponent } from "styled-components"

export interface IProps {
    items?: IAccordionItem[]
    firstBoxIsActive?: boolean
    isOrange?: boolean
    isProductSS?: boolean
    hasBorder?: boolean
    setSelected?: (index: number) => void
    isFromCapas?: boolean
    indexActive?: number
}

export interface IAccordionItem {
    title: string
    description: string
    is30night?:boolean
}
