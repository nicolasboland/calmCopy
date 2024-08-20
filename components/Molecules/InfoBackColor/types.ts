import { ReactNode } from "react"
import { theme } from "@/utils/Theme";

type ThemeColors = keyof typeof theme.colors;

export type InfoBackColorProps = {
  children: ReactNode
  backgroundColor: ThemeColors
}

export type InfoBackColorStyled = {
  $backgroundColor: ThemeColors
}
