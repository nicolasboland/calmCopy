import { useDispatch, useSelector } from "react-redux";
import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { ILanding } from '@/types';
import { getLandingSEO } from '@/utils/getLandingSEO';
import { topPage } from '@/utils/topPage';
import { useEffect, useState } from 'react';
import { IStore } from "@/state/types";
import { getCurrentProductsRelated} from "@/state/products/productsSelector";
import { onGetHomeRelatedProducts} from "@/state/products/productsActions";
import { getHygraphId } from "@/utils/hygraphIds";
import OpinionesRealesDeClientesReales from "@/components/Pages/OpinionesRealesDeClientesReales/OpinionesRealesDeClientesReales";

export const ClientReviews = ({landingSEO, graphImageObject, graphWebPage}: ILanding) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    topPage()
    setRender(true)
  }, [])
  const dispatch = useDispatch();
  const currentProductsRelated = useSelector((state: IStore) => getCurrentProductsRelated(state))

  useEffect(() => {
    dispatch(onGetHomeRelatedProducts());
  }, []);

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
            <OpinionesRealesDeClientesReales currentProductsRelated={currentProductsRelated}/>
        </main>
      }
    </>
  )
}

export default ClientReviews;

export const getStaticProps: GetStaticProps<ILanding> = async () => {
  const landingSEO = await getLandingSEO(getHygraphId("opiniones-reales"), "footer_static_seo_data")
 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/opiniones-reales-de-clientes-reales/#webpage",
    "url":"https://calmessimple.com.ar/opiniones-reales-de-clientes-reales/",
    "inLanguage":"es",
    "name":"Opiniones reales de clientes reales | Calm",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "datePublished":"2019-11-20T20:42:23+00:00",
    "dateModified":"2022-09-08T18:30:11+00:00"
  }
  return { props: {landingSEO, graphWebPage} }
}