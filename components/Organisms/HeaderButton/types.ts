import { ReactElement } from "react";

export type IProps = {
    isCompromiso?: boolean,
    isFeria?: boolean,
    isProduct?: boolean,
    image: string,
    altImage: string,
    title: string | ReactElement,
    subTitle: string,
    textButton: string,
    redirectButton: string,
  };