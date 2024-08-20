export type IProps = {
    product: string;
    description: string;
    info: InfoItem[]
  };


export interface IconFunctions {
    [key: string]: () => JSX.Element;
}

interface InfoItem {
    imagen: keyof IconFunctions;
    texto: string;
}