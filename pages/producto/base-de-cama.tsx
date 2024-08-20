import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/base.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const Base = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product, priceEDE}: IProductLanding) => {
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
        priceEDE={priceEDE}
        titleDescription={landingContent["titleDescription"]}
        headPills={landingContent["headPills"]}
      />
    </main>
  )
}

export default Base;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject =  {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/bases/base/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Base_sbd-1.webp",
    "width":1922,
    "height":1282,
    "caption":"Foto base de cama calm"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/bases/base/#webpage",
    "url":"https://calmessimple.com.ar/bases/base/",
    "inLanguage":"es",
    "name":"Base de cama Calm | La Cama Perfecta Para Todxs | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/bases/base/#primaryimage"
    },
    "datePublished":"2019-10-19T17:19:56+00:00",
    "dateModified":"2023-08-11T16:15:35+00:00",
    "description":"Se arma en menos de 15\u00b4 y de hierro para una m\u00e1xima estabilidad en la base de cama.12 cuotas sin inter\u00e9s \u2705 30 noches de prueba en casa \u2705 env\u00edo gratis \u2705"
  }
    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], undefined, landingContent["dreamDelivery"])

  return { 
    props: {
      landingSEO: responses.landingSEO,
      graphImageObject,
      graphWebPage,
      relatedProducts: responses.relatedProducts,
      defaultProducts: responses.defaultProducts,
      product: responses.product,
      priceEDE: responses.priceEDE
    }
  }
}