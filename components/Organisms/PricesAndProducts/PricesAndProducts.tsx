import { useState, useEffect } from "react";
import {
  DivColchon,
  DivCalm,
  DivEmpty,
  DivTitle,
  DivContent,
  DivPrice,
  Price,
  PriceLine,
  DivText,
  DivButton,
  DivButtonInfoExtra,
  ListInfoExtra,
} from "./styled";
import ExtraInfoHome from "../../Molecules/ExtraInfoHome/ExtraInfoHome";
import { useWidth } from "@/hooks/useWidth";
import { deviceSizes } from "@/utils/Theme";
import { IChildrenProd, IProduct } from "@/state/products/types";
import { formatNumber } from "@/utils/formatPrices";
import { productURLRedirectionById } from "@/utils/productURLById";
import { theme } from "@/utils/Theme";

import Pills from "@/components/Atoms/Pills/Pills";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Button from "@/components/Atoms/Buttons/Button";
import Images from "@/components/Atoms/Images/Images";
import Icons from "@/components/Atoms/Icons/Icons";
import { ExtraInfoSVG } from "@/utils/Icons";


const PricesAndProducts = ({colchon}: {colchon?: IProduct}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [product, setProduct] = useState<IProduct | undefined>();
  const [lowestChild, setLowestChild] = useState<IChildrenProd | undefined>();
  const width = useWidth();

  const mobileView =
    width > deviceSizes.biggerMobile
      ? {
          iconColor: theme.colors.white,
          iconSize: { width: "35", height: "26" },
        }
      : {
          iconColor: theme.colors.offBlack,
          iconSize: { width: "20", height: "20" },
        };

  useEffect(() => {
    if(colchon) {
      setProduct(colchon)
    }
  }, [colchon]);

  useEffect(() => {
    setLowestChild(product?.children.find(child => child.price == product.price))
  }, [product]);

  return (
    <DivColchon>
      <DivCalm>
        <DivContent>
          <DivText>
            {product?.discount_pill && 
            (
              <>
                <Pills isOfferProduct categoryPill={'colchones'}/>
              </>
            )
          }
            <DivTitle>
            <Titles
              titleTag="h3"
              font="light"
              fontSize="2.8vw"
              color="white"
              responsiveMobile={
                {fontSize:"1.5em", color:"offBlack"}}
              >
              {product?.name.split(" ")[0]}
              </Titles>
              &nbsp;
              <Titles
              titleTag="h3"
              font="extraBold"
              fontSize="2.8vw"
              color="white"
              responsiveMobile={
                {fontSize:"1.5em", 
                color:"offBlack"
                }}>{product?.name.split(" ")[1]}
            </Titles></DivTitle>
            <>
              { width > deviceSizes.mobile && 
              <Text 
              color="white"
              font="medium"
              fontSize="1.3vw"
              align="left"
              responsiveMobile={
                {fontSize:"1.2em", 
                color:"offBlack"
                }}
              >desde:</Text>}
                
                <DivPrice >
                  {
                    width <= deviceSizes.mobile &&
                      <Text 
                      color="white"
                      font="medium"
                      fontSize="1.3vw"
                      align="left"
                      responsiveMobile={
                        {fontSize:"1.2em", 
                        color:"offBlack"
                        }}
                      >
                        desde:
                      </Text>
                  }
              {product?.price && 
              <Price>
                {width <= deviceSizes.mobile &&
                <Text
                textTag="span"
                color="white"
                font="extraBold"
                fontSize="1.9vw"
                responsiveMobile={
                  {fontSize:"1.3em", 
                  color:"offBlack"
                  }}>${formatNumber(product.price)}</Text>
                }
              { width > deviceSizes.mobile &&  <Text
                color="white"
                font="extraBold"
                fontSize="1.9vw"
                responsiveMobile={
                  {fontSize:"1.3em", 
                  color:"offBlack"
                  }}>${formatNumber(product.price)}</Text>}</Price>}

              {lowestChild && product 
              && product.price != lowestChild.regular_price && 
              <PriceLine><Text
                textTag="span"
                color="millionGray"
                textDecoration="line-through"
                font="bold"
                fontSize="2vw"
                responsiveMobile={
                  {fontSize:"1.3em", 
                  }}>${formatNumber(lowestChild.regular_price)}</Text></PriceLine>}
              <Icons 
              onClick={() => setShowInfo((prev) => !prev)}>
                {ExtraInfoSVG(showInfo, mobileView)}
                </Icons>
              </DivPrice>
            </>
            {showInfo ? (
              <DivButtonInfoExtra>
                <ListInfoExtra>
                  {product &&
                    product.children
                      .filter(
                        (item) => item.attributes["pa_alto"] == "original"
                      )
                      .sort((a, b) => a.price - b.price)
                      .map((item) => (
                        <ExtraInfoHome
                          key={item.id}
                          sizesText={item.name.split(" - ")[1].split(",")[0]}
                          sizesPrice={formatNumber(item.price)}
                          sizeLinePrice={formatNumber(item.regular_price)}
                          sizelink={productURLRedirectionById(item.id)}
                        />
                      ))
                  }
                </ListInfoExtra>
              </DivButtonInfoExtra>
            ) : (
              <>
                {product && (
                  <Text  
                  color="white"
                  font="regular"
                  fontSize="0.9vw"
                  responsiveMobile={
                    {fontSize:"0.8em",
                    color:"millionGray", 
                    }}>
                    {product.installments} cuotas de: $
                    {formatNumber(
                      Math.ceil(product.price / product.installments)
                    )}
                  </Text>
                )}
              </>
            )}
          </DivText>
          {width <= 768 && <Images src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/5757230f-c12f-4134-5be6-fe0fcdeb5e00/fit=cover" alt="colchon calm"/>}
          <DivButton>
          {width <= 768 ? (
            <Button 
            href="https://calmessimple.com.ar/producto/colchon-calm/"
            backgroundColor="auberginePearl"
            children="¡Lo quiero!"
            size="medium"
            textColor="white"
            borderRadius="8px"
            fontSize="1em"
            font="extraBold"
            />
          ):(
            <Button 
            href="https://calmessimple.com.ar/producto/colchon-calm/"
            backgroundColor="white"
            children="¡Lo quiero!"
            size="medium"
            textColor="yellowCalm"
            borderRadius="8px"
            backgroundColorHover="auberginePearl"
            textColorHover="white"
            fontSize="1em"
            font="extraBold"
            />)}
          </DivButton>
        </DivContent>
      </DivCalm>
      <DivEmpty></DivEmpty>
    </DivColchon>
  );
};

export default PricesAndProducts;
