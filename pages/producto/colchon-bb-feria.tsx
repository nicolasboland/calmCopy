import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/FeriaProductContent/colchonBBFeria.json'
import productLandingRequests from '@/utils/productLandingRequests';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';

export const ColchonBBFeria = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        textImages={landingContent["textImages"]}
        layoutImages={landingContent["layoutImages"]}
        layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
        accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
        specsTitle={landingContent["specsSectionTitles"][0]["title"]}
        specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
        specsImage={landingContent["specsImages"]}
        specsValues={landingContent["specsValues"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        faqAccordion={landingContent["faqAccordion"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
      />
    </main>
  )
}

export default ColchonBBFeria;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("colchon-bb-feria"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-bb/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/06/render-turno-1.webp",
    "width":1920,
    "height":1280,
    "caption":"colch\u00f3n para bebe Calm"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/colchon-bb/#webpage",
    "url":"https://calmessimple.com.ar/colchones/colchon-bb-feria/",
    "inLanguage":"es",
    "name":"Colch\u00f3n para Cuna de Beb\u00e9 | Calm &#x1F49B;",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/colchon-bb/#primaryimage"
    },
    "datePublished":"2022-06-08T13:21:12+00:00",
    "dateModified":"2023-08-11T15:15:32+00:00",
    "description":"Que el primer colch\u00f3n de tu beb\u00e9 sea un Calm. Eleg\u00ed la medida del colch\u00f3n seg\u00fan la medida de la cuna de tu beb\u00e9: 70x100cm o 80x140cm."
  }
    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"])

  return { 
    props: {
      landingSEO,
      graphImageObject,
      graphWebPage,
      relatedProducts: responses.relatedProducts,
      defaultProducts: responses.defaultProducts,
      product: responses.product
    }
  }
}