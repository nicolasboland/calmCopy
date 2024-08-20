import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryColchon.json";
import { onGetRelatedProducts } from '@/state/products/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';
import { getLandingSEO } from '@/utils/getLandingSEO';
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import { IStore } from '@/state/types';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"

export const ColchonCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const dispatch = useDispatch()
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))

  useEffect(() => {
    topPage()
    dispatch(onGetRelatedProducts("334"));
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
              name: "colchones",
              title:"Elegí el colchón perfecto para vos",
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

export default ColchonCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("colchones"), "category_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/colchones/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2023/06/ComparativaOriginal.webp",
    "width":2634,
    "height":1528,
    "caption":"Colch\u00f3n Calm Original"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/colchones/#webpage",
    "url":"https://calmessimple.com.ar/colchones/",
    "inLanguage":"es",
    "name":"Colchones Calm: Medidas y Tipos de Colch\u00f3n",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/colchones/#primaryimage"
    },
    "datePublished":"2022-09-19T20:16:08+00:00",
    "dateModified":"2023-07-25T19:53:17+00:00",
    "description":"Eleg\u00ed el colch\u00f3n ideal y hac\u00e9 que tu descanso sea \u00fanico. Colchones de 1 plaza, 2 plazas, plaza y media, queen, king y super king."
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "334;2067781"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}