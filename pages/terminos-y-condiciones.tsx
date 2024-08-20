import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';
import { getLandingSEO } from '@/utils/getLandingSEO';
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types'
import { topPage } from '@/utils/topPage';
import TermsAndConditionLanding from '../components/Pages/TermsAndConditionLanding/TermsAndConditionLanding'
import { getHygraphId } from '@/utils/hygraphIds';

export const TermsAndCondition = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
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
            <TermsAndConditionLanding/> 
          </main>
        }
      </>
    )
}

export default TermsAndCondition;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
    const landingSEO = await getLandingSEO(getHygraphId("tyc-landing"), "footer_static_seo_data")
   const graphWebPage =  {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/terminos-y-condiciones/#webpage",
    "url":"https://calmessimple.com.ar/terminos-y-condiciones/",
    "inLanguage":"es",
    "name":"terminos y condiciones | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-02T00:17:47+00:00",
    "dateModified":"2023-08-07T19:32:54+00:00"
 }
    return { props: {landingSEO, graphWebPage} }
  }