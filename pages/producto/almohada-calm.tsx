import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/almohadaInteligente.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const AlmohadaInteligente = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
        specsTitle={landingContent["specsSectionTitles"][0]["title"]}
        specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
        benefitsProduct={landingContent["benefitsProduct"]}
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
  )
}

export default AlmohadaInteligente;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/almohadas/almohada-inteligente/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Almohada-Inteligente-Sola.webp",
    "width":1920,
    "height":1280,
    "caption":"Almohada inteligente"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/almohadas/almohada-inteligente/#webpage",
    "url":"https://calmessimple.com.ar/almohadas/almohada-inteligente/",
    "inLanguage":"es",
    "name":"La Almohada Perfecta Para Todos | Probala 30 Noches en Casa | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/almohadas/almohada-inteligente/#primaryimage"
    },
    "datePublished":"2019-10-21T22:54:27+00:00",
    "dateModified":"2023-08-11T17:15:33+00:00",
    "description":"Nuestra almohada inteligente es una combinaci\u00f3n super confortable de suavidad, apoyo y frescura. Envios gratis a todo el pa\u00eds + 12 cuotas sin interes"
  }
    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"])

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