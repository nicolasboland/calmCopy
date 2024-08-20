import { theme } from "@/utils/Theme"

type ThemeColors = keyof typeof theme.colors

export interface IProps {
  title: string;
  boldTitle?: string;
  items: IAccordionItem[];
  firstBoxIsActive?: boolean
  isOrange?: boolean
  isProductSS?: boolean
  color?: ThemeColors
  noBackgroundColor?: boolean
}
export interface IAccordionItem {
  title: string
  description: string
  is30night?: boolean
}
