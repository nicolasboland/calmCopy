import { theme } from "@/utils/Theme";

type ThemeColors = keyof typeof theme.colors;
type Fonts = keyof typeof theme.fonts;

export type Iprops = {
    linkImg: string
    method: string
    description: string
  };