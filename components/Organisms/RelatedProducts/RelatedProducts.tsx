import { productURLRedirectionById } from "@/utils/productURLById"
import {
  DivRest,
  DivRestMobile,
  DivAlwaysScroll,
  DivScroll,
  DivTitle,
  DivCategoriesMobile,
  DivCategories,
  DivTitleAndCards
} from "./styled"
import { RelatedProductsProps } from "./types"
import { useWidth } from "@/hooks/useWidth"
import { deviceSizes } from "@/utils/Theme"
import RelatedCard from "@/components/Molecules/RelatedCard/RelatedCard"
import Text from "@/components/Atoms/Typography/Text"
import Titles from "@/components/Atoms/Typography/Titles"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { useEffect, useState } from "react"
import { preloadImages } from "@/utils/preloadImage"
import { SkeletonLoader } from "@/components/Molecules/SkeletonLoader/SkeletonLoader"

const RelatedProducts = ({
  relatedItems,
  title = "",
  boldTitle = "",
  isYellowTitle,
  isMobile,
  fromCart,
  fromProduct
}: RelatedProductsProps) => {
  const [isImagesLoaded, setIsImagesLoaded] = useState<boolean>(false)

  useEffect(() => {
    if (relatedItems) {
        let images: string[] = []
        relatedItems.forEach(product => {
            images.push(product.image)
        });
        preloadImages(images).then(() => {
        setIsImagesLoaded(true)
        });
    }
  }, [relatedItems])


  const width = useWidth()
  const isSM = isMobile ? true : width < deviceSizes.biggerMobile
  return (
    <>
      {isSM ? (
        <DivRestMobile>
          {title !== "" && (
            <DivTitle>
              <Margin margin="0 0 0 0.4rem" />
              <Titles
                titleTag="h4"
                fontSize="1.5em"
                font="bold"
                align="left"
                color={isYellowTitle ? "yellowCalm" : "offBlack"}
              >
                {title}
              </Titles>
              <Margin margin="0.1em" />
              {boldTitle && (
                <Text
                  fontSize="1.5em"
                  font="extraBold"
                  align="center"
                  color={isYellowTitle ? "yellowCalm" : "offBlack"}
                >
                  {boldTitle}
                </Text>
              )}
            </DivTitle>
          )}

          <DivAlwaysScroll>
            <DivCategoriesMobile $fromCart={fromCart}>
              {relatedItems && isImagesLoaded ?
                relatedItems.map((Item) => (
                  <RelatedCard
                    key={Item.name}
                    id_item={Item.id_prod}
                    fromCart={fromCart}
                    img={Item.image}
                    name={fromCart ? Item.name_parent : Item.name}
                    price={Item.price ? Item.price : 0}
                    regular_price={Item.regular_price ? Item.regular_price : 0}
                    variations={Item.attributes}
                    link={productURLRedirectionById(
                      fromCart ? Item.id_parent : Item.id_prod
                    )}
                    category={Item.category}
                  />
                  )) : <>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px"/>
                    </Margin>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px"/>
                    </Margin>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px"/>
                    </Margin>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px"/>
                    </Margin>
                  </>
                }
            </DivCategoriesMobile>
          </DivAlwaysScroll>
        </DivRestMobile>
      ) : (
        <DivRest $fromProduct={fromProduct}>
          <DivTitleAndCards>
            <DivTitle>
              <Margin margin="0 0 0 0.4rem" />
              <Text
                fontSize="1.7em"
                font="bold"
                align="left"
                color={isYellowTitle ? "yellowCalm" : "offBlack"}
              >
                {title}
              </Text>
              <Margin margin="0.1em" />
              {boldTitle && (
                <Text
                  fontSize="1.7em"
                  font="extraBold"
                  align="left"
                  color={isYellowTitle ? "yellowCalm" : "offBlack"}
                >
                  {boldTitle}
                </Text>
              )}
            </DivTitle>
            <DivScroll>
              <DivCategories>
                {relatedItems && isImagesLoaded ? 
                  relatedItems.map((Item) => (
                    <RelatedCard
                      key={Item.name}
                      fromCart={fromCart}
                      img={Item.image}
                      name={Item.name}
                      price={Item.price ? Item.price : 0}
                      regular_price={
                        Item.regular_price ? Item.regular_price : 0
                      }
                      variations={Item.attributes}
                      link={productURLRedirectionById(Item.id_prod)}
                      category={Item.category}
                    />
                  ))
                : <>
                 <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px" responsiveMobile={{ height:"600px"}}/>
                    </Margin>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px" responsiveMobile={{ height:"600px"}}/>
                    </Margin>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px" responsiveMobile={{ height:"600px"}}/>
                    </Margin>
                    <Margin margin="0.4rem">
                        <SkeletonLoader  width="270px" height="250px" borderRadius="10px" responsiveMobile={{ height:"600px"}}/>
                    </Margin> 
                </>
                }
              </DivCategories>
            </DivScroll>
          </DivTitleAndCards>
        </DivRest>
      )}
    </>
  )
}

export default RelatedProducts
