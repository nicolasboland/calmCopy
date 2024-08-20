import Text from "../../Atoms/Typography/Text"
import { DivImg, DivPill, DivText, Layout } from "./styled"
import { ImageCardProps } from "./types"
import Images from "../../Atoms/Images/Images"
import Pills from "../../Atoms/Pills/Pills"

const ImageCard = ({
  categoryPill,
  title,
  imageSrc,
  imageMedia,
  link,
  layout,
  pillLayout
}: ImageCardProps) => {
  return (
    <>
      <Layout href={link} $layout={layout}>
        {categoryPill && (
          <DivPill $pillLayout={pillLayout}>
            <Pills
              isCategoriesSection
              isOfferProduct
              categoryPill={categoryPill}
            />
          </DivPill>
        )}
        <DivImg>
          <picture>
            <source
              media="(max-width:767px)"
              srcSet={imageMedia}
            />
            <source
              media="(min-width:768px)"
              srcSet={imageSrc}
            />
            <Images
              src={imageSrc}
              alt={title}
            />
          </picture>
        </DivImg>
        <DivText>
          <Text color="ZZBPearl" fontSize="1.3em" font="bold">
            {title}
          </Text>
        </DivText>
      </Layout>
    </>
  )
}

export default ImageCard
