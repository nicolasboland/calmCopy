import { Dispatch, SetStateAction } from "react"
import { IChildrenProd } from "@/state/products/types"

export interface IProps {
  children?: React.ReactChild[]
  carrouselProps?: {
    showArrows?: boolean
    showStatus?: boolean
    showThumbs?: boolean
    infiniteLoop?: boolean
    autoPlay?: boolean
    stopOnHover?: boolean
  }
  galleryCarrousel?: {
    images: string[]
    category: string
  }
  isSizechange?: boolean
  isRenderSelected?: boolean
  color?: string
  isColorchange?: boolean
  hasRenders?: boolean
  renders?: {[key: string]: string }
  setIsSizeChange?: Dispatch<SetStateAction<boolean>>
  selectedChild?: IChildrenProd | undefined
  quantity?:number
  fatherLoader?: Dispatch<SetStateAction<boolean>>
}

export interface IPropsChildrens {
  modalRef?: React.RefObject<HTMLDivElement>
  isRenderSelected?: boolean
  isManuallyChange?: boolean
  isColorchange?: boolean
  hasRenders?: boolean
  color?: string
  carouselKey?: number
  modalRefChildren?: React.RefObject<HTMLDivElement>
  setModal?: React.Dispatch<React.SetStateAction<boolean>>
  imgUrl?: string
  setImgUrl: React.Dispatch<React.SetStateAction<string>>
  galleryImages: string[]
  gelleryCategory: string
  isSizechange?: boolean
  renderThumbs: any
  sliderArrow: (
    clickHandler: () => void,
    isNext?: boolean
  ) => React.JSX.Element
  renderIndicator: (
    clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
    isSelected: boolean,
    index: number,
    label: string
  ) => React.ReactNode
}
