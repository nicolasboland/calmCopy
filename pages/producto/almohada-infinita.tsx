import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/almohadaInfinita.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const AlmohadaInfinita = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        specsImage={landingContent["specsImages"]}
        benefitsProduct={landingContent["benefitsProduct"]}
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

export default AlmohadaInfinita;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/almohadas/almohada-infinita/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2021/06/Render-turno-1.webp",
    "width":1920,
    "height":1280,
    "caption":"Almohada infinita con caja"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/almohadas/almohada-infinita/#webpage",
    "url":"https://calmessimple.com.ar/almohadas/almohada-infinita/",
    "inLanguage":"es",
    "name":"Almohada Infinita | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
        "@id":"https://calmessimple.com.ar/almohadas/almohada-infinita/#primaryimage"
    },
    "datePublished":"2021-06-25T17:52:25+00:00",
    "dateModified":"2023-08-11T16:55:33+00:00",
    "description":"Una almohada que se adapta a vos para que puedas regular su altura y dormir de costado, boca abajo o boca arriba, y explorar sus infinitas posibilidades."
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