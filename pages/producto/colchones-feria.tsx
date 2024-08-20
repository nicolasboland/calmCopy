import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/FeriaProductContent/colchonCalmFeria.json'
import { getHygraphId } from '@/utils/hygraphIds';
import productLandingRequests from '@/utils/productLandingRequests';

export const ColchonCalmFeria = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
            layoutImages={landingContent["layoutImages"]}
            accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
            graphWebPage={graphWebPage}
            capasInfo={landingContent["capasInfo"]}
            skus={landingContent["skus"]}
            skusFeria={landingContent["skusFeria"]}
            benefitsProduct={landingContent["benefitsProduct"]}
            faqAccordionTitle={landingContent["faqAccordionTitle"]}
            faqAccordion={landingContent["faqAccordion"]}
            reviewsTitle={landingContent["reviewsTitle"]}
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

export default ColchonCalmFeria;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("colchones-feria"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/feria/colchones-feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/1280x854_Colch\u00f3n-05.jpg",
    "width":1281,
    "height":854,
    "caption":"colch\u00f3n calm en caja"
  }

  const graphWebPage = {   
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/feria/colchones-feria/#webpage",
    "url":"https://calmessimple.com.ar/feria/colchones-feria/",
    "inLanguage":"es",
    "name":"Colchones feria | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/feria/colchones-feria/#primaryimage"
    },
    "datePublished":"2022-07-05T20:48:57+00:00",
    "dateModified":"2023-08-28T18:00:36+00:00"
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