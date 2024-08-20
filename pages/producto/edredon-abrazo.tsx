import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/edredon.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const EdredonAbrazo = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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

export default EdredonAbrazo;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {

  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/producto/edredon-abrazo/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-1.webp",
    "width":1920,
    "height":1280,
    "caption":"Edred\u00f3n Calm enrollado"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/edredon-abrazo/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/edredon-abrazo/",
    "inLanguage":"es",
    "name":"Edred\u00f3n Abrazo tu ant\u00eddoto contra el fr\u00edo &#129507; | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/ropa-de-cama/edredon-abrazo/#primaryimage"
    },
    "datePublished":"2022-05-17T18:23:13+00:00",
    "dateModified":"2023-08-11T17:25:34+00:00",
    "description":"\u00bfC\u00f3mo es el Edred\u00f3n abrazo de Calm? Es un edred\u00f3n suave, liviano y resistente &#128170; Ideal para combatir el fr\u00edo y para mejorar tu descanso."
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