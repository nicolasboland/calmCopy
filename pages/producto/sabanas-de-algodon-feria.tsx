import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/FeriaProductContent/sabanasAlgodonFeria.json'
import { getHygraphId } from '@/utils/hygraphIds';
import productLandingRequests from '@/utils/productLandingRequests';

export const SabanasAlgodonFeria = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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

export default SabanasAlgodonFeria;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("sabanas-algodon-feria"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-2.webp",
    "width":1920,
    "height":1280,
    "caption":"S\u00e1banas calm 100% algodon en tres colores"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/#webpage",
    "url":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/",
    "inLanguage":"es",
    "name":"S\u00e1banas de algod\u00f3n - Feria | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/feria/sabanas-algodon-feria/#primaryimage"
    },
    "datePublished":"2023-03-07T14:05:40+00:00",
    "dateModified":"2023-08-28T18:30:36+00:00"
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