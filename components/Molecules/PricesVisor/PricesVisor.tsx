import { formatNumber } from "@/utils/formatPrices"
import { Container, ContainerPrices, WrapperPrices, DivPillDiscount } from "./styled"
import { IProps } from "./types"
import Text from "@/components/Atoms/Typography/Text"
import Margin from "@/components/Atoms/Spacing/Margin/Margin"
import { useState, useEffect } from 'react';
import Pills from "@/components/Atoms/Pills/Pills"

const PricesVisor = ({ 
  publishedPrice,
  regularPrice, 
  nrFees, 
  isFeria ,
  category, 
  tranferDiscount,
  pillIdSpecialOffer
}: IProps) => {
  const [price, setPrice] = useState<number>(0);
  const fee = Math.floor(publishedPrice / nrFees)
  const percentageDiscount = 20;
  const discountForCoupon = true;
  useEffect(() => {
    if (publishedPrice == regularPrice && discountForCoupon) {
        let resultado = publishedPrice - (publishedPrice * (percentageDiscount / 100));
        let redondeado = Math.round(resultado / 50) * 50;
        setPrice(redondeado);
    } else {
        setPrice(publishedPrice);
    }
  }, [publishedPrice]);

  return (
    <>
    {
      price !== 0 &&
      <Container>
        <ContainerPrices>
          <WrapperPrices>
            <Text
              fontSize="2.1rem"
              color="carbon"
              textTag="span"
              font="medium"
              responsiveMobile={{
                fontSize:"1.8rem"
              }}
              >
              ${isFeria ? formatNumber(publishedPrice) : formatNumber(price)}
            </Text>

          {
            ((publishedPrice < regularPrice) || (publishedPrice == regularPrice && discountForCoupon) || isFeria) &&
              <Text
              fontSize="1.5rem"
              color="millionGray"
              textDecoration="line-through"
              textTag="span"
              responsiveMobile={{
                fontSize:"1.1rem"
              }}
              >
            ${formatNumber(regularPrice)}
            </Text>
          }
          </WrapperPrices>

          {nrFees != 1 && (
            <>
            <Margin margin=" 4px 0 0 0 "/>
            <Text
                textTag="span"
                font="medium"
                fontSize="1.2rem"
                color="parkPicnic"
                responsiveMobile={{
                  fontSize:"1rem"
                }}
                >
                en{" "} {nrFees} x ${formatNumber(fee)} sin interés
              </Text>
            </>

          )}
          </ContainerPrices>


          <DivPillDiscount>
            {category && (
              <>
                <Pills
                  categoryPill={category}
                  isFeatureProduct
                  isOfferProduct
                  notAbsolute
                  isCategoriesSection
                />
                {
                  tranferDiscount &&
                  <Pills
                  isOfferProduct
                  notAbsolute
                  isCategoriesSection
                  categoryPill={tranferDiscount}
                  />
                }
              </>
            )}
            {
              category == "feria" && 
                <Pills
                  isCategoriesSection
                  backgroundColor="wildViolet"
                  color="white"
                >
                  50% OFF
                </Pills>
            }
          </DivPillDiscount>
          {category !== "feria" && pillIdSpecialOffer && (
            <Pills categoryPill={pillIdSpecialOffer} isFeatureProduct />
          )}
      </Container>
    }
    </>

  )
}

export default PricesVisor
