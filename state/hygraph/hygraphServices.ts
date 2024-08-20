import axios from 'axios';

export const getPillsData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };

  try {
    const response = await axios.get(
      `/api/hygraph/pills_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
      requestConfig
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}


export const getBigBannersData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/bigbanners?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getHeadBannersData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/head_banners_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getProductAndCategorySEOData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/category_seo_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getSidecartData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/sidecart_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getStaticSEOData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/other_static_seo_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getTYCContentData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/tyc_content_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getTYCPromoContentData = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/tyc_promotion_content_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getPopup = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/popup_data?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getBannerAndCucarda = async () => {
  const requestConfig = {
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
      "mode": 'no-cors'
    },
  };
  try {
  const response = await axios.get(
    `/api/hygraph/banner_and_cucarda?v=${process.env.NEXT_PUBLIC_HYGRAPH_API_VERSION}`,
    requestConfig
  );
  return response.data;
  } catch (error) {
    throw error;
  }
}

export const getClearCache = async (urls: string[]) => {
  try {
    const response = await fetch('/api/clearCache', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ urls })
    });

    const data = await response.json();

    if (data.success) {
      console.log('Cache purged successfully');
      return data.success;
    } else {
      console.error('Failed to purge cache:', data.message);
      return data;
    }
  } catch (error) {
    console.error('Error purging cache:', error);
    throw error;
  }
};