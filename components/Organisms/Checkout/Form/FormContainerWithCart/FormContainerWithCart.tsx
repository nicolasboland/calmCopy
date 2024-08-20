import FormContainer from "../FormContainer/FormContainer";
import CartDesktop from "../../CartDesktop/CartDesktop";
import React, { useEffect, useState } from "react";
import { onGetCheckoutOnlyToPay, onGetTokenCheckout, onVerifyOrderExistReq, onGetPublicIpClient, onDefineCheckoutPath} from "@/state/order/orderActions";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@/state/types";
import { getCheckoutOnlyToPay, getCheckoutPath, getOrderExist, getToken } from "@/state/order/orderSelector";
import { useRouter } from "next/router";
import { getCartData } from "@/state/cart/cartSelector";
import Spinner from "../../Spinner/Spinner";
import { onGetCart } from "@/state/cart/cartActions";
import { getUserIsLogged } from "@/state/user/userSelector";
import CartSummary from "../../CartSummary/CartSummary";
import { onGetUserIsLogged } from "@/state/user/userActions";
import FooterCheckout from "@/components/Organisms/FooterCheckout/FooterCheckout";
import { CalmLogo, ImgCalmLogo, CheckoutContainer, Wraper } from "./styled";
import { onGetAbandonedCartCheckout } from "@/state/mailchimp/mailchimpActions";
import { productURLRedirectionByEnv } from "@/utils/productURLRedirectionByEnv";
import { useWidth } from "@/hooks/useWidth";

function FormContainerWithCart() {
  const width = useWidth();
  const breakpoint = 1024
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state: IStore) => getToken(state));
  const [canInvokeCart, setCanInvokeCart] = useState(false);
  const [paramsFromURL, setParamsFromURL] = useState(false);
  const [enableCheckoutForm, setEnableCheckoutForm] = useState(false)
  const [hasItems, setHasItems] = useState(false);
  const checkoutOnlyToPay = useSelector((state: IStore) => getCheckoutOnlyToPay(state));
  const infoOrderExist = useSelector((state: IStore) => getOrderExist(state));
  const cartData = useSelector(getCartData);
  const order_id_storage = localStorage.getItem("order_id");
  const order_key_storage = localStorage.getItem("order_key");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    let order_id = searchParams.get("order_id");
    let order_key = searchParams.get("order_key");

    if (order_id && order_key) {

      localStorage.setItem("id_to_pay", order_id);
      localStorage.setItem("key_to_pay", order_key);

      dispatch(onVerifyOrderExistReq(parseInt(order_id), order_key));
      setParamsFromURL(true);

    } else {

      window.history.replaceState(null, "", `${window.location.pathname}`);
      setParamsFromURL(false);

      if (order_key_storage && order_id_storage) {
        dispatch(onVerifyOrderExistReq(parseInt(order_id_storage), order_key_storage));
      } else {
        setCanInvokeCart(true);
      }
    }
  }, [router.asPath]);

  useEffect(() => {
    dispatch(onGetTokenCheckout());
    dispatch(onGetUserIsLogged())
    dispatch(onGetPublicIpClient());
  }, []);

  useEffect(() => {
    sessionStorage.removeItem("tokenSession");
    
    if (token?.success === 1) {
      sessionStorage.setItem("tokenSession", token.token);
    } else if(token !== undefined && !token) {
      router.push("/producto/colchon-calm");
    }
  }, [token]);

  useEffect(() => {
    const getAbandonedCartCheckout = async (mcCartHash: string) => {
      await dispatch(onGetAbandonedCartCheckout(mcCartHash))
    }

    let mcCartHash = typeof router.query.mc_cart_id == "string" ? router.query.mc_cart_id : false;
    if(mcCartHash) {
      getAbandonedCartCheckout(mcCartHash)
    }
  }, [router.query])

  useEffect(() => {
    if (canInvokeCart) {
      
      dispatch(onGetCart());
    }
  }, [canInvokeCart]);

  useEffect(() => {
    if (infoOrderExist) {
      const { order_exist, order_paid } = infoOrderExist;

      if (order_exist) {
        if (order_paid) {
          localStorage.removeItem("order_id");
          localStorage.removeItem("order_key");
          router.push(
            `/${process.env.NEXT_PUBLIC_CHECKOUT_PATH_HEADLESS}/order-received?id=${infoOrderExist?.order_data?.id}&order_key=${infoOrderExist?.order_data?.order_key}`
          );
          return;
        }

        if (paramsFromURL) {
          dispatch(onGetCheckoutOnlyToPay(true))
          return;
        }

        if (!cartData) {
          setCanInvokeCart(true);
        } else {
          setEnableCheckoutForm(true)
        }

        return;
      }

      if (paramsFromURL && order_id_storage && order_key_storage) {

        window.history.replaceState(null, "", `${window.location.pathname}`);
        setParamsFromURL(false);
        dispatch(onVerifyOrderExistReq(parseInt(order_id_storage), order_key_storage));
        return;
      }

      localStorage.removeItem("order_id");
      localStorage.removeItem("order_key");

      if (!cartData) {
        setCanInvokeCart(true);
      }

      return;
    }
  }, [infoOrderExist]);

  useEffect(() => {
    if (cartData && canInvokeCart) {
      if (cartData?.items_count === 0) {
        router.push("/producto/colchon-calm");
      } else {
        setHasItems(true);
      }
    }
  }, [cartData, canInvokeCart]);

  useEffect(() => {
    if(checkoutOnlyToPay) {
      setEnableCheckoutForm(true)
    } else {
      if(hasItems) {
        setEnableCheckoutForm(true)
      }
    }
  }, [hasItems, checkoutOnlyToPay])

  return (
    
    <main>
      {!enableCheckoutForm || !token ? (
        <Spinner isBlack isCenterScreen />
      ) : (
        <div>
            <CheckoutContainer>
              <CalmLogo>
                <a href={productURLRedirectionByEnv('/')}>
                  <ImgCalmLogo src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/2042f924-7f3c-46e4-dba4-a26c77abff00/fit=cover"/>
                </a>
              </CalmLogo>

              <Wraper $isForm>
                <FormContainer/>
              </Wraper>

              <Wraper>
                {
                  width > breakpoint &&
                    <CartDesktop/>
                }
                <CartSummary/>
              </Wraper>
            </CheckoutContainer>
            <FooterCheckout/>
        </div>
      )}
    </main>
  );
}

export default FormContainerWithCart;
