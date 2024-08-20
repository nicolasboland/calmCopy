import { GetStaticProps } from "next"
import SEO from "../utils/SEO/SEO"
import { ILanding } from "@/types"
import { topPage } from "@/utils/topPage"
import { useEffect, useState } from "react"
import { getHygraphId } from "@/utils/hygraphIds"
import { getLandingSEO } from "@/utils/hygraphHelper";
import MetodoDePagoLanding from '@/components/Pages/MetodoDePago/MetodoDePagoLanding';

export const MetodoDePago = ({
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
        showCalmRichSnippet
      />
      {render && (
        <main>
          <MetodoDePagoLanding />
        </main>
      )}
    </>
  )
}

export default MetodoDePago

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("metodos-de-pago-seo"))
  const graphImageObject = {
    "@type": "ImageObject",
    "@id":"https://calmessimple.com.ar/metodos-de-pago/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2024/02/cuota-simpe_logo_0.jpg",
    "width":1500,
    "height":844
  }
  const graphWebPage = {
    "@type": "WebPage",
    "@id":"https://calmessimple.com.ar/metodos-de-pago/#webpage",
    "url":"https://calmessimple.com.ar/metodos-de-pago/",
    "inLanguage":"es",
    "name":"M\u00e9todos de Pago | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
   },
   "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/metodos-de-pago/#primaryimage"
   },
   "datePublished":"2020-07-25T21:09:17+00:00",
   "dateModified":"2024-02-05T17:36:13+00:00"
  }
  return { props: { landingSEO, graphImageObject, graphWebPage } }
}
