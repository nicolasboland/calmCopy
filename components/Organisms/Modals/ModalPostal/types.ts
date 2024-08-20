import { Dispatch, SetStateAction } from "react"

export interface IProps {
    stateLoading?:boolean
    addToCart?: () => void
    setShowPostal: Dispatch<SetStateAction<boolean>>
    showPostal?: boolean
}