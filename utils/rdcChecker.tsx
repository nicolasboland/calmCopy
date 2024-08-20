import axios from "axios";

export const rdcEmail = async (code: string) => {
  const requestConfig = {
    withCredentials: true,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_ENDPOINT_URL_BASE}/cart/get_mail_by_rdc_coupon.php?rdc_coupon=${code}`,
    requestConfig
  );
  return await response.data;
};