import type {} from 'redux-thunk/extend-redux';
import { ImagesProduct } from '@/components/Molecules/ImagesProduct/ImagesProduct';
import {SeparatedReview } from '@/components/Molecules/Reviews/SeparatedReview/SeparatedReview'
import { 
    ColumnWrapper,
    DescriptionColumn,
    Wrapper,
    LandingContent
} from './styled';
import Accordion from "@/components/Organisms/Accordion/Accordion"
import { IProps } from './types';
import Margin from '@/components/Atoms/Spacing/Margin/Margin';
import { ProductInfo } from '@/components/Molecules/ProductInfo/ProductInfo';
import ChatRecommendation from '@/components/Molecules/ChatRecommendation/ChatRecommendation';

const SecondSection = ({
    skus,
    layoutImages,
    layoutImagesHaveVideo,
    layoutImageHaveVideo,
    accordionSpecsTexts,
    benefitsProduct,
    product,
    productId,
    description,
    textImages
}: IProps) => {

    return (
        <LandingContent>
            <Wrapper>
                {layoutImages && <ImagesProduct images={layoutImages} layoutImagesHaveVideo={layoutImagesHaveVideo} layoutImageHaveVideo={layoutImageHaveVideo} textImages={textImages} />}
                <DescriptionColumn>
                    <ColumnWrapper>
                    {
                        <SeparatedReview skus={skus} />
                    }
                        {
                            benefitsProduct && (
                                <Margin margin='0 0 20px 0'>
                                    <ProductInfo product={product} description={description} info={benefitsProduct}/>
                                </Margin>
                            )
                        }
                        <Accordion
                            items={accordionSpecsTexts}
                            isProductSS
                        />

                        <ChatRecommendation/>
                    </ColumnWrapper>
                </DescriptionColumn>
            </Wrapper>
        </LandingContent>
      );
}

export default SecondSection