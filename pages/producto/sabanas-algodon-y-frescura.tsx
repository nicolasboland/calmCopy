import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/sabanasAlgodon.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const SabanasAlgodon = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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

export default SabanasAlgodon;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-2.webp",
    "width":1920,
    "height":1280,
    "caption":"S\u00e1banas calm 100% algodon en tres colores"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/",
    "inLanguage":"es",
    "name":"S\u00e1banas de algod\u00f3n: 200 hilos del mejor algod\u00f3n | Calm &#x1F49B;",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-algodon/#primaryimage"
    },
    "datePublished":"2022-05-06T18:21:47+00:00",
    "dateModified":"2023-08-11T17:45:34+00:00",
    "description":"Tu pr\u00f3ximas s\u00e1banas de 2 plazas, 2 plazas y media y 1 plaza est\u00e1n en Calm. S\u00e1banas algod\u00f3n y frescura, de 200 hilos del mejor algod\u00f3n."
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