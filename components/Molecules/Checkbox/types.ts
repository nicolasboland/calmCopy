import { ReactNode } from "react"
import { theme } from "@/utils/Theme"

type Fonts = keyof typeof theme.fonts
type ThemeColors = keyof typeof theme.colors;

export type CheckboxProps = {
  defaultState?: boolean
  action?: () => void
  isActive?: boolean
  disabled?: boolean
  text: string
  subtext?: string
  maps?: ReactNode
  font?: Fonts
  hasImages?: boolean
  isSquare?: boolean
  color? : ThemeColors
}