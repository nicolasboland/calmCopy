import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import { getLandingSEO } from '@/utils/hygraphHelper';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/comboOriginal.json'
import { getHygraphId } from '@/utils/hygraphIds';
import productLandingRequests from '@/utils/productLandingRequests';

export const ComboOriginal = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product, priceEDE}: IProductLanding) => {
  useEffect(() => {
    topPage()
  }, [])

  return (
    <main>
      <ProductLanding
        productId={landingContent["productId"]}
        comboIds={landingContent["comboIds"]}
        title={landingContent["title"]}
        dreamDelivery={landingContent["dreamDelivery"]}
        selectedLink={landingContent["selectedLink"]}
        landingSEO={landingSEO}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
        skus={landingContent["skus"]}
        specsTitle={landingContent["specsSectionTitles"][0]["title"]}
        specsBoldTitle={landingContent["specsSectionTitles"][0]["bold"]}
        specsImage={landingContent["specsImages"]}
        specsValues={landingContent["specsValues"]}
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        faqAccordion={landingContent["faqAccordion"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        priceEDE={priceEDE}
        titleDescription={landingContent["titleDescription"]}
      />
    </main>
  )
}

export default ComboOriginal;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("combo-original"))
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/combos/combo-original/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/Colchon_sbd.webp",
    "width":1922,
    "height":1282,
    "caption":"persona acostada en un colch\u00f3n calm"
 }

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/combos/combo-original/#webpage",
    "url":"https://calmessimple.com.ar/combos/combo-original/",
    "inLanguage":"es",
    "name":"Combo Original | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/producto/combo-original/#primaryimage"
    },
    "datePublished":"2022-12-07T14:39:17+00:00",
    "dateModified":"2023-05-01T21:49:55+00:00"
  }
  
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], "other_product_seo_data", landingContent["dreamDelivery"], landingContent["comboIds"])

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