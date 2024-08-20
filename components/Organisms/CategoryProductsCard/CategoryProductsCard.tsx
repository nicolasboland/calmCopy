import {
  DivText,
  DivCardsContainer,
  DivCards
} from "./styled";
import CategoryCard from "@/components/Molecules/CategoryCard/CategoryCard";
import { IProps } from "./types";
import Titles from '@/components/Atoms/Typography/Titles';
import Text from '@/components/Atoms/Typography/Text';

const CategoryProductsCards = ({ title, installments, subtitle, items, isComparition }: IProps) => {
  
  return (
    <DivCards id='productos' $isComparition={isComparition}>

        {
          title &&
          <DivText>
            <Titles 
              titleTag='h1'
              color='lead'
              font='bold'
              fontSize='2em'
              lineHeight="100%"
              align='center'
              responsiveMobile={{
                fontSize:"1.8rem"
              }}
              >
                {title}
            </Titles>
            {
              subtitle &&
                <Text
                font="medium"
                align='center'
                fontSize="1.2rem"
                color="millionGray"
                >
                  {subtitle}
                </Text>
            }
          </DivText>
        }

      <DivCardsContainer $isFeria={items[0].category}>
        {items.map((item, index) => {
            let isSixCuotes = item.id_prod === "1835538" || item.id_prod === "1835498" || item.id_prod === "1851789"
          return (
          <CategoryCard key={index} item={item} installments={isSixCuotes ? 6 : installments} isComparition={isComparition}/>
        )})}
      </DivCardsContainer>

    </DivCards>
  );
};

   
export default CategoryProductsCards;