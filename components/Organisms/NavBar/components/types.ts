import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IProps {
    openCart: () => void;
    quizzHandle: (quizzId?: string) => void;
    selectedLink: string
}

export interface IPropsMenuDkestop {
    menuData: {
        name: string;
        redirect: string;
        header: string;
        items: {
            name: string;
            pillMessage?: string;
            redirect: string;

            isYellowPill?: boolean;
            id: string;
        }[];
        seeMoreText: string;
        selectedProducts: {
            image_url: string;
            name: string;
            description?: string;
            redirect: string;
            id: string;
        }[];
        quizz?: {
            image_url: string,
            text: string,
            id: string
        }
    }[];
    selectedLink?: string;
    currentCategory: string
    setCurrentCategory: Dispatch<SetStateAction<string>>
    handleRedirect: () => void;
    quizzHandle: (quizzId?: string) => void;
    staticLandings: {
        name: string;
        redirect: string;
    }[];
    openCart?: () => void;
}