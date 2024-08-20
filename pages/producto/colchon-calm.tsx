import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/colchonCalm.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const ColchonCalm = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product, priceEDE}: IProductLanding) => {
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
        renders={landingContent["renders"]}
        layoutImages={landingContent["layoutImages"]}
        layoutImagesHaveVideo={landingContent["layoutImagesHaveVideo"]}
        layoutImageHaveVideo={landingContent["layoutImageHaveVideo"]}
        accordionSpecsTexts={landingContent["accordionSpecsTexts"]}
        specsTitle={landingContent["specsSectionTitles"][0]["title"]}
        specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
        specsImage={landingContent["specsImages"]}
        specsValues={landingContent["specsValues"]}
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        faqAccordion={landingContent["faqAccordion"]}
        reviewsTitle={landingContent["reviewsTitle"]}
        capasInfo={landingContent["capasInfo"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
        priceEDE={priceEDE}
        atcImage={landingContent["ATCImage"]}
        headPills={landingContent["headPills"]}
        SecondheadPills={landingContent["SecondheadPills"]}
      />
    </main>
  )
}

export default ColchonCalm;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/colchon-calm/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Colchon_sbd.webp",
    "width":1922,
    "height":1282,
    "caption":"persona acostada en un colch\u00f3n calm"
  }

 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/colchon-calm/#webpage",
    "url":"https://calmessimple.com.ar/colchones/colchon-calm/",
    "inLanguage":"es",
    "name":"El Colch\u00f3n Perfecto para Todos | Probalo 30 noches en casa | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/colchon-calm/#primaryimage"
    },
    "datePublished":"2019-10-19T17:13:19+00:00",
    "dateModified":"2023-08-10T14:35:34+00:00",
    "description":"Compra Online el Colch\u00f3n perfecto para todos los Argentinos. Envio gratis a todo el pa\u00eds y 12 cuotas sin interes con todas las tarjetas\u2705"
  }
    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], "colchones_product_seo_data", landingContent["dreamDelivery"])

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