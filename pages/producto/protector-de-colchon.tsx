import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/protector.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const ProtectorImpermeable = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
  )
}

export default ProtectorImpermeable;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/06/foto-turno-1.webp",
    "width":1920,
    "height":1280,
    "caption":"Protector de Colch\u00f3n Calm"
  }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/",
    "inLanguage":"es",
    "name":"Protector de Colch\u00f3n Impermeable | Calm &#x1F49B;",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/ropa-de-cama/protector-impermeable/#primaryimage"
    },
    "datePublished":"2022-06-08T13:49:02+00:00",
    "dateModified":"2023-08-11T18:00:34+00:00",
    "description":"Eleg\u00ed el protector de colch\u00f3n impermeable perfecto para el tama\u00f1o de tu cama. Alarg\u00e1 la vida de tu colch\u00f3n con este complemento ideal."
  }
    

  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], "rdc_product_seo_data")

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