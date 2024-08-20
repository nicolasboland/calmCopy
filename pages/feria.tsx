import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ICategoryLanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import faqAccordion from "@/jsons/FrequentQuestions/CategoryFeria.json";
import CategoryLanding from '@/components/Pages/CategoryLanding/CategoryLanding';
import axios from 'axios';
import { getHygraphId } from '@/utils/hygraphIds';

export const FeriaCategory = ({landingSEO, graphImageObject, graphWebPage, products}: ICategoryLanding) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    topPage()
    setRender(true)
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
      {render && 
        <main>
          <CategoryLanding 
            category={{
              name: "feria",
              title:"Productos feria.",
              subtitle: "Tu descanso al mejor precio",
              products: products,
              installments: -1
            }}
          />
        </main>
      }
    </>
  )
}

export default FeriaCategory;

export const getStaticProps: GetStaticProps<ICategoryLanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("feria"), "category_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/feria/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2023/06/1346.webp",
    "width":1280,
    "height":853,
    "caption":"colchon hibrido calm con ropa de cama"
 }
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/feria/#webpage",
    "url":"https://calmessimple.com.ar/feria/",
    "inLanguage":"es",
    "name":"Feria | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/feria/#primaryimage"
    },
    "datePublished":"2023-03-23T15:20:53+00:00",
    "dateModified":"2023-07-13T17:51:10+00:00"
  }
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const ids = "1952731;2111657;2024064;2024048;2024024;2023992;2023969;2041984"

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=${ids}`,
    requestConfig
  );
  return { props: {landingSEO, graphImageObject, graphWebPage, products: await response.data} }
}