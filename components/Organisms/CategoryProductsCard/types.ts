import { IProduct } from "@/state/products/types";

export interface IProps {
    title?: string
    items: IProduct[]
    subtitle?: string
    installments: number
    renders?: string[]
    isComparition?: boolean
  }

  export interface IPropsChildrens {
    modalRef?: React.RefObject<HTMLDivElement>;
    modalRefChildren?: React.RefObject<HTMLDivElement>;
    modalHandle?: () => void;
    modal?: boolean;
    setModal?: React.Dispatch<React.SetStateAction<boolean>>;
    imgUrl?: string;
    showText?: boolean;
    installments?: number;
  }