import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/FeriaProductContent/colchonHibridoFeria.json'
import { getHygraphId } from '@/utils/hygraphIds';
import productLandingRequests from '@/utils/productLandingRequests';

export const ColchonHibridoFeria = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    topPage()
    setRender(true)
  }, [])

  return (
    <>
      {render && 
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
            skusFeria={landingContent["skusFeria"]}
            layoutImages={landingContent["layoutImages"]}
            benefitsProduct={landingContent["benefitsProduct"]}
            layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
            accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
            specsTitle={landingContent["specsSectionTitles"][0]["title"]}
            specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
            specsImage={landingContent["specsImages"]}
            specsValues={landingContent["specsValues"]}
            faqAccordionTitle={landingContent["faqAccordionTitle"]}
            faqAccordion={landingContent["faqAccordion"]}
            relatedProducts={relatedProducts}
            defaultProducts={defaultProducts}
            product={product}
            titleDescription={landingContent["titleDescription"]}
          />
        </main>
      }
    </>
  )
}

export default ColchonHibridoFeria;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("colchon-hibrido-feria-seo"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/#logo",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/11/Pag-1-calm-entero.png",
    "width":1275,
    "height":709,
    "caption":"Calm es simple"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/producto/colchon-hibrido-feria/#webpage",
    "url":"https://calmessimple.com.ar/producto/colchon-hibrido-feria/",
    "inLanguage":"es",
    "name":"Colch\u00f3n H\u00edbrido - Feria | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/producto/colchon-hibrido-feria/#primaryimage"
    },
    "datePublished":"2023-09-15T17:40:24+00:00",
    "dateModified":"2024-05-31T17:50:53+00:00"
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