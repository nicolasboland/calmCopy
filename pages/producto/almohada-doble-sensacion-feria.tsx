import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { getLandingSEO } from '@/utils/hygraphHelper';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/FeriaProductContent/dobleSensacionFeria.json'
import { getHygraphId } from '@/utils/hygraphIds';
import productLandingRequests from '@/utils/productLandingRequests';

export const AlmohadaDobleSensacionFeria = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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

export default AlmohadaDobleSensacionFeria;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("doble-sensacion-feria"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/producto/almohada-doble-sensacion-feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/almohada-doble-sensaci\u00f3n.webp",
    "width":1920,
    "height":1280,
    "caption":"almohada doble sensaci\u00f3n con caja"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/producto/almohada-doble-sensacion-feria/#webpage",
    "url":"https://calmessimple.com.ar/producto/almohada-doble-sensacion-feria/",
    "inLanguage":"es",
    "name":"Almohada Doble Sensaci\u00f3n - Feria | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/producto/almohada-doble-sensacion-feria/#primaryimage"
    },
    "datePublished":"2023-04-24T19:20:32+00:00",
    "dateModified":"2024-06-01T00:40:44+00:00"
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