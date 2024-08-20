import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryAlmohadas.json";
import { useDispatch, useSelector } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"

export const AlmohadasCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const dispatch = useDispatch()
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))
  
  useEffect(() => {
    topPage()
    dispatch(onGetRelatedProducts("537"));
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
              name: "almohadas",
              title:"almohadas.",
              subtitle: "elegí la almohada perfecta para vos",
              products:products,
              installments:6
            }}/>
        </main>
        : <GlobalSpinner/>
      }
    </>
  )
}

export default AlmohadasCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("almohadas"), "category_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/almohadas/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/foto-espacio-2.webp",
    "width":1920,
    "height":914,
    "caption":"Dos Altas Almohadas en colch\u00f3n calm"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/almohadas/#webpage",
    "url":"https://calmessimple.com.ar/almohadas/",
    "inLanguage":"es",
    "name":"Almohadas | Encontr\u00e1 tu almohada ideal | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/almohadas/#primaryimage"
    },
    "datePublished":"2021-08-03T13:39:15+00:00",
    "dateModified":"2023-07-10T15:16:35+00:00",
    "description":"Eleg\u00ed entre la Almohada Inteligente la combinaci\u00f3n perfecta de soporte y frescura, o la Almohada Infinita con firmeza regulable y suavidad irresistible."
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "537;1855350;1831947;724708"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}