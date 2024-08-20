import { BannerContainer } from "./styled"
import { InfoBackColorProps } from "./types"

const InfoBackColor = ({ children, backgroundColor }: InfoBackColorProps) => {
  return (
    <BannerContainer $backgroundColor={backgroundColor}>
      {children}
    </BannerContainer>
  )
}

export default InfoBackColor
