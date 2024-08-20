import { useEffect, useState } from "react";
import ProductProps from "../ProductProps/ProductProps";
import { onGetSDefaultProducts } from "@/state/products/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@/state/types";
import { getDefaultProducts } from "@/state/products/productsSelector";
import { IProps } from "@/components/Organisms/SpecsColchon/types"
import CategoryProductsCards from "@/components/Organisms/CategoryProductsCard/CategoryProductsCard"
import { IProduct } from "@/state/products/types";
import SkeletonLoader from "@/components/Atoms/SkeletonLoader/SkeletonLoader"
import { IChildrenProd } from "@/state/products/types"
import OverlayCategory from "../OverlayCategory/OverlayCategory";
import renders from "@/utils/categoryRenders.json"
import { getCategoryColchonRequests } from "@/utils/CategoryColchonRequests"

const MainBlockCategory = ({category}: IProps) => {
    const dispatch = useDispatch();
    const defaultStoreProducts = useSelector((state: IStore) => getDefaultProducts(state));
    const [render, setRender] = useState<boolean>(false)
    const [fetchData, setfetchData] = useState<IProduct[]>()
    const [comparitionProducts, setComparitionProducts] = useState<IProduct[]>()
    const [isSizechange, setIsSizeChange] = useState(false)
    const [selectedChild, setSelectedChild] = useState<IChildrenProd>()
    
    useEffect(() => {
        dispatch(onGetSDefaultProducts());
    }, [])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getCategoryColchonRequests();
          setfetchData(result);
          setSelectedChild(result && result[0].children[0])
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);

    useEffect(() => {
      if (fetchData && selectedChild && renders) {
        const filteredChildren: IProduct[] = fetchData.flatMap(item =>
          item.children
            .filter(child => {
              const isSelectedPlus = selectedChild.attributes.pa_alto.includes("plus");
              const isChildPlus = child.attributes.pa_alto.includes("plus");
        
              return (
                isSelectedPlus === isChildPlus &&
                child.attributes.pa_tamano === selectedChild.attributes.pa_tamano
              );
            })
            .map(child => ({
              ...child,
              short_description: item.short_description,
              image: renders[child.id as keyof typeof renders] ,
              name: item.name,
              id_prod: item.id,
              id_parent: item.id,
              name_parent: item.name_parent,
              category: item.category,
              type: item.type,
              image_url: item.image_url,
              children: item.children,
              gallery_image_url: item.gallery_image_url,
              discount: item.discount ,
              discount_pill: item.discount_pill,
              installments: item.installments,
              offer: item.offer,
            }))
        );
        setComparitionProducts(filteredChildren)
        setRender(true)
      }
    }, [fetchData, selectedChild])

    return (
        <>
        {
          render && fetchData ? (
            <>
              <ProductProps
              children={fetchData[0].children}
              selectedChild={selectedChild}
              setSelectedChild={setSelectedChild}
              setIsSizeChange={setIsSizeChange}
              defaultProds={defaultStoreProducts}
              isCategory
              /* hasRenders={renders ? true : false} */
              />

              {
                comparitionProducts &&
                <CategoryProductsCards
                  items={comparitionProducts}
                  installments={category.installments}
                  isComparition
                />
              }
              {
                comparitionProducts &&
                <OverlayCategory
                  items={comparitionProducts}
                />
              }
            </>
          ) : (
          <>
            <SkeletonLoader  width="100%" height="240px" borderRadius="10px"/>
            <SkeletonLoader  width="100%" height="440px" borderRadius="10px"/>
          </>
          )
        }

        </>
    )
}

export default MainBlockCategory;