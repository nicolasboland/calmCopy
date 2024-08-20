import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/sommier.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const Sommier = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product, priceEDE}: IProductLanding) => {
  useEffect(() => {
    topPage()
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
        textImages={landingContent["textImages"]}
        layoutImages={landingContent["layoutImages"]}
        layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
        layoutImageHaveVideo={landingContent["layoutImageHaveVideo"]}
        accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
        specsTitle={landingContent["specsSectionTitles"][0]["title"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
        specsImage={landingContent["specsImages"]}
        specsValues={landingContent["specsValues"]}
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        faqAccordion={landingContent["faqAccordion"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
        priceEDE={priceEDE}
        headPills={landingContent["headPills"]}
      />
    </main>
  )
}

export default Sommier;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {

  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/bases/sommier/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/12/Sommier_1.webp",
    "width":1920,
    "height":1278
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/bases/sommier/#webpage",
    "url":"https://calmessimple.com.ar/bases/sommier/",
    "inLanguage":"es",
    "name":"Sommier Calm | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/bases/sommier/#primaryimage"
    },
    "datePublished":"2022-12-06T20:22:29+00:00",
    "dateModified":"2023-08-11T16:25:34+00:00"
  }
    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], undefined, landingContent["dreamDelivery"])

  return { 
    props: {
      landingSEO: responses.landingSEO,
      graphImageObject,
      graphWebPage,
      relatedProducts: responses.relatedProducts,
      defaultProducts: responses.defaultProducts,
      product: responses.product,
      priceEDE: responses.priceEDE
    }
  }
}