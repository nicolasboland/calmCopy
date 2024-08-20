import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import { getHygraphId } from '@/utils/hygraphIds';
import CompromisoDescasados from "@/components/Pages/CompromisoDescansados/CompromisoDescansados"

export const CompromisoDescansados = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
          <CompromisoDescasados />
        </main>
      }
    </>
  )
}

export default CompromisoDescansados;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("compromiso-descansados"), "footer_static_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/compromiso-descansados/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2021/09/LogoHSSolidariX-10.svg"
 }
 const graphWebPage = {
  "@type":"WebPage",
  "@id":"https://calmessimple.com.ar/compromiso-descansados/#webpage",
  "url":"https://calmessimple.com.ar/compromiso-descansados/",
  "inLanguage":"es",
  "name":"Compromiso Descansados \u00a1Don\u00e1 tu &quot;ex&quot; Colch\u00f3n! | Calm",
  "isPartOf":{
     "@id":"https://calmessimple.com.ar/#website"
  },
  "primaryImageOfPage":{
     "@id":"https://calmessimple.com.ar/compromiso-descansados/#primaryimage"
  },
  "datePublished":"2020-07-07T22:10:09+00:00",
  "dateModified":"2023-07-25T12:39:29+00:00",
  "description":"Este CyberMonday don\u00e1 el colch\u00f3n que dejas a TECHO Argentina y convertilo en un mayor descuento. Ahora no 1, sino 2 van a descansar mejor."
  }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}