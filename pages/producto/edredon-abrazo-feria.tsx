import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/FeriaProductContent/edredonFeria.json'
import { getHygraphId } from '@/utils/hygraphIds';
import productLandingRequests from '@/utils/productLandingRequests';

export const EdredonAbrazoFeria = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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

export default EdredonAbrazoFeria;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("edredon-abrazo-feria"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/feria/edredon-abrazo-feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-1-1.webp",
    "width":1920,
    "height":1280,
    "caption":"Edred\u00f3n Calm enrollado"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/feria/edredon-abrazo-feria/#webpage",
    "url":"https://calmessimple.com.ar/feria/edredon-abrazo-feria/",
    "inLanguage":"es",
    "name":"Edred\u00f3n Abrazo - Feria | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/feria/edredon-abrazo-feria/#primaryimage"
    },
    "datePublished":"2023-03-07T14:14:17+00:00",
    "dateModified":"2023-08-28T18:25:33+00:00"
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