import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"
import faqAccordion from "@/jsons/FrequentQuestions/CategoryMuebles.json";

export const MueblesCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const dispatch = useDispatch()
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))
  
  useEffect(() => {
    topPage()
    dispatch(onGetRelatedProducts("339"));
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
        faqAccordion={faqAccordion.FrequentQuestions}
      />
      {!loadingRedirect ?
        <main>
          <CategoryLanding 
            category={{
              name: "muebles",
              title:"Muebles calm",
              subtitle: "los muebles perfectos para tu habitación",
              products:products,
              installments: 6,
            }}/>
        </main>
        : <GlobalSpinner/>
      }
    </>
  )
}

export default MueblesCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("muebles"), "category_seo_data");
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/muebles/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/B100.webp",
    "width":1080,
    "height":1080,
    "caption":"Muebles Calm"
  }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/muebles/#webpage",
    "url":"https://calmessimple.com.ar/muebles/",
    "inLanguage":"es",
    "name":"Muebles Calm | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/muebles/#primaryimage"
    },
    "datePublished":"2022-10-11T15:27:53+00:00",
    "dateModified":"2023-07-13T17:54:09+00:00"
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "2249180;2249006"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}