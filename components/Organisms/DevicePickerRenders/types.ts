import { Dispatch, SetStateAction } from "react"

export interface IProps { 
    isRenderSelected: boolean
    altoState: string
    idProd?: string
    setIsRenderSelected: Dispatch<SetStateAction<boolean>>

}