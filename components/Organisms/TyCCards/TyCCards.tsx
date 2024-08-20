import { CardsPromotionContainer } from "./styled"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onGetTyCPromotionData } from "@/state/hygraph/hygraphActions";
import { getTYCPromotionData } from "@/state/hygraph/hygraphSelector";
import TyCCard from "@/components/Molecules/TyCCard/TyCCard";

export const TyCCards = () => {
    const dispatch = useDispatch()
    const tyCPromotionData = useSelector(getTYCPromotionData)
  
    useEffect(() => {
      dispatch(onGetTyCPromotionData())
    }, [])

    return (
        <CardsPromotionContainer>
          {tyCPromotionData && (
              tyCPromotionData.promo.map((item, index) => {
                return (
                    <TyCCard
                    key={index}
                    text={item.html}
                    />
                );  
              })
            )
          } 
        </CardsPromotionContainer>
    )
}