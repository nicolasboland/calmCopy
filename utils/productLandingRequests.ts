import { IProduct } from "@/state/products/types";
import { ILandingSEO } from "@/types";
import axios from "axios";
import { getHygraphId } from "./hygraphIds";
import { IPillsData, IBannerAndCucarda } from "@/state/hygraph/types"

const productLandingRequests = async (id: string, landingKey: string, landingSEO?: string, hasEDE?: boolean, comboIds?: string[]) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };

  const p1 = new Promise((resolve) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_cross_selling_products.php?id=${comboIds ? comboIds[0] : id}`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch(() => {resolve(undefined)})
  });

  const p2 = new Promise((resolve) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_default_products.php`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch(() => {resolve(undefined)})
  });

  const p3 = new Promise((resolve) => {
    axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=${id}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
      requestConfig
    ).then(({data}) => {resolve(data)}).catch(() => {resolve(undefined)})
  });

  const p4 = new Promise((resolve) => {
    axios.get(
      `https://calmessimple.com.ar/api/hygraph/${landingSEO ?? "almohadas_bases_product_seo_data"}?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
      requestConfig
    ).then(({data}) => {  
        resolve(data && data.data && data.data.landingSEOs && data.data.landingSEOs.find(
        (landingSEO: ILandingSEO) => landingSEO.id == getHygraphId(landingKey, process.env.NEXT_PUBLIC_CYBER_MODE == "true")
      ))
    }).catch(() => {resolve(undefined)})
  });
  

  const p5 = new Promise((resolve) => {
    axios.get(
      `https://calmessimple.com.ar/api/hygraph/pills_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
      requestConfig
    ).then(({data}) => {resolve(data && data.data && data.data.pillOfferProducts)
    }).catch(() => {resolve(undefined)})
  });

  const p6 = new Promise((resolve) => {
    axios.get(
      `https://calmessimple.com.ar/api/hygraph/banner_and_cucarda?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
      requestConfig
    ).then(({data}) => {resolve(data && data.data && data.data.pillOfferProducts)
    }).catch(() => {resolve(undefined)})
  });

  const promises = [p1, p2, p3, p4, p5, p6]

  if(hasEDE) {
    const requestConfigAPIRest = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(process.env.NEXT_PUBLIC_CONSUMER_KEY+":"+process.env.NEXT_PUBLIC_CONSUMER_SECRET)
      }
    }

    const p7 = new Promise((resolve) => {
      axios.get(
        `https://calmessimple.com.ar/wp-json/wc/v1/products/2024353`,
        requestConfigAPIRest
      ).then(({data}) => {resolve(data)}).catch(() => {resolve(undefined)})
    });

    promises.push(p7)
  }

  return await Promise.all(promises).then(
    (values) => {
      return {
        relatedProducts: values.length > 0 ? values[0] as IProduct[] : null,
        defaultProducts: values.length > 1 ? values[1] as string[] : null,
        product: values.length > 2 ? values[2] as IProduct : null,
        landingSEO: values.length > 3 && values[3] ? values[3] as ILandingSEO : {title: "", description: "", url: "", image: ""},
        pills: values.length > 4 && values[4] ? values[4] as IPillsData[] : null,
        bannerAndCucarda: values.length > 5 && values[5] ? values[5] as IBannerAndCucarda[] : null,
        priceEDE: values.length > 6 ? (values[6] as IProduct)?.price : null
      }
    }
  );
}

export default productLandingRequests;