import { GetStaticProps } from 'next'
import { IProductLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import ProductLanding from '@/components/Pages/ProductLanding/ProductLanding';
import landingContent from '@/jsons/ProductContent/respaldoHorizonte.json'
import productLandingRequests from '@/utils/productLandingRequests';

export const RespaldoHorizonte = ({landingSEO, graphImageObject, graphWebPage, relatedProducts, defaultProducts, product}: IProductLanding) => {
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
        faqAccordionTitle={landingContent["faqAccordionTitle"]}
        faqAccordion={landingContent["faqAccordion"]}
        benefitsProduct={landingContent["benefitsProduct"]}
        relatedProducts={relatedProducts}
        defaultProducts={defaultProducts}
        product={product}
        titleDescription={landingContent["titleDescription"]}
        estructuraInfo={landingContent["estructuraInfo"]}
        estructuraImagen={landingContent["estructuraImagen"]}
        atcImage={landingContent["ATCImage"]}
        headPills={landingContent["headPills"]}
      />
    </main>
  )
}

export default RespaldoHorizonte;

export const getStaticProps: GetStaticProps<IProductLanding> = async () => {

    
  const responses = await productLandingRequests(landingContent["productId"], landingContent["key"], "bases_product_seo_data")

  return { 
    props: {
      landingSEO: responses.landingSEO,
      relatedProducts: responses.relatedProducts,
      defaultProducts: responses.defaultProducts,
      product: responses.product
    }
  }
}