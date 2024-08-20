import axios from 'axios';

export const getProduct = async (id: string) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_product_by_id.php?id=${id}`, requestConfig);
  return await response.data;
}

export const getDefaultProduct = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_default_products.php/`, requestConfig);
  return await response.data;
}

export const getHomeRelatedProducts = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_home_cross_selling_products.php`,
    requestConfig
  );
  return await response.data;
}

export const getNewRelatedProducts = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_new_cross_selling_products.php`,
    requestConfig
  );
  return await response.data;
}

export const getRelatedProducts = async (id: string) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_cross_selling_products.php?id=${id}`,
    requestConfig
  );
  return await response.data;
}

export const getShippingTime = async (cp: string, sku: string[] | string) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/shipping/get_business_days.php?postcode=${cp}&products=${sku}`,
    requestConfig
  );
  return await response.data;
}

export const getHolidays = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/shipping/get_holidays.php`,
  requestConfig
);
return await response.data;
}

export const getStock = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/stocks/get_stock_detailed.php`,
    requestConfig
    );
    return await response.data;
  }

  export const getStockAndPrices = async (id: string) => {
    const requestConfig = {
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
        "mode": 'no-cors'
      },
    };
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/products/get_stock_and_price_by_id.php?id=${id}&v=${process.env.NEXT_PUBLIC_API_VERSION}`,
      requestConfig
      );
      return await response.data;
}

export const getUnavailableDays = async (postcode: number, products: string[]) => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  const response = await axios.get(`https://calmessimple.com.ar/lab/ms/unavailable-days/index.php?postcode=${postcode}&products=${products}`,
  requestConfig
);
return await response.data;
}
