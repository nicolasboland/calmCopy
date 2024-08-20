import { ContainerContact, ContainerBoxContact } from "./styled"
import Images from "@/components/Atoms/Images/Images"
import Button from "@/components/Atoms/Buttons/Button"
import Text from "@/components/Atoms/Typography/Text"
import { IProps } from "./types"

function LinksContact({ subtitle, image }: IProps) {
  return (
    <ContainerContact>
      <ContainerBoxContact>
        <Images src={image.src} alt={image.alt} width="50px" height="50px" />
        <Button href={image.href}>
          <Text font="regular" color="millionGray" fontSize="1.2rem">
            {subtitle && subtitle.text}
          </Text>
          <Text font="regular" color="millionGray" fontSize="1.2rem">
            {subtitle && subtitle.subtext}
          </Text>
        </Button>
      </ContainerBoxContact>
      <ContainerBoxContact>
        <Images src={image.src1} alt={image.alt1} width="50px" height="50px" />
        <Button href={image.href1}>
          <Text font="regular" color="millionGray" fontSize="1.2rem">
            {subtitle && subtitle.text1}{" "}
          </Text>
          <Text font="regular" color="millionGray" fontSize="1.2rem">
            {subtitle && subtitle.subtext1}
          </Text>
        </Button>
      </ContainerBoxContact>
    </ContainerContact>
  )
}

export default LinksContact
