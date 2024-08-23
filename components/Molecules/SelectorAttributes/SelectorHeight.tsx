import variations_products from "@/utils/variations_products"
import { HeightContainer, SelectHeight } from "./styled"
import { IProps, SearchResult } from "./types"
import { useEffect, useState } from "react"
import Button from "@/components/Atoms/Buttons/Button"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader"

const heightCm = {
  "original-plus": "28 cm",
  original: "22 cm",
  "hibrido-22cm-de-alto": "22 cm",
  "hibrido-plus-28cm-de-alto": "28 cm"
}

const SelectorHeight = ({
  arrChildren,
  arrOptions,
  selectedChild,
  selectedProp,
  setSelectedProp,
  valToSearch,
  sizeName,
  setIsSizeChange,
  hasRenders,
  isCategory
}: IProps) => {
  const [childrenByHeight, setChildrenByHeight] = useState<SearchResult | undefined>()

  useEffect(() => {
    if (arrChildren) {
      setChildrenByHeight(searchSelectedHeight())
    }
  }, [selectedChild])

  const searchSelectedHeight = () => {
    let p: SearchResult = {}

    arrChildren?.forEach((child) => {
      if (child.attributes[sizeName] == selectedChild?.attributes[sizeName]) {
        p[child.attributes[valToSearch as keyof typeof child.attributes]] = {
          stock: child.stock,
          backorder: child.backorder
        }
      }
    })
    return p
  }

  return (
    <HeightContainer>
      {
        childrenByHeight ?
        <>
          <Margin margin="5px 0" marginMobile="2px"/>

          <Text 
          font={isCategory ? "bold" : "medium"}
          fontSize={isCategory ? "1rem" : ".9em"}
          >
            Seleccioná la altura
          </Text>

          <Margin margin="5px 0" marginMobile="4px"/>

          <SelectHeight>
            {childrenByHeight && Object.keys(childrenByHeight).length > 0 &&
              arrOptions?.map((height: string) => (
                <Button
                  key={height}
                  disabled={
                    !(
                      childrenByHeight[height as keyof typeof childrenByHeight][
                        "stock"
                      ] > 0 ||
                      childrenByHeight[height as keyof typeof childrenByHeight][
                        "backorder"
                      ]
                    )
                  }
                  onChange={() => setSelectedProp && setSelectedProp(height)}
                  onClick={() => {
                    setSelectedProp && setSelectedProp(height);
                    setIsSizeChange && hasRenders && setIsSizeChange(true)
                  }}
                  className={
                    selectedProp === height &&
                    (childrenByHeight[height as keyof typeof childrenByHeight][
                      "stock"
                    ] > 0 ||
                      childrenByHeight[height as keyof typeof childrenByHeight][
                        "backorder"
                      ])
                      ? "selected"
                      : "notSelected"
                  }
                >
                  {
                    !isCategory &&
                    <Text 
                      color="offBlack" 
                      font="medium" 
                      fontSize="1rem" 
                      align="left" 
                      responsiveMobile={{
                        width:"auto",
                        fontSize:"0.85rem"
                        }}>
                        {
                          variations_products[
                            height as keyof typeof variations_products
                          ]
                        }
                    </Text>
                  }

                  <Text 
                  color={isCategory ? "offBlack" : "millionGray"} 
                  font={isCategory ? "bold" : "medium"}
                  align="left" 
                  responsiveMobile={{
                    width:"auto",
                    fontSize:"0.85rem"
                    }}>
                    {heightCm[height as keyof typeof heightCm]} de altura
                  </Text>
                </Button>
              ))}
          </SelectHeight>
          </>
          : <SkeletonLoader  width="100%" height="110px"/>
      }
    </HeightContainer>
  )
}

export default SelectorHeight
