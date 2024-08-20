import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/sabanasSuavidad.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const SabanasSuavidad = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        benefitsProduct={landingContent["benefitsProduct"]}
        faqAccordion={landingContent["faqAccordion"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
      />
    </main>
  )
}

export default SabanasSuavidad;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/04/Foto-turno-1.webp",
    "width":1920,
    "height":1280,
    "caption":"S\u00e1banas suavidad calm"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/",
    "inLanguage":"es",
    "name":"S\u00e1banas suavidad: de microfibra, suaves y c\u00f3modas | Calm &#x1F49B;",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#primaryimage"
    },
    "datePublished":"2022-04-21T19:43:18+00:00",
    "dateModified":"2023-08-11T17:40:34+00:00",
    "description":"Las s\u00e1banas m\u00e1s suaves est\u00e1n en Calm. Eleg\u00ed la medida seg\u00fan el tama\u00f1o de tu colch\u00f3n. Las s\u00e1banas de microfibra est\u00e1n disponibles en varios colores."
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