import { GetStaticProps } from 'next'
import { ILanding } from '@/types'
import { getLandingSEO } from '@/utils/hygraphHelper'
import { useEffect, useState } from 'react'
import { topPage } from '@/utils/topPage'
import SEO from '@/utils/SEO/SEO'
import { getHygraphId } from '@/utils/hygraphIds'
import FormContainerWithCart from '@/components/Organisms/Checkout/Form/FormContainerWithCart/FormContainerWithCart'

export const Checkout = ({
  landingSEO,
  graphImageObject,
  graphWebPage,
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
       <FormContainerWithCart/>
      )}
    </>
  )
}

export default Checkout

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("pago"))

  const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/pago/#webpage",
    "url":"https://calmessimple.com.ar/pago/",
    "inLanguage":"es",
    "name":"Pago | Calm",
    "isPartOf":{
        "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-10-19T13:39:12+00:00",
    "dateModified":"2019-10-25T21:48:50+00:00"
  }
  
  return { props: { landingSEO, graphWebPage } }
}
