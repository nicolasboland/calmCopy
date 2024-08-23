import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  ContainerBackColor
} from "./styled";
import { IProps } from "./types";
import { IStore } from "@/state/types";
import { useEffect, useState } from "react";
import { getLoadingValues } from "@/state/loading/loadingSelector";
import MainBlock from "@/components/Organisms/MainBlock/MainBlock";
import React, { Suspense } from 'react';
/* import SecondSection from "@/components/Organisms/SecondSection/SecondSection"; */
const SecondSection = dynamic(() => import('@/components/Organisms/SecondSection/SecondSection'), { ssr: false });
/* import RelatedProducts from "@/components/Organisms/RelatedProducts/RelatedProducts"; */
const RelatedProducts = dynamic(() => import('@/components/Organisms/RelatedProducts/RelatedProducts'), { ssr: false });
/* import SpecsProducts from "@/components/Organisms/SpecsProducts/SpecsProducts"; */
const SpecsProducts = dynamic(() => import("@/components/Organisms/SpecsProducts/SpecsProducts"), { ssr: false });
/* import FrequentQuestions from "@/components/Organisms/FrequentQuestions/FrequentQuestions"; */
const FrequentQuestions = dynamic(() => import("@/components/Organisms/FrequentQuestions/FrequentQuestions"), { ssr: false });
import { getProductsData, getDefaultProducts, getCurrentProductsRelated, getStockAndPrices } from "@/state/products/productsSelector";
import { IChildrenProd, IProduct } from "@/state/products/types";
import { onGetRelatedProducts, onGetSDefaultProducts, onGetProduct, onGetStockAndPrice } from "@/state/products/productsActions";
/* import ProductReviews from "@/components/Molecules/Reviews/ProductReviews/ProductReviews"; */
const ProductReviews = dynamic(() => import("@/components/Molecules/Reviews/ProductReviews/ProductReviews"), { ssr: false });
/* import ColchonFeriaSection from "@/components/Organisms/ColchonFeriaSection/ColchonFeriaSection"; */
const ColchonFeriaSection = dynamic(() => import("@/components/Organisms/ColchonFeriaSection/ColchonFeriaSection"), { ssr: false });
/* import ComboSection from "@/components/Organisms/ComboSection/ComboSection"; */
const ComboSection = dynamic(() => import("@/components/Organisms/ComboSection/ComboSection"), { ssr: false });
/* import FeriaBanner from "@/components/Organisms/FeriaBanner/FeriaBanner"; */
const FeriaBanner = dynamic(() => import("@/components/Organisms/FeriaBanner/FeriaBanner"), { ssr: false });
/* import FeriaSection from "@/components/Organisms/FeriaSection/FeriaSection"; */
const FeriaSection = dynamic(() => import("@/components/Organisms/FeriaSection/FeriaSection"), { ssr: false });
/* import CapasColchon from "@/components/Organisms/CapasColchon/CapasColchon"; */
const CapasColchon = dynamic(() => import("@/components/Organisms/CapasColchon/CapasColchon"), { ssr: false });
/* import EstructuraBases from "@/components/Organisms/EstructuraBases/EstructuraBases"; */
const EstructuraBases = dynamic(() => import("@/components/Organisms/EstructuraBases/EstructuraBases"), { ssr: false });
import comparitions from "@/utils/comparitions.json"
/* import ChatRecommendation from '@/components/Molecules/ChatRecommendation/ChatRecommendation'; */
const ChatRecommendation = dynamic(() => import('@/components/Molecules/ChatRecommendation/ChatRecommendation'), { ssr: false });
/* import ComparitionMultiple from "@/components/Organisms/ComparitionMultiple/ComparitionMultiple"; */
const ComparitionMultiple = dynamic(() => import("@/components/Organisms/ComparitionMultiple/ComparitionMultiple"), { ssr: false });
import { onGetBannerAndCucarda } from "@/state/hygraph/hygraphActions"
import dynamic from "next/dynamic";
import SEO from "@/utils/SEO/SEO";
import { IBannerAndCucarda } from "@/state/hygraph/types";
import { getBannerAndCucarda } from "@/state/hygraph/hygraphSelector";
/* import TitleAndVideo from "@/components/Molecules/TitleAndVideo/TitleAndVideo"; */
const TitleAndVideo = dynamic(() => import("@/components/Molecules/TitleAndVideo/TitleAndVideo"), { ssr: false });

const ProductLanding = ({
  productId,
  comboIds,
  title,
  titleDescription,
  dreamDelivery,
  selectedLink,
  landingSEO,
  skus,
  renders,
  skusFeria,
  layoutImages,
  layoutImagesHaveVideo,
  layoutImageHaveVideo,
  accordionSpecsTexts,
  specsTitle,
  specsBoldTitle,
  tranferDiscount,
  specsImage,
  specsValues,
  generalSpecsDescription,
  faqAccordionTitle,
  faqAccordion,
  graphImageObject,
  graphWebPage,
  benefitsProduct,
  capasInfo,
  reviewsTitle,
  product,
  relatedProducts,
  defaultProducts,
  priceEDE,
  textImages,
  estructuraInfo,
  estructuraImagen,
  atcImage,
  headPills,
  SecondheadPills,
  titleAndVideo
}: IProps) => {
  const dispatch = useDispatch();
  const productsStoreData = useSelector((state: IStore) => getProductsData(state));
  const defaultStoreProducts = useSelector((state: IStore) => getDefaultProducts(state));
  const stateLoading = useSelector((state: IStore) => getLoadingValues(state));
  const currentProductsRelated = useSelector((state: IStore) => getCurrentProductsRelated(state))
  const stockAndPrices = useSelector(getStockAndPrices)
  const bannerAndCucarda = useSelector(getBannerAndCucarda)

  const [feriaATCEnabled, setFeriaATCEnabled] = useState<boolean>(false);
  const [miniBanner, setMiniBanner] = useState<IBannerAndCucarda | undefined>();
  const [ede, setEDE] = useState<IProduct>();
  const [storeProduct, setStoreProduct] = useState<IProduct | null | undefined>(product);
  const [children, setChildren] = useState<IChildrenProd[] | undefined>(storeProduct?.children);

  useEffect(() => {
    if(!relatedProducts) {
      dispatch(onGetRelatedProducts(comboIds ? comboIds[0] : productId));
    }
    if(!defaultProducts) {
      dispatch(onGetSDefaultProducts());
    }
  }, [product]);

  useEffect(() => {
    if (!product && (!productsStoreData || productsStoreData.every(product => product.id !== productId))) {
      dispatch(onGetProduct(productId))
    }
    if (dreamDelivery && !priceEDE) {
      dispatch(onGetProduct("2024353"))
    }
    if(productId) {
      dispatch(onGetStockAndPrice(productId))
    }
    
    dispatch(onGetBannerAndCucarda())
  }, []);

  useEffect(() => {
    if(dreamDelivery && !priceEDE) {
      setEDE(productsStoreData?.find(product => product.id === "2024353"))
    }
    if(!product) {
      setStoreProduct(productsStoreData?.find(product => product.id === productId))
    }
  }, [productsStoreData]);

  useEffect(() => {
    if(stockAndPrices) {
      setChildren(prevState => {
        
        return prevState?.map(c => {
          const currentUpdate = stockAndPrices.children.find(u => u.id == c.id)
          if(currentUpdate) {
            return {
              ...c, 
              price: currentUpdate.price,
              regular_price: currentUpdate.regular_price,
              stock: currentUpdate.stock,
              backorder: currentUpdate.backorder
            }
          } else {
            return c;
          }

        }) 
      })
    }
  }, [stockAndPrices, storeProduct])

  useEffect(() => {
    if(bannerAndCucarda) {
      /* setMiniBanner(bannerAndCucarda.find((bannerAndCucarda: IBannerAndCucarda) => 
        bannerAndCucarda.categoria ===  (storeProduct?.id === "1835498" || storeProduct?.id === "1835538" ?
      "accesorios" :
      storeProduct?.id === "339" || storeProduct?.id === "1993786" ? 
      "bases" : 
      selectedLink))) */
      setMiniBanner(bannerAndCucarda.find((bannerAndCucarda: IBannerAndCucarda) =>  bannerAndCucarda.categoria === selectedLink))}
  }, [bannerAndCucarda])
  
  return (
    <>
      <SEO
        title={landingSEO.title}
        description={landingSEO.description}
        imageSrc={landingSEO.image}
        url={landingSEO.url}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
        productReviewsSKUs={skusFeria ?? skus}
        faqAccordion={faqAccordion}
        productLandingGallery={(product?.image_url && product?.gallery_image_url) ? [product.image_url].concat(product.gallery_image_url.map(url => url)) : undefined}
        miniBanner={miniBanner}
      />
      <Container>
        {selectedLink == "feria" && <FeriaBanner showCPValidator={productId == "1952731" || productId == "2111657"} setFeriaATCEnabled={setFeriaATCEnabled}/>}
        <ContainerBackColor>
        <MainBlock
            title={title}
            dreamDelivery={dreamDelivery}
            priceEDE={priceEDE ?? ede?.price}
            description={storeProduct?.short_description}
            category={selectedLink}
            renders={renders}
            galleryImages={(product?.image_url && product?.gallery_image_url) ? [product.image_url].concat(product.gallery_image_url.map(url => url)) : undefined}
            children={children}
            tranferDiscount={tranferDiscount}
            discount={storeProduct?.discount as number}
            installments={storeProduct?.installments}
            skus={skus}
            stateLoading={stateLoading?.loadingAddToCart || stateLoading.loadingUpdateToCart}
            defaultProds={defaultProducts ?? defaultStoreProducts}
            isCombo={!!comboIds}
            idProd={storeProduct?.id}
            stockAndPrices={stockAndPrices}
            atcImage={atcImage}
            feriaATCEnabled={feriaATCEnabled}
            headPills={headPills}
            SecondheadPills={SecondheadPills}
          />
          {comboIds  && <ComboSection />}
          {selectedLink == "feria" && <FeriaSection showDonation={productId == "1952731"} />}
        </ContainerBackColor>

        {!comboIds &&
          <SecondSection
            skus={skus}
            productId={productId}
            layoutImages={layoutImages}
            textImages={textImages}
            layoutImagesHaveVideo={layoutImagesHaveVideo}
            layoutImageHaveVideo={layoutImageHaveVideo}
            accordionSpecsTexts={accordionSpecsTexts}
            benefitsProduct={benefitsProduct}
            product={title}
            description={titleDescription}
          />
        }
        { capasInfo && (
          <ContainerBackColor>
            <CapasColchon capasInfo={capasInfo} title={title}/>
          </ContainerBackColor>
        )}
        { estructuraInfo && estructuraImagen && (
          <Container>
            <EstructuraBases estructuraInfo={estructuraInfo} estructuraImagen={estructuraImagen} title={title} />
          </Container>
        )
        }
        {
          (selectedLink == "colchones" || selectedLink == "bases y sommiers" || selectedLink == "almohadas") &&
            <ComparitionMultiple info={comparitions[selectedLink]} productId={productId}/>
        }
        { titleAndVideo && (
          <TitleAndVideo 
          isMp4={false}
          hasAutoPlay={false}
          hasLoop={false}
          hasMuted
          title={titleAndVideo.title}
          boldTitle=''
          videoUrl={titleAndVideo.video}
          />
        )}
        {selectedLink != "feria" && <RelatedProducts relatedItems={relatedProducts ?? currentProductsRelated} title="Completá tu descanso ideal" fromProduct/>}
        {specsValues &&
          <SpecsProducts  
            specsTitle={specsTitle}
            specsBoldTitle={specsBoldTitle}
            imageUrl={specsImage}
            specs={specsValues}
            generalSpecsDescription={generalSpecsDescription}
          />
        }

        <ChatRecommendation isForMobile/>
        
        {faqAccordion && faqAccordionTitle && <FrequentQuestions title="" boldTitle={faqAccordionTitle} items={faqAccordion} noBackgroundColor/>}
        {
          <ProductReviews skus={skus} reviewsTitle={reviewsTitle}/>
        }
      </Container>
    </>
  );
}

export default ProductLanding