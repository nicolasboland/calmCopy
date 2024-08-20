import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/mesaLuzHabito.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const MesaLuzHabito = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        skus={landingContent["skus"]}
        landingSEO={landingSEO}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
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
        generalSpecsDescription={landingContent["generalSpecsDescription"]}
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        faqAccordion={landingContent["faqAccordion"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
        headPills={landingContent["headPills"]}
        titleAndVideo={landingContent["titleAndVideo"]}
      />
    </main>
  )
}

export default MesaLuzHabito;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
    const graphImageObject = {
        "@type":"ImageObject",
        "@id":"https://calmessimple.com.ar/ropa-de-cama/sabanas-suavidad/#primaryimage",
        "url":"https://calmessimple.com.ar/wp-content/uploads/2022/04/Foto-turno-1.webp",
        "width":1920,
        "height":1280,
        "caption":"S\u00e1banas suavidad calm"
      }
    
      const graphWebPage = {
        "@type":"WebPage",
        "@id":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito/#webpage",
        "url":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito/",
        "inLanguage":"es",
        "name":"Mesa de Luz Hábito | Calm",
        "isPartOf":{
          "@id":"https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage":{
          "@id":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito/#primaryimage"
        },
        "datePublished":"2022-04-21T19:43:18+00:00",
        "dateModified":"2023-08-11T17:40:34+00:00",
        "description":"La mesa de luz hábito es fácil de armar, con mucho espacio de guardado. Nuevo producto en calm."
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