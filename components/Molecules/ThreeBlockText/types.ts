import { theme } from "@/utils/Theme"

type ThemeColors = keyof typeof theme.colors
type Fonts = keyof typeof theme.fonts

export interface IProps {
   title?: {
    hasTitle: boolean;
    color: ThemeColors;
    font: Fonts;
    fontSize: string;
    boldTitle: string;
    title: string;
    responsiveFontSize?: string;
   };
   info: {
    title: string;
    description: string;
   }[];
   hasAccordion?: boolean;
   isHome?: boolean;
   isOrange?: boolean;
}