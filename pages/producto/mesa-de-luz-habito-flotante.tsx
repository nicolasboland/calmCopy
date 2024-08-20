import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/mesaLuzHabitoFlotante.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const MesaLuzHabitoFlotante = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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

export default MesaLuzHabitoFlotante;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
    const graphImageObject = {
        "@type":"ImageObject",
        "@id":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito-flotante/#primaryimage",
        "url":"https://calmessimple.com.ar/wp-content/uploads/2022/04/Foto-turno-1.webp",
        "width":1920,
        "height":1280,
        "caption":"Mesa de luz habito calm"
      }
    
      const graphWebPage = {
        "@type":"WebPage",
        "@id":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito-flotante/#webpage",
        "url":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito-flotante/",
        "inLanguage":"es",
        "name":"Mesa de Luz Hábito Flotante | Calm",
        "isPartOf":{
          "@id":"https://calmessimple.com.ar/#website"
        },
        "primaryImageOfPage":{
          "@id":"https://calmessimple.com.ar/muebles/mesa-de-luz-habito-flotante/#primaryimage"
        },
        "datePublished":"2024-07-07T19:43:18+00:00",
        "dateModified":"2024-07-07T17:40:34+00:00",
        "description":"La mesa de luz hábito flotante es fácil de armar, ideal para habitaciones chicas. Nuevo producto en calm."
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