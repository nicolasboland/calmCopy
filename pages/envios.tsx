import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import Envios from '@/components/Pages/Envios/Envios';
import { getHygraphId } from '@/utils/hygraphIds';

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
        showCalmRichSnippet
      />
      {render && 
        <main>
            <Envios/>
        </main>
      }
    </>
  )
}

export default FAQPage;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("envios"))
  const graphImageObject = {
    "@type": "ImageObject",
    "@id": "https://calmessimple.com.ar/envios/#primaryimage",
    "url": "https://calmessimple.com.ar/wp-content/uploads/2020/06/Diseño-sin-título-39.png",
    "width": 1080,
    "height": 1080
}
  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/envios/#webpage",
    "url":"https://calmessimple.com.ar/envios/",
    "inLanguage":"es",
    "name":"Envios | Es simple, envío gratis a todo el país | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage": {
        "@id": "https://calmessimple.com.ar/envios/#primaryimage"
    },
    "datePublished":"2019-11-03T15:00:48+00:00",
    "dateModified":"2022-02-11T15:27:43+00:00"
  }
  return { props: {landingSEO, graphWebPage, graphImageObject} }
}