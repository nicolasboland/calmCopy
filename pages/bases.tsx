import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryBase.json";
import { useDispatch, useSelector } from 'react-redux';
import { onGetRelatedProducts } from '@/state/products/productsActions';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"

export const BaseCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
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
        showCalmRichSnippet
      />
    {!loadingRedirect ?
        <main>
          <CategoryLanding 
            category={{
              name: "bases",
              title:"bases de cama calm",
              subtitle: "la base perfecta para tu colchón",
              products: products,
              installments: 12
            }}
          />
        </main>
        : <GlobalSpinner/>
      }
    </>
  )
}

export default BaseCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("bases"), "category_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/bases/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/05/B100.webp",
    "width":1080,
    "height":1080,
    "caption":"Base de cama Calm"
  }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/bases/#webpage",
    "url":"https://calmessimple.com.ar/bases/",
    "inLanguage":"es",
    "name":"Bases de cama Calm | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/bases/#primaryimage"
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
  const ids = "339;1993786;2196407"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  );

  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}