import React from 'react'
import faqAccordionJson from '@/jsons/FrequentQuestions/FrequentQuestions.json'
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import { ILanding } from '@/types';
import SEO from '../utils/SEO/SEO';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { GetStaticProps } from 'next'
import { getHygraphId } from '@/utils/hygraphIds'
import PickUp from '@/components/Pages/PickUp/PickUp'

function pickUpLanding({ landingSEO, graphImageObject, graphWebPage }: ILanding) {
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
        faqAccordion={faqAccordionJson.PickUp}
        showCalmRichSnippet
      />
      {render && (
        <main>
          <PickUp />
        </main>
      )}
    </>
  );
}

export default pickUpLanding

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("pick-up"), "footer_static_seo_data")
  const graphImageObject = {
      "@type": "ImageObject",
      "@id": "https://calmessimple.com.ar/pick-up/#primaryimage",
      "url": "https://calmessimple.com.ar/wp-content/uploads/2022/11/logo_calm.webp",
      "width": 1080,
      "height": 1080
  }
  const graphWebPage = {
      "@type": "WebPage",
      "@id": "https://calmessimple.com.ar/pick-up/#webpage",
      "url": "https://calmessimple.com.ar/pick-up/",
      "inLanguage": "es",
      "name": "Pick Up | Calm",
      "isPartOf": {
          "@id": "https://calmessimple.com.ar/#website"
      },
      "primaryImageOfPage": {
          "@id": "https://calmessimple.com.ar/pick-up/#primaryimage"
      },
      "datePublished": "2021-09-21T18:48:39+00:00",
      "dateModified": "2023-08-23T23:25:24+00:00"
  }
  return { props: { landingSEO, graphImageObject, graphWebPage} }
}