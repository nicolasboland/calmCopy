import { IProduct } from "@/state/products/types";
import {
  DivUnit,
  DivPrice,
  Prices,
  DescriptionContainer
} from "./styled";
import { productURLRedirectionById } from "@/utils/productURLById";
import Pills from "../../Atoms/Pills/Pills"
import { formatNumber } from "@/utils/formatPrices";
import Images from "@/components/Atoms/Images/Images";
import Titles from "@/components/Atoms/Typography/Titles";
import Text from "@/components/Atoms/Typography/Text";
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import Button from "@/components/Atoms/Buttons/Button";
import NuggetReview from "@/components/Molecules/Reviews/NuggetReviews/NuggetReview"
import parse from 'html-react-parser';
import { useWidth } from "@/hooks/useWidth";

const CategoryCard = ({ item, installments, isComparition }: { item: IProduct, installments: number, isComparition?: boolean }) => {
  const cuotasPrice = Math.ceil((item.price) / installments)
  const width = useWidth();
  const breakpoint = 768
   /*  height="187px" */
  return (
    <DivUnit $isComparition={isComparition}>
      <Text textTag="a" link={productURLRedirectionById(item.id_prod ? item.id_prod : item.id_parent)} isNextLink>
        {item.discount && <Pills isRelatedProducts isOfferProduct categoryPill={item.category} fromCart={width < breakpoint }/>}

        <Images
          src={item.image.replace("/thumbnail", "/fit=cover")}
          alt={item.name}
          borderRadius="10px"
        />
      </Text>
      <Margin margin="2px"/>

      <DescriptionContainer $landing={
        (item.name === "Colchón bb" || item.name === "Colchón para perros") ?
        "perro y bebe"
        : item.name === "Protector de Colchón"
        ? "accesorios"
        : item.category}>
        <Titles
          titleTag="h4"
          font="bold"
          fontSize={isComparition ? "1.8rem" : "1.3em"}
          color="offBlack"
          align="left"
          letterSpacing="-0.54px"
          lineHeight="1"
          responsiveMobile={{
            fontSize:isComparition ? "1.2rem" : "1.2em"
          }}
        >
          {item.name}
        </Titles>

        {
          (item.sku !== "" && isComparition) && <NuggetReview skus={item.sku}/>
        }

        <Margin margin="2px"/>
  
        {
          item.short_description &&
            <Text
            font="medium"
            fontSize="1rem"
            color="brilliantLiquorice"
            responsiveMobile={{
              fontSize:".8em"
            }}
            >
              {parse(item.short_description)}
            </Text>
        }
      </DescriptionContainer>

      <Margin margin="3px" marginMobile="1px"/>
   
      <>
        {(
          item.price == 0 || item.regular_price == item.price) ? (
          <div>
            <Text
              color="offBlack"
              font="medium"
              fontSize="1.1em"
              align="left"
              responsiveMobile={{
                  fontSize:"1.4em"
              }}>
                ${formatNumber(item.regular_price)}
            </Text>
          </div>
        ) : (
        <DivPrice>
          {
            !isComparition &&
            <div>
              <Text
                color="millionGray"
                font="medium"
                fontSize="1.1em"
                align="left"
                responsiveMobile={{
                    fontSize:"1.1em"
                }}>
                  Desde 
              </Text>
            </div>
          }

          <Prices>
            <Text
              color="offBlack"
              font="bold"
              fontSize={isComparition ? "1.5rem" : "1.1em"}
              align="left"
              responsiveMobile={{
                  fontSize:isComparition ? "1.1rem" : "1.2em"
            }}>
                ${formatNumber(item.price)}
            </Text> 

            <Margin margin="1px"/>

            <Text
              color="millionGray"
              font="medium"
              fontSize={isComparition ? "1.1rem" : "0.9em"}
              align="left"
              textDecoration="line-through"
              responsiveMobile={{
                  fontSize:isComparition ? ".9rem" : "1em"
              }}>
                ${formatNumber(item.regular_price)}
            </Text>
          </Prices>
        </DivPrice>
        )}
      </>

      {
        installments > 0 && 
        <Margin margin="3px 0 9px 0">
          <Text
          color="garnish"
          font="medium"
          fontSize={isComparition ? "1.1rem" : "1em"}
          responsiveMobile={{
            fontSize: "1em"
          }}>
            {installments} cuotas sin interés de 
            <Text 
            textTag="span" 
            font="extraBold" 
            fontSize={isComparition ? "1.2rem" : "1.1em"}
            responsiveMobile={{ 
              fontSize:"1rem"
            }}>
                ${formatNumber(cuotasPrice)}
            </Text>
          </Text>
        </Margin>
      }

      <Margin margin="7px 0 0 0">
        <Button
          backgroundColor={isComparition ? "lead" : "white"}
          font="medium"
          textColor={isComparition ? "white" : "lead"}
          textColorHover="white"
          backgroundColorHover={isComparition ? "offBlack" : "lead"}
          borderColor="lead"
          borderRadius="1000px"
          height="50px"
          width="100%"
          sizeMobile="none"
          href={productURLRedirectionById(item.id_prod)}
        >
         {isComparition ? "Comprar" : "Ver producto"}
        </Button>
      </Margin>
    </DivUnit>
  );
};

export default CategoryCard;
