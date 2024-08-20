import { RefObject, Dispatch, SetStateAction } from "react"

export interface PopUpMobile {
    modalRef: RefObject<HTMLDivElement>
    modalRefChildren: RefObject<HTMLDivElement>
    onClose: () => void
    popupData: PopUpData
    inputError: boolean,
    email: string,
    setEmail: Dispatch<SetStateAction<string>>,
    validateEmail: () => void,
    suscribed: boolean,
}

interface PopUpData {
    buttonText: string
    countdown: string
    description:{__typename: string, html: string}
    end: string
    images:{imageSrc: string, imageSrcMobile: string}
    inputSend:{text: string, hasInput: boolean, redirect: string, placeholder: string}
    landings: string
    markedText:{__typename: string, html: string}
    start: string
    subtitle: string
    title: string
    __typename: string
}