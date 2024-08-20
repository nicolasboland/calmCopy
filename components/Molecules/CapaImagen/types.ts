
export interface IProps {
    zIndex: number;
    image: string | null,
    index: number
    isSelected: boolean
    setSelected: (index: number) => void
}
