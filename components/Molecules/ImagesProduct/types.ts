import { theme } from "@/utils/Theme";

type ThemeColors = keyof typeof theme.colors;
type Fonts = keyof typeof theme.fonts;

export type Iprops = {
    images: string[], 
    layoutImagesHaveVideo?: boolean, 
    layoutImageHaveVideo?: {
      image0: boolean,
      image1: boolean,
      image2: boolean,
      image3: boolean
  }
    textImages?: {
      firstText?: string
      secondText?: string
  }
  };