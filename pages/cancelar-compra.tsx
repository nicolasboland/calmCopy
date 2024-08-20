import { GetStaticProps } from "next"
import SEO from "../utils/SEO/SEO"
import { ILanding } from "@/types"
import { topPage } from "@/utils/topPage"
import { useEffect, useState } from "react"
import { getHygraphId } from "@/utils/hygraphIds"
import { getLandingSEO } from "@/utils/getLandingSEO"
import CancelarCompra from "@/components/Pages/CancelarCompra/CancelarCompra"

export const CancelPurchase = ({
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
          <CancelarCompra />
        </main>
      )}
    </>
  )
}

export default CancelPurchase

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(
    getHygraphId("cancelar-compra"),
    "footer_static_seo_data"
  )
  const graphImageObject = {
    "@type": "ImageObject",
    "@id": "https://calmessimple.com.ar/cancelar-compra/#primaryimage",
    "url": "https://calmessimple.com.ar/wp-content/uploads/2022/11/logo_calm.webp",
    "width": 1080,
    "height": 1080,
    "caption": "Calm"
  }
  const graphWebPage = {
    "@type": "WebPage",
    "@id": "https://calmessimple.com.ar/cancelar-compra/#webpage",
    "url": "https://calmessimple.com.ar/cancelar-compra/",
    "inLanguage": "es",
    "name": "cancelar compra | Calm",
    "isPartOf": {
      "@id": "https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage": {
      "@id": "https://calmessimple.com.ar/cancelar-compra/#primaryimage"
    },
    "datePublished": "2021-07-14T15:09:10+00:00",
    "dateModified": "2023-07-13T17:46:25+00:00"
  }
  return { props: { landingSEO, graphImageObject, graphWebPage } }
}
