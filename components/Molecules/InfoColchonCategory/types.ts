export interface IProps {
    title: string
    isCirculacion?: boolean
    mobileLeftText?: boolean
    originalInfo: {
        icon: string,
        text: string
    }
    hibridoInfo: {
        icon: string,
        text: string
    }
}

export interface IconFunctions {
    [key: string]: () => JSX.Element;
}