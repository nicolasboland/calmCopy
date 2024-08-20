import { PillsProps } from "./types"
import { OfferTextContainer, PillStyles } from "./styled"
import { useSelector } from "react-redux"
import { IPillData } from "./types"
import { useEffect, useState } from "react"
import { getPillsData } from "@/state/hygraph/hygraphSelector"
import Text from "@/components/Atoms/Typography/Text"
import { IPillsData } from "@/state/hygraph/types"

const Pills = ({
  children,
  textNew,
  isRelatedProducts,
  isCategoriesSection,
  isFeatureProduct,
  categoryPill,
  isOfferProduct,
  backgroundColor,
  color,
  isAbsolute,
  isTab,
  isFeria,
  notAbsolute,
  isProduct,
  fromCart,
  isCategoryComparition
}: PillsProps) => {
  const [pillData, setPillData] = useState<IPillData>()
  const pillsData = useSelector(getPillsData)
  useEffect(() => {
    if (categoryPill && pillsData) {
      let category = ""
      if (Array.isArray(categoryPill) && categoryPill.length > 0) {
        category = categoryPill[0].split(" ").join("-")
      } else {
        category = categoryPill.split(" ").join("-")
      }
      setPillData(
        (pillsData?.find((pill: IPillsData) => pill.categoria === category) ||
          undefined) as IPillData | undefined
      )
    }
  }, [pillsData])

  return (
    <>
      {isOfferProduct ? (
        <>
          {categoryPill && pillData && pillData.texto && (
            <OfferTextContainer
              style={{
                backgroundColor: isProduct ? "#202020" : pillData.colorFondo.hex
              }}
              $isRelatedProducts={isRelatedProducts}
              $isCategoriesSection={isCategoriesSection}
              $isFeatureProduct={isFeatureProduct}
              $notAbsolute={notAbsolute}
              $fromCart={fromCart}
              $isCategoryComparition={isCategoryComparition}
            >
              <Text
                color={color ? color : "white"}
                font={"medium"}
                fontSize={
                  fromCart
                  ? "0.6rem"
                  : isCategoriesSection
                  ? "0.7em"
                  : isFeatureProduct
                  ? "0.8rem"
                  : "12px"
                }
                letterSpacing="0.5px"
                responsiveMobile={{
                  fontSize:fromCart ? "0.5rem" : "0.7rem"
                }}
              >
                 {pillData.texto}
              </Text>
            </OfferTextContainer>
          )}
        </>
      ) : (
        <PillStyles
          $textNew={textNew}
          $isRelatedProducts={isRelatedProducts}
          $isCategoriesSection={isCategoriesSection}
          $isFeatureProduct={isFeatureProduct}
          $isAbsolute={isAbsolute}
          $backgroundColor={backgroundColor}
          $isTab={isTab}
        >
          <Text
            font={"medium"}
            fontSize={
              isCategoriesSection
                ? "0.7em"
                : isFeatureProduct || isFeria
                ? "0.8rem"
                : "10px"
            }
            letterSpacing="0.5px"
            color={color ? color : "white"}
            responsiveMobile={{
              fontSize: isCategoriesSection ? "0.52em" :"0.6rem"
            }}
          >
            {children}
          </Text>
        </PillStyles>
      )}
    </>
  )
}
export default Pills
