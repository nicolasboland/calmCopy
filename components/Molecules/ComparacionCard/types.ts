
export interface IComparitionCard {
    title: string,
    img: string,
    id: string,
    firmeza?: number,
    textButton?: string,
    description?: string
    Respirabilidad?: number,
        specs: {
            icon: string,
            text: string
        }[],
    isSelected: boolean,
    isFourItems?: boolean
  }

export interface IconFunctions {
    [key: string]: () => JSX.Element;
}
