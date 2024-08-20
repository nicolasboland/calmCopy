import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/fundaTusor.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const FundaTusor = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        faqAccordion={landingContent["faqAccordion"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
      />
    </main>
  )
}

export default FundaTusor;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {

  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1.webp",
    "width":1920,
    "height":1280,
    "caption":"Funda de Tusor 4 estaciones calm"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/",
    "inLanguage":"es",
    "name":"Funda de Tusor 4 Estaciones | Calm &#128155;",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/ropa-de-cama/funda-tusor/#primaryimage"
    },
    "datePublished":"2022-05-03T14:28:27+00:00",
    "dateModified":"2023-08-11T17:35:34+00:00",
    "description":"La mejor funda de edred\u00f3n de tusor est\u00e1 en Calm. La Funda de Tusor 4 estaciones la vas a usar todo el a\u00f1o, eleg\u00ed la medida seg\u00fan tu colch\u00f3n."
  }
    

  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], "rdc_product_seo_data")

  return { 
    props: {
      landingSEO: responses.landingSEO,
      graphImageObject,
      graphWebPage,
      relatedProducts: responses.relatedProducts,
      defaultProducts: responses.defaultProducts,
      product: responses.product
    }
  }
}