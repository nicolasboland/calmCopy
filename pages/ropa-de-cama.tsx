import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding, ILanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryBedClothes.json";
import { useDispatch, useSelector } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"

export const RopaDeCamaCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const dispatch = useDispatch()
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))

  useEffect(() => {
    topPage()
    dispatch(onGetRelatedProducts("1835538"));
  }, [])
  return (
    <>
      <SEO
        title={landingSEO.title}
        description={landingSEO.description}
        imageSrc={landingSEO.image}
        url={landingSEO.url}
        graphImageObject={graphImageObject}
        graphWebPage={graphWebPage}
        faqAccordion={faqAccordion}
        showCalmRichSnippet
      />
    {!loadingRedirect ?
        <main>
          <CategoryLanding 
            category={{
              name:"ropa-de-cama",
              title:"ropa de cama.",
              subtitle:"vestí de gala tu colchón",
              products: products,
              installments:6
            }}
          />
        </main>
        : <GlobalSpinner/>
      }
    </>
  )
}

export default RopaDeCamaCategory;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("ropa-de-cama"), "category_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-turno-2.webp",
    "width":1920,
    "height":1280,
    "caption":"Colores funda tusor 4 estaciones"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/ropa-de-cama/#webpage",
    "url":"https://calmessimple.com.ar/ropa-de-cama/",
    "inLanguage":"es",
    "name":"Ropa de cama Calm | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/ropa-de-cama/#primaryimage"
    },
    "datePublished":"2022-09-30T12:17:10+00:00",
    "dateModified":"2023-07-13T17:55:10+00:00"
  }
  const ids = "1851772;1835935;1851405;1851178"
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}