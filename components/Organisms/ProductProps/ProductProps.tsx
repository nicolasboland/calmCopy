import { IProps } from "./types"
import SelectorSize from "@/components/Molecules/SelectorAttributes/SelectorSize"
import SelectorHeight from "@/components/Molecules/SelectorAttributes/SelectorHeight"
import SelectorColor from "@/components/Molecules/SelectorAttributes/SelectorColor"
import { useEffect, useState } from "react"
import { IChildrenProd } from "@/state/products/types"
import { DivSizeText, DivSizeInfo } from "./styled"
import SizeInfoWindow from "../SizeInfoWindow/SizeInfoWindow"
import Text from "@/components/Atoms/Typography/Text"
import url_variations from "@/utils/url_variations"
import { childrenVariationWithoutStock, searchAttribute, atrrToRender } from "@/utils/productsFunctios"
import SelectorCombo from "@/components/Molecules/SelectorAttributes/SelectorCombo"

const ProductProps = ({
    children,
    setSelectedChild,
    stockAndPrices,
    selectedChild,
    hasRenders,
    setIsSizeChange,
    category,
    defaultProds,
    setIsColorChange,
    isCategory,
    idProd,
    onQuantityChange
}: IProps) => {
    const [tamanoState, setTamanoState] = useState("")
    const [altoState, setAltoState] = useState("")
    const [colorState, setColorState] = useState("")
    const [selectedGroup, setSelectedGroup] = useState<IChildrenProd[] | undefined>()
    const [isSizeInfoOpen, setIsSizeInfoOpen] = useState(false)
    const [sizeByURL, setSizeByURL] = useState<string | null>()
    const [heightByURL, setHeightByURL] = useState<string | null>()
    const [colorByURL, setColorByURL] = useState<string | null>()
    const [variationsByURLSelected, setVariationsByURLSelected] = useState(false)

    const BED_CLOTHES = "ropa de cama"
    const BASES = "base"
    const DEFAULT = "default"
  
    const msjVariation = {
      [BED_CLOTHES]: "elegí la medida según el tamaño de tu colchón:",
      [DEFAULT]: "Seleccioná el tamaño",
      [BASES]: "se arma en menos de 15 minutos."
    }

    let propsNames = atrrToRender(children)
  
    let arrValuesAttr = searchAttribute(children)

    const groupChildrenByAttr = () => {
        const { alto, color } = propsNames
    
        if (children) {
          const p = children?.filter((child) => {
            return (
              child.attributes[color] == colorState &&
              child.attributes[alto] == altoState
            )
          })
    
          setSelectedGroup(p)
        }
      }
    
      const findAndSetSelectedChild = (id: string) => {
        if (children) {
          const p = children.find((child) => child.id == id)
    
          if (p) {
            setSelectedChild(p)
            if (propsNames.tamano) setTamanoState(p.attributes[propsNames.tamano])
            if (propsNames.alto) setAltoState(p.attributes[propsNames.alto])
            if (propsNames.color) setColorState(p.attributes[propsNames.color])
          }
        }
      }
    
      useEffect(() => {
        groupChildrenByAttr()
    
        const { tamano, color, alto } = propsNames
    
        const p2 = children?.find((child) => {
          return (
            child.attributes[color] == colorState &&
            child.attributes[alto] == altoState &&
            child.attributes[tamano] == tamanoState
          )
        })
        if (p2) {
          setSelectedChild(p2)
        }
      }, [tamanoState, altoState, colorState, stockAndPrices, children])


      //search by url
      useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        Array.from(queryParameters.entries()).forEach(([attribute, value]) => {
          if (attribute.includes("tamano")) {
            setSizeByURL(value)
          } else if (attribute.includes("alto")) {
            setHeightByURL(value)
          } else if (attribute.includes("color")) {
            setColorByURL(value)
          }
        })
      }, [])

      const childHasParam = (
        attributeByURL: string,
        prop: string,
        child: IChildrenProd
      ) => {
        const key = attributeByURL as keyof typeof url_variations
        const validateNewURL = url_variations[key]?.includes(child.attributes[prop])
        const validateOldURL = Object.values(url_variations).find(
          (params) =>
            params.includes(attributeByURL) &&
            params.includes(child.attributes[prop])
        )
        return validateNewURL || validateOldURL
      }
    
      const findChildByURL = (
        tamano: string,
        alto: string,
        color: string,
        children?: IChildrenProd[]
      ) => {
        const child = children?.find((child) => {
          let matchesSize =
            tamano && sizeByURL && childHasParam(sizeByURL, tamano, child)
          let matchesHeight =
            alto && heightByURL && childHasParam(heightByURL, alto, child)
          let matchesColor =
            color && colorByURL && childHasParam(colorByURL, color, child)
          if (sizeByURL && heightByURL && !colorByURL) {
            return matchesSize && matchesHeight
          }
          if (sizeByURL && !heightByURL && colorByURL) {
            return matchesSize && matchesColor
          }
          if (sizeByURL && !heightByURL && !colorByURL) {
            return matchesSize
          }
        })
    
        setSelectedChild(child)
        setColorState(
          child ? child.attributes[color as keyof typeof child.attributes] : ""
        )
        setAltoState(
          child ? child.attributes[alto as keyof typeof child.attributes] : ""
        )
        setTamanoState(
          child ? child.attributes[tamano as keyof typeof child.attributes] : ""
        )
        setVariationsByURLSelected(true)
      }

      useEffect(() => {
        const { tamano, alto, color } = propsNames
        if (children && defaultProds && !sizeByURL && !heightByURL && !colorByURL) {
          const prodDef = children.find((child) => defaultProds.includes(child.sku))
          if (!prodDef /* || allChildrenWithoutStock() */) {
            setChild(children[0], color, alto, tamano)
          } else if (prodDef) {
            if (childrenVariationWithoutStock(prodDef)) {
              const childrenWithStock = children.filter(
                (c) => !childrenVariationWithoutStock(c)
              )
              const nextWithStock = childrenWithStock.reduce(
                (max, c) => (c.price > max.price ? c : max),
                childrenWithStock[0]
              )
              setChild(nextWithStock ?? children[0], color, alto, tamano)
            } else {
              setChild(prodDef, color, alto, tamano)
            }
          }
        } else if (
          !variationsByURLSelected &&
          (sizeByURL || heightByURL || colorByURL) &&
          (tamano || alto || color)
        ) {
          findChildByURL(tamano, alto, color, children)
        }
      }, [children, defaultProds, sizeByURL, heightByURL, colorByURL])
      const setChild = (
        child: IChildrenProd,
        color: string,
        alto: string,
        tamano: string
      ) => {
        setSelectedChild(child)
        setColorState(child ? child.attributes[color] : "")
        setAltoState(child ? child.attributes[alto] : "")
        setTamanoState(child ? child.attributes[tamano] : "")
      }
    return (
      <>
        {category !== 'muebles' && (
          <DivSizeText>
            <Text 
            font={isCategory ? "bold" : "medium"}
            fontSize={isCategory ? "1rem" : ".9em"}
            color="lead"
            responsiveMobile={{
              width:"auto"
            }}>
            {msjVariation[category === BED_CLOTHES ? BED_CLOTHES : DEFAULT]}
            </Text>

            <DivSizeInfo $isActive={isSizeInfoOpen}>
                <SizeInfoWindow setIsSizeInfoOpen={setIsSizeInfoOpen} />
            </DivSizeInfo>
        </DivSizeText>
        )}
        
        {
          arrValuesAttr.tamano.length > 1 && (
            <SelectorSize
            arrChildren={selectedGroup?.sort(
                (c1, c2) => c1.price - c2.price
            )}
            selected={selectedChild}
            setSelected={findAndSetSelectedChild}
            valToSearch={propsNames.tamano}
            hasRenders={hasRenders }
            setIsSizeChange={setIsSizeChange}
            landing={category}
            isCategory={isCategory}
            />
        )
        }

        {arrValuesAttr.alto.length !== 0 && (
            <SelectorHeight
            arrChildren={children}
            arrOptions={arrValuesAttr.alto}
            selectedChild={selectedChild}
            selectedProp={altoState}
            hasRenders={hasRenders}
            setSelectedProp={setAltoState}
            setIsSizeChange={setIsSizeChange}
            valToSearch={propsNames.alto}
            sizeName={propsNames.tamano}
            isCategory={isCategory}
            />
        )}

        {(idProd == '2249180' || idProd == "2249006" || idProd == "1831947" || idProd == "1855350" || idProd == "724708" || idProd == "537") &&  (

            <SelectorCombo
            hasRenders={hasRenders}
            setSelectedProp={setAltoState}
            setIsSizeChange={setIsSizeChange}
            valToSearch={propsNames.alto}
            sizeName={propsNames.tamano}
            price={selectedChild ? selectedChild.price : 0}
            onQuantityChange={onQuantityChange}
            idProd={idProd}
          />
        )} 

        {arrValuesAttr.color.length !== 0 && (
            <SelectorColor
            arrChildren={children}
            arrOptions={arrValuesAttr.color}
            selectedChild={selectedChild}
            selectedProp={colorState}
            setSelectedProp={setColorState}
            valToSearch={propsNames.color}
            sizeName={propsNames.tamano}
            setIsColorChange={setIsColorChange}
            />
        )}
      </>
    )
}

export default ProductProps;