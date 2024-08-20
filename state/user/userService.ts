import axios from 'axios';

export const getUserIsLogged = async () => {
  const requestConfig = {
    withCredentials: true,
    headers: {
      "Content-Type": "json/application",
    },
  };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/user/logged_user.php`, requestConfig);
  return await response.data;
}

export const logCheckoutRatio = async (checkoutURL: string) => {
  const requestConfig = {
    headers: {
      "Content-Type": "json/application",
    },
  };
  const response = await axios.get(`https://calmessimple.com.ar/lab/ms/log-checkout-ratio/index.php?checkoutURL=${checkoutURL}`, requestConfig);
  return await response.data;
}

export const logCheckoutForm = async (form: unknown) => {
  
  const requestConfig = {
    headers: {
      "Content-Type": "json/application",
    },
  };
  const response = await axios.post(
    `https://calmessimple.com.ar/lab/ms/log-checkout-form/index.php`,
    form,
    requestConfig
  );
  return await response.data;
}