import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/colchonHibrido.json'
import productLandingRequests from '@/utils/productLandingRequests';
import { useDispatch } from "react-redux";
import { onGetPillsDataSucceeded, onGetBannerAndCucardaSucceeded } from "@/state/hygraph/hygraphActions";

export const ColchonHibrido = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product, pills, bannerAndCucarda, priceEDE}: IProductLanding) => {
  const dispatch = useDispatch();

  useEffect(() => {
    topPage()
    if (pills) {
      dispatch(onGetPillsDataSucceeded(pills));
      dispatch(onGetBannerAndCucardaSucceeded(pills));
    }
  }, [])

  return (
    <main>
      <ProductLanding
        productId={landingContent["productId"]}
        title={landingContent["title"]}
        dreamDelivery={landingContent["dreamDelivery"]}
        selectedLink={landingContent["selectedLink"]}
        landingSEO={landingSEO}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
        skus={landingContent["skus"]}
        tranferDiscount={landingContent["tranferDiscount"]}
        layoutImages={landingContent["layoutImages"]}
        layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
        layoutImageHaveVideo={landingContent["layoutImageHaveVideo"]}
        accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
        specsTitle={landingContent["specsSectionTitles"][0]["title"]}
        specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
        specsImage={landingContent["specsImages"]}
        specsValues={landingContent["specsValues"]}
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        faqAccordion={landingContent["faqAccordion"]}
        textImages={landingContent["textImages"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        renders={landingContent["renders"]}
        reviewsTitle={landingContent["reviewsTitle"]}
        capasInfo={landingContent["capasInfo"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
        priceEDE={priceEDE}
        atcImage={landingContent["ATCImage"]}
        headPills={landingContent["headPills"]}
        SecondheadPills={landingContent["SecondheadPills"]}
      />
    </main>
  )
}

export default ColchonHibrido;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-hibrido/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2023/06/1319.webp",
    "width":1280,
    "height":853,
    "caption":"colchon hibrido calm"
  }

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/colchon-hibrido/#webpage",
    "url":"https://calmessimple.com.ar/colchones/colchon-hibrido/",
    "inLanguage":"es",
    "name":"Colch\u00f3n H\u00edbrido | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/colchon-hibrido/#primaryimage"
    },
    "datePublished":"2023-06-15T15:04:16+00:00",
    "dateModified":"2023-08-11T14:30:33+00:00"
  }
    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], "colchones_product_seo_data", landingContent["dreamDelivery"])

  return { 
    props: {
      landingSEO: responses.landingSEO,
      graphImageObject,
      graphWebPage,
      relatedProducts: responses.relatedProducts,
      defaultProducts: responses.defaultProducts,
      product: responses.product,
      pills: responses.pills,
      bannerAndCucarda: responses.bannerAndCucarda,
      priceEDE: responses.priceEDE
    }
  }
}