import { IProduct } from "@/state/products/types";
import axios from "axios";

export const getCategoryColchonRequests = async ()/* : Promise<IProduct[] | undefined> */ => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };

  const p1 = axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=334`,
    requestConfig
  ).then(({data}) => data as IProduct).catch(() => undefined);

  const p2 = axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=2067781`,
    requestConfig
  ).then(({data}) => data as IProduct).catch(() => undefined);

  const results = await Promise.all([p1, p2]);

  const validResults = results.filter((item): item is IProduct => item !== undefined);

  return validResults.length > 0 ? validResults : undefined;
}

export const getCategoryAccesorios = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };

  const p1 = axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_thumbnail_products_by_ids.php?ids=1835538;1835498&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
    requestConfig
  ).then(({data}) => data as IProduct[]).catch(() => undefined);

  return p1
}