import { Dispatch, SetStateAction } from "react"

export interface IProps {
    alertMessage: string
    showTitle?: boolean
    showButton?: boolean
    buttonAction?: () => void
    stateLoading?: boolean
    edeLanding?: boolean,
    isFeria?: boolean
    setFeriaATCEnabled?: Dispatch<SetStateAction<boolean>>
  }