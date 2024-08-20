import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGetHomeRelatedProducts } from '@/state/products/productsActions';
import { IStore } from '@/state/types';
import { getHygraphId } from '@/utils/hygraphIds';
import QuienesSomos from '@/components/Pages/QuienesSomos/QuienesSomos';
import { getLoadingRedirect } from '@/state/loading/loadingSelector';
import { GlobalSpinner } from "@/components/Molecules/GlobalSpinner/GlobalSpinner"

export const AboutUs = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const dispatch = useDispatch();
  const loadingRedirect = useSelector((state: IStore) => getLoadingRedirect(state))
  
  useEffect(() => {
    topPage()
    dispatch(onGetHomeRelatedProducts());
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
      {!loadingRedirect ?
        <main>
          <QuienesSomos />
         </main>
        : <GlobalSpinner/>
      }
    </>
  )
}

export default AboutUs;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("quienes-somos"), "footer_static_seo_data")
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/quienes-somos/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2021/10/ImagenHistoria.jpg",
    "width":1280,
    "height":878,
    "caption":"el equipo de calm"
}
 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/quienes-somos/#webpage",
    "url":"https://calmessimple.com.ar/quienes-somos/",
    "inLanguage":"es",
    "name":"quienes somos | Calm",
    "isPartOf":{
       "@id":"https://calmessimple.com.ar/#website"
    },
    "primaryImageOfPage":{
       "@id":"https://calmessimple.com.ar/quienes-somos/#primaryimage"
    },
    "datePublished":"2019-11-01T04:16:01+00:00",
    "dateModified":"2023-07-13T17:50:11+00:00"
 }
  return { props: {landingSEO, graphImageObject, graphWebPage} }
}