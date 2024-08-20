export interface IProps {
    arrCapas: string[]
    specs: {
        text: string
        icon: string
    }[]
    isOriginal?: boolean
}

export interface IconFunctions {
    [key: string]: () => JSX.Element;
}