export type ImageCardProps = {
  title: string
  imageSrc: string
  imageMedia: string
  categoryPill: string
  link?: string
  layout?: "FirstRow" | "SecondRow" | "FirstColumn" | "SecondColumn"
  pillLayout?: "FirstPill" | "CenterPill" | "HalfPill"
}