import { theme } from "@/utils/Theme";

type ThemeColors = keyof typeof theme.colors;
type Fonts = keyof typeof theme.fonts;

type responsiveMobile = {
  align?: string;
  fontSize?: string;
}

export interface HeaderSectionProps {
    backgroundImage?: string,
    backgroundColor?: ThemeColors, 
    title: React.ReactNode,
    subtitle: React.ReactNode,
    height?: string,
    titleColor?: ThemeColors,
    titleFont?: Fonts,
    titleFontSize?: string,
    subtitleColor?: ThemeColors,
    subtitleFont?: Fonts,
    subtitleFontSize?: string,
    subtitleBold?: string,
    hasTitleShadow?: boolean
    lessMargin?: boolean
    titleLineHeight?: string
    paddingTop?: string
    subtitleLineHeight?: string
    heightMobile?: string
    fontSizeMobile?: string
}

export interface HeaderSectionStyled {
  $backgroundImage?: string,
  $backgroundColor?: ThemeColors, 
  $height?: string,
  $lessMargin?: boolean,
  $paddingTop?: string
  $heightMobile?: string
}