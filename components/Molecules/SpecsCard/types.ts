import { theme } from "@/utils/Theme";

export type Iprops = {
    title:{
        text?: string
        subtext?: string
    };
    image: {
        src: string;
        alt: string;
    };
    subtitle: Array<{
        text?: string
        subtext?: string
    }>
    button:{
        href?: string
    };
    isSelected: boolean
  };