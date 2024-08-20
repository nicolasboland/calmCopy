import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import HotSaleLanding from '@/components/Pages/HotSale/HotSale';
import HotSaleFrequentQuestions from "@/jsons/FrequentQuestions/HotSale.json"
import { ILanding } from "@/types"
import { getHygraphId } from "@/utils/hygraphIds"
import { getLandingSEO } from "@/utils/hygraphHelper";

export const HotSale = ({landingSEO, graphImageObject, graphWebPage }: ILanding) => {
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
        faqAccordion={HotSaleFrequentQuestions}
        showCalmRichSnippet
      />
      {render && 
        <main>
            <HotSaleLanding />
        </main>
      }
    </>
  )
}

export default HotSale;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("hot-sale"))
  const graphImageObject = {
    "@type": "ImageObject",
    "@id":"https://calmessimple.com.ar/hot-sale/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2019/10/MejorPuntuado.svg"
}
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/hot-sale/#webpage",
    "url":"https://calmessimple.com.ar/hot-sale/",
    "inLanguage":"es",
    "name":"Hot Sale Colchones, base de cama y almohada en Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
   },
   "primaryImageOfPage":{
    "@id":"https://calmessimple.com.ar/hot-sale/#primaryimage"
    },
    "datePublished":"2020-06-17T19:30:38+00:00",
    "dateModified":"2024-04-30T18:11:50+00:00",
  }
  return { props: { landingSEO, graphImageObject, graphWebPage } }
}