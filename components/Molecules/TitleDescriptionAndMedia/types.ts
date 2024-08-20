export interface IProps{
    imageRight?: {
        src: string;
        alt: string;
    }
    image?:{
        src: string;
        alt: string;
    }
    text:{
        text: React.ReactNode;
        title?: React.ReactNode;
        boldTitle?: string;
    }
    video?:{
        src: string;
        title: string;
        allow: string;
    }
    button?: {
        text: string;
        href: string;
    }
    videoLeft?:{
        src: string;
        title: string;
        allow: string;
    }
    maxWidth?: string;
    isCombo?: boolean;
}