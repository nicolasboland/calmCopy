import { GetStaticProps } from 'next'
import SEO from '../utils/SEO/SEO';
import { IHomeLanding } from '@/types';
import { useEffect, useState } from 'react';
import { topPage } from '@/utils/topPage';
import axios from 'axios';
import { IProduct } from '@/state/products/types';
import HomePage from '@/components/Pages/Home/Home';
import { IPlainImageSlide } from "@/state/hygraph/types";
import { SkeletonLoader } from "@/components/Molecules/SkeletonLoader/SkeletonLoader"

export const Home = ({landingSEO, bigBanner, graphImageObject, graphWebPage, currentProductsRelated, colchon}: IHomeLanding) => {
  const [bigBannerData, setBigBannerData] = useState<IPlainImageSlide[] | undefined>() /* reemplazar */

  useEffect(() => {
    topPage()
    if(process.env.NEXT_PUBLIC_NEXT_PROMO == "true") {
      const requestConfig = {
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*",
          "mode": 'no-cors'
        },
      };
      axios.get(
        `/api/hygraph/home_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
        requestConfig
      ).then(({data}) => {
        setBigBannerData(data?.data.bigBanners)})
    } else {
      setBigBannerData(bigBanner)
    }
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
        productReviewsSKUs='C140'
        bigBanner={bigBanner}
      />
        <main>
          <HomePage 
          bigBannerData={bigBanner} 
          currentProductsRelated={currentProductsRelated}
          colchon={colchon}/>
      </main>
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<IHomeLanding> = async () => {
  const graphImageObject = {
    "@type":"ImageObject",
    "@id":"https://calmessimple.com.ar/#primaryimage",
    "url":"https://calmessimple.com.ar/wp-content/uploads/2022/11/Colch\u00f3nPlusTwitter.png",
    "width":1500,
    "height":1000,
    "caption":"colchon calm"
 }
 const graphWebPage = {
    "@type":"WebPage",
    "@id":"https://calmessimple.com.ar/#webpage",
    "url":"https://calmessimple.com.ar/",
    "inLanguage":"es",
    "name":"Calm: El Colchon Perfecto para Todxs | Probalo 30 noches en casa",
    "isPartOf":{
      "@id":"https://calmessimple.com.ar/#website"
    },
    "about":{
      "@id":"https://calmessimple.com.ar/#organization"
    },
    "primaryImageOfPage":{
      "@id":"https://calmessimple.com.ar/#primaryimage"
    },
    "datePublished":"2019-10-22T11:34:46+00:00",
    "dateModified":"2023-07-24T23:37:43+00:00",
    "description":"Compr\u00e1 online colchones y todo lo que necesitas para descansar bien. Env\u00edo gratis  &#x1F6FB; Hasta 12 cuotas sin inter\u00e9s &#x1F4B3; El mejor puntuado &#x2B50;"
  }

  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };

  const p1 = new Promise((resolve, reject) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_home_cross_selling_products.php?v=${process.env.NEXT_PUBLIC_API_VERSION}`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch((error) => {resolve(undefined)})
  });

  const p2 = new Promise((resolve, reject) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=334&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch((error) => {resolve(undefined)})
  });

  const p3 = new Promise((resolve, reject) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_HYGRAPH_URL}/api/hygraph/home_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch((error) => {resolve(undefined)})
  });

  const props = await Promise.all([p1, p2, p3]).then(
    (values: any[]) => {
      return {
        props: {
          landingSEO: values[2] && values[2].data && values[2].data.landingSEO ? values[2].data.landingSEO : {title: "", description: "", url: "", image: ""},
          bigBanner : values[2] && values[2].data && values[2].data.bigBanners ? values[2].data.bigBanners : null,
          graphImageObject,
          graphWebPage,
          currentProductsRelated: values.length > 0 ? values[0] as IProduct[] : null,
          colchon: values.length > 1 ? values[1] as IProduct : null
        }
      }
    }
  );

  return props;
}