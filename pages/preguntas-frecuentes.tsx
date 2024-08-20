import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import QuestionsJson from "@/components/Pages/PreguntasFrecuentes/FrequentQuestions.json";
import { getHygraphId } from '@/utils/hygraphIds';
import PreguntasFrecuentes from '@/components/Pages/PreguntasFrecuentes/PreguntasFrecuentes';

export const FAQPage = ({landingSEO, graphImageObject, graphWebPage, faqAccordion}: ILanding) => {
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
          <PreguntasFrecuentes />
        </main>
      }
    </>
  )
}

export default FAQPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("faq"), "footer_static_seo_data")
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/preguntas-frecuentes/#webpage",
    "url":"https://calmessimple.com.ar/preguntas-frecuentes/",
    "inLanguage":"es",
    "name":"preguntas frecuentes | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-03T17:08:44+00:00",
    "dateModified":"2023-02-01T14:02:04+00:00"
  }
  const faqAccordion = QuestionsJson.Products.concat(QuestionsJson.PaymentMethods).concat(QuestionsJson.Shipment)
  return { props: {landingSEO, graphWebPage, faqAccordion} }
}