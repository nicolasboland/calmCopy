import { GetStaticProps } from "next"
import SEO from "../utils/SEO/SEO"
import { ILanding } from "@/types"
import { topPage } from "@/utils/topPage"
import { useEffect, useState } from "react"
import faqAccordion from "@/jsons/FrequentQuestions/FrequentQuestions.json"
import { getHygraphId } from "@/utils/hygraphIds"
import { getLandingSEO } from "@/utils/getLandingSEO"
import NochesDePruebaEnCasa from "@/components/Pages/30NochesDePruebaEnCasa/NochesDePruebaEnCasa"

export const FAQPage = ({
  landingSEO,
  graphImageObject,
  graphWebPage
}: ILanding) => {
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
        faqAccordion={faqAccordion.TestNights}
        showCalmRichSnippet
      />
      {render && (
        <main>
          <NochesDePruebaEnCasa />
        </main>
      )}
    </>
  )
}

export default FAQPage

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("30-noches"))
  const graphImageObject = {
    "@type": "ImageObject",
    "@id":
      "https://calmessimple.com.ar/30-noches-de-prueba-en-casa/#primaryimage",
    url: "https://calmessimple.com.ar/wp-content/uploads/2021/09/300x300_Ícono_Paso-04.svg"
  }
  const graphWebPage = {
    "@type": "WebPage",
    "@id": "https://calmessimple.com.ar/30-noches-de-prueba-en-casa/#webpage",
    url: "https://calmessimple.com.ar/30-noches-de-prueba-en-casa/",
    inLanguage: "es",
    name: "30 noches de prueba en casa | Calm | El colchon perfecto para todos",
    isPartOf: {
      "@id": "https://calmessimple.com.ar/#website"
    },
    primaryImageOfPage: {
      "@id":
        "https://calmessimple.com.ar/30-noches-de-prueba-en-casa/#primaryimage"
    },
    datePublished: "2019-11-01T22:48:05+00:00",
    dateModified: "2021-11-01T01:47:29+00:00"
  }

  return { props: { landingSEO, graphWebPage, graphImageObject } }
}
