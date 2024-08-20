"use client"

import CategoryProductsCards from "@/components/Organisms/CategoryProductsCard/CategoryProductsCard"
import {  useSelector } from 'react-redux';
import { getCurrentProductsRelated } from '@/state/products/productsSelector';
import { IProps } from "./types"
import landingContent from '@/jsons/ProductContent/base.json'
import ProductComparison from "@/components/Organisms/ProductComparison/ProductComparison"
import SpecsColchon from "@/components/Organisms/SpecsColchon/SpecsColchon"
import RelatedProducts from "@/components/Organisms/RelatedProducts/RelatedProducts"
import SpecsProducts from "@/components/Organisms/SpecsProducts/SpecsProducts";
import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions";
import faqBedClothes from "@/jsons/FrequentQuestions/CategoryBedClothes.json";
import faqColchon from "@/jsons/FrequentQuestions/CategoryColchon.json";
import faqAlmohadas from "@/jsons/FrequentQuestions/CategoryAlmohadas.json";
import faqBases from "@/jsons/FrequentQuestions/CategoryBase.json";
import TitleAndVideo from "@/components/Molecules/TitleAndVideo/TitleAndVideo";
import HeaderButton from "@/components/Organisms/HeaderButton/HeaderButton";
import faqAccordion from "@/jsons/FrequentQuestions/CategoryFeria.json";
import QuizzCategory from "@/components/Organisms/QuizzCategory/QuizzCategory";
import comparitionCategory from "@/utils/comparitionCategory.json"
import { preloadImages } from "@/utils/preloadImage"
import { useEffect, useState } from "react";
import { SkeletonLoader } from "@/components/Atoms/SkeletonLoader/SkeletonLoader"
import { DivCardsContainer, DivCards } from "@/components/Organisms/CategoryProductsCard/styled"
import Margin from "@/components/Atoms/Spacing/Margin/Margin";
import { useDispatch } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import { BasesLoader } from "@/components/Molecules/SkeletonLoaderTemplates/bases";
import { ComparitionDrop } from "./styled"
import Text from "@/components/Atoms/Typography/Text";
import { DropDownArrow } from "@/utils/Icons"
import faqMuebles from "@/jsons/FrequentQuestions/CategoryMuebles.json";

const CategoryLanding = ({category} : IProps) => {
    const dispatch = useDispatch()
    const currentProductsRelated = useSelector(getCurrentProductsRelated)
    const [isImagesLoaded, setIsImagesLoaded] = useState<boolean>(false)
    const [render, setRender] = useState<boolean>(false)

    useEffect(() => {
        if (category.relatedProducts) {
            dispatch(onGetRelatedProducts(category.relatedProducts));
        }
        setRender(true)
      }, [])
    
    useEffect(() => {
        if (category) {
            let images: string[] = []
            category.products.forEach(product => {
                images.push(product.image)
            });
            preloadImages(images).then(() => {
            setIsImagesLoaded(true)
            });
        }
    }, [category])

    return(
    <>
        {
            render ? (
            <>
            {
                category.name === "feria" &&
                <HeaderButton 
                isFeria
                image="https://calmessimple.com.ar/wp-content/uploads/2023/03/nuevo_logo_feria@3x.webp"
                altImage="feria"
                title={(
                <>
                Menor precio, <br/>
                misma calidad. <br />
                50% de descuento.
                </>
                )}
                subTitle= "Pagando en efectivo o transferencia"
                textButton="¡Compra con descuento!"
                redirectButton="#productos"
                />
            }
            
            {
                isImagesLoaded ?
                <CategoryProductsCards 
                    title={category.title}
                    subtitle={category.subtitle}
                    items={category.products}
                    installments={category.installments}
                />
                : 
                <DivCards>
                    <Margin margin="3rem"/>
                    <DivCardsContainer>
                        {
                            category.products.map((product, index) => {
                                return (
                                    <Margin margin="0.4rem 0.4rem 2rem 0.4rem" key={index}>
                                        <SkeletonLoader  width="280px" height="250px" borderRadius="10px" responsiveMobile={{ width:"280px" ,height:"250px"}}/>
                                    </Margin>
                                )
                            })
                        }
                    </DivCardsContainer>
                </DivCards>
            }

            {
                category.name === "colchones" &&
                <ComparitionDrop href="#pickColchon">
                    {DropDownArrow()}
                    <Text
                    font="medium"
                    fontWeight={400}
                    fontSize="1.2rem"
                    color="wildViolet"
                    >
                        Comparar colchones
                    </Text>
                    {DropDownArrow()}
                </ComparitionDrop>
            }
            
            {
                (category.name === "colchones" ||  category.name === "almohadas" ||  category.name === "bases") &&
                <QuizzCategory infoQuizz={comparitionCategory[category.name]}/>
            }

            {
                category.name === "ropa-de-cama" &&
                <ProductComparison />
            }
            {
                category.name === "colchones" &&
                <SpecsColchon
                category={{
                    products: category.products,
                    installments: category.installments
                }}
                />
            }
            {
                category.name !== "feria" && <RelatedProducts relatedItems={currentProductsRelated} title="Completá tu" boldTitle="descanso ideal" />
            }
            {/* {
                category.name === "bases" &&
                <SpecsProducts 
                specsTitle="dimensiones de la "
                specsBoldTitle="base para tu colchón"
                imageUrl={landingContent["specsImages"]}
                specs={landingContent["specsValues"]}
                />
            } */}
            {
                category.name === "colchones" && 
                <TitleAndVideo 
                isMp4={false}
                hasAutoPlay={false}
                hasLoop={false}
                hasMuted
                title=''
                boldTitle='Unboxing calm'
                videoUrl='arxKSRvmk10'
                />
            }
            {
                !(category.name === "accesorios") &&
                    <FrequentQuestions 
                    items={
                        category.name === "bases" ? faqBases.FrequentQuestions : 
                        category.name === "colchones" ? faqColchon :
                        category.name === "ropa-de-cama" ? faqBedClothes :
                        category.name === "feria" ? faqAccordion :
                        category.name === "muebles" ? faqMuebles.FrequentQuestions :
                        faqAlmohadas
                    }
                    title='Preguntas '
                    boldTitle={
                        category.name === "bases" ? "frecuentes sobre bases Calm" : 
                        category.name === "colchones" ? "frecuentes sobre colchones Calm" :
                        category.name === "ropa-de-cama" ? "frecuentes sobre ropa de cama Calm" :
                        category.name === "almohadas" ? "frecuentes sobre almohadas Calm" :
                        category.name === "muebles" ? "frecuentes sobre muebles Calm" :
                        "frecuentes"
                    }
                    />
            }
            </>
            ) : <BasesLoader/>
        }
        </>
    )
}
export default CategoryLanding
