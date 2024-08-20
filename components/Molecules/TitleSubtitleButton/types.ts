import { theme } from "@/utils/Theme";
import { ReactElement } from "react";

type ThemeColors = keyof typeof theme.colors;
type Fonts = keyof typeof theme.fonts;


type responsiveMobile = {
    align?: string;
    fontSize?: string;
  }

export type Iprops = {
    title: {
        text?: string | ReactElement
        font?: Fonts
        color?: ThemeColors
        fontSize?: string
        align?: string
        responsiveMobile?: responsiveMobile
        width?: number 
        boldTitle?: string | ReactElement;
        titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
        lineHeight?: string
        letterSpacing?: string
    };
    subtitle?: {
        text?: string | ReactElement
        textTag?: "p" | "span" | "strong" | "em" | "a" | "b"
        font?: Fonts
        color?:ThemeColors
        fontSize?:string
        textDecoration?:string
        align?:string
        width?: number
        responsiveMobile?: responsiveMobile
    };
    button?: {
        text?: string
        href?: string
        size?: "big" | "medium" | "mediumlarge" | "small" | "xsmall" | "none";
        backgroundColor?: ThemeColors;
        backgroundColorHover?: ThemeColors;
        textColor?: ThemeColors;
        textColorHover?: ThemeColors;
        borderColor?: ThemeColors;
        font?: Fonts;
        fontSize?: string;
    };
    margin?: string;
  };