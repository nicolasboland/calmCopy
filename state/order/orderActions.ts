import {
  onGetCardInfoLoadingFinished,
  onGetCardInfoLoadingStart,
  onGetOrderLoadingFinished,
  onRDCLoadingStart,
  onRDCLoadingFinished,
  onRedirectLoadingStart,
  onRedirectLoadingFinished,
  onGetForgottenEmailLoadingStart,
  onGetForgottenEmailLoadingFinished
} from "../loading/loadingActions";
//import { onLogCheckoutRatio } from "../user/userActions";
import {
  ON_GET_CARD_INFO_FAILED,
  ON_GET_CARD_INFO_SUCCEEDED,
  ON_GET_ORDER_FAILED,
  ON_GET_ORDER_SUCCEEDED,
  ON_GET_SEGUIMIENTO_FAILED,
  ON_GET_SEGUIMIENTO_SUCCEEDED,
  ON_SEND_ORDER_DATA_SUCCEEDED,
  ON_SEND_ORDER_DATA_FAILED,
  ON_GET_CPFLOTA_SUCCEEDED,
  ON_GET_CPFLOTA_FAILED,
  ON_GET_TOKEN_SUCCEEDED,
  ON_GET_TOKEN_FAILED,
  ON_GET_DELIVERY_TIMES_SUCCEEDED,
  ON_GET_DELIVERY_TIMES_FAILED,
  ON_VERIFY_ORDER_EXIST_SUCCEEDED,
  ON_VERIFY_ORDER_EXIST_FAILED,
  ON_SET_CHECKOUT_ONLY_TO_PAY,
  ON_SEND_CLEAR_ERROR,
  ON_CLEAN_ORDER_EXISTS,
  ON_GET_RDC_SUCCEEDED,
  ON_GET_RDC_FAILED,
  ON_GET_FORGOTTEN_EMAIL_SUCCEEDED,
  ON_GET_FORGOTTEN_EMAIL_FAILED,
  ON_GET_PUBLIC_IP_SUCCEEDED,
  ON_GET_PUBLIC_IP_FAILED,
  ON_DEFINE_CHECKOUT_PATH_SUCCEEDED,
  ON_GET_CPCABA_SUCCEEDED,
  ON_GET_CPCABA_FAILED
} from "./orderConstants";
import {
  getSeguimiento,
  getOrder,
  getCardInfo,
  onSendOrderAndPaymentData,
  getCpFlota,
  onGetToken,
  getDeliveryTimes,
  onVerifyOrderExist,
  onSendLinkToPayOrderAndPaymentData,
  getRDC,
  getForgottenEmail,
  getPublicIpClient,
  getCpCaba
} from "./orderServices";
import { ICardError, ICardInfo } from "./types";

export const onGetOrder = (id: string, order_key: string) => {
  return async (dispatch: any) => {
  

    const response = await getOrder(id, order_key);
    if (response) {
      dispatch(onGetOrderSucceeded(response));
      dispatch(onGetOrderLoadingFinished());
    } else {
      dispatch(onGetOrderFailed());
      dispatch(onGetOrderLoadingFinished());
    }
  };
};

export const onGetSeguimientoAction = (orden: string, seguimiento_email: string) => {
  return async (dispatch: any) => {
    dispatch(onRedirectLoadingStart())
    const response = await getSeguimiento(seguimiento_email, orden);

    if (response && response.status == 200) {
      dispatch(onGetSeguimientoSucceeded(response.data));
      dispatch(onRedirectLoadingFinished())
    } else {
      dispatch(onGetSeguimientoFailed());
      dispatch(onRedirectLoadingFinished())
    }
  };
};

export const onGetCardInfo = (bin: number) => {
  return async (dispatch: any) => {
    dispatch(onGetCardInfoLoadingStart());
    const response = await getCardInfo(bin);

    if (response) {
      dispatch(onGetCardInfoSucceeded(response));
      dispatch(onGetCardInfoLoadingFinished());
    } else {
      dispatch(onGetCardInfoFailed());
      dispatch(onGetCardInfoLoadingFinished());
    }
  };
};

export const onSendOrderData = (data: any) => {
  
  return async (dispatch: any) => {
    const response = await onSendOrderAndPaymentData(data);
    
    if (response?.success === 1) {
      dispatch(onSendOrderDataSucceeded(response));
    } else {
      dispatch(onSendOrderDataFailed(response));
    }
  };
};

export const onSendOrderLinkToPayData = (data: any) => {
  
  return async (dispatch: any) => {
    const response = await onSendLinkToPayOrderAndPaymentData(data);
    
    if (response?.success === 1) {
      dispatch(onSendOrderDataSucceeded(response));
    } else {
      dispatch(onSendOrderDataFailed(response));
    }
  };
};

export const onClearError = () => {
  return async (dispatch: any) => {
    dispatch(onClearErrorSucceeded(null));
  };
};

export const onGetCpFlota = () => {
  return async (dispatch: any) => {
    const response = await getCpFlota();

    if (response && response.status == 200) {
      dispatch(onGetCpFlotaSucceeded(response.data));
    } else {
      dispatch(onGetCpFlotaFailed());
    }
  };
};

export const onGetDeliveryTimes = (date: string, postcode: string) => {
  return async (dispatch: any) => {
    const response = await getDeliveryTimes(date, postcode);
    
    if (response) {
      dispatch(onGetDeliveryTimesSucceeded(response));
    } else {
      dispatch(onGetDeliveryTimesFailed());
    }
  };
};

export const onGetCheckoutOnlyToPay = (checkoutOnlyToPay: boolean) => ({
  type: ON_SET_CHECKOUT_ONLY_TO_PAY,
  checkoutOnlyToPay
})


export const onGetTokenCheckout = () => {
  return async (dispatch: any) => {
    const response = await onGetToken();

    if (response) {
      dispatch(onGetTokenSucceeded(response));
    } else {
      dispatch(onGetTokenFailed());
    }
  };
};

export const onVerifyOrderExistReq = (order_id: number, order_key: string) => {
  return async (dispatch: any) => {
    const response = await onVerifyOrderExist(order_id, order_key);

    if (response) {
      dispatch(onVerifyOrderExistSucceeded(response));
    } else {
      dispatch(onVerifyOrderExistFailed());
    }
  };
}

export const onGetRDC = (mail: string) => {
  return async (dispatch: any) => {
    const response = await getRDC(mail);

    if (response) {
      dispatch(onGetRDCSucceeded(response));
    } else {
      dispatch(onGetRDCFailed());
    }
  };
}

export const onGetForgottenEmail = (mail: string) => {
  return async (dispatch: any) => {
    dispatch(onRedirectLoadingStart())
    const response = await getForgottenEmail(mail);

    if (response) {
      dispatch(onGetForgottenEmailSucceeded(response));
    dispatch(onRedirectLoadingFinished())

    } else {
      dispatch(onGetForgottenEmailFailed());
    dispatch(onRedirectLoadingFinished())

    }
  };
}

const onGetForgottenEmailSucceeded = (forgottenEmail: any) => ({
  type: ON_GET_FORGOTTEN_EMAIL_SUCCEEDED,
  forgottenEmail,
});

const onGetForgottenEmailFailed = () => ({
  type: ON_GET_FORGOTTEN_EMAIL_FAILED,
});


const onGetRDCSucceeded = (rdcData: any) => ({
  type: ON_GET_RDC_SUCCEEDED,
  rdcData,
});

const onGetRDCFailed = () => ({
  type: ON_GET_RDC_FAILED,
});

const onGetSeguimientoSucceeded = (seguimientoData: any) => ({
  type: ON_GET_SEGUIMIENTO_SUCCEEDED,
  seguimientoData,
});

const onGetSeguimientoFailed = () => ({
  type: ON_GET_SEGUIMIENTO_FAILED,
});

const onGetTokenSucceeded = (dataToken: any) => ({
  type: ON_GET_TOKEN_SUCCEEDED,
  dataToken,
});

const onGetTokenFailed = () => ({
  type: ON_GET_TOKEN_FAILED,
});

const onGetOrderSucceeded = (orderCreated: any) => ({
  type: ON_GET_ORDER_SUCCEEDED,
  orderCreated,
});

const onGetOrderFailed = () => ({
  type: ON_GET_ORDER_FAILED,
});

const onGetCardInfoSucceeded = (cardData: ICardError | ICardInfo) => ({
  type: ON_GET_CARD_INFO_SUCCEEDED,
  cardData,
});

const onGetCardInfoFailed = () => ({
  type: ON_GET_CARD_INFO_FAILED,
});

const onSendOrderDataSucceeded = (orderData: any) => ({
  type: ON_SEND_ORDER_DATA_SUCCEEDED,
  orderData,
});

const onSendOrderDataFailed = (transactionError: any) => ({
  type: ON_SEND_ORDER_DATA_FAILED,
  transactionError
});

const onGetCpFlotaSucceeded = (cpFlota: any) => ({
  type: ON_GET_CPFLOTA_SUCCEEDED,
  cpFlota,
});

const onGetCpFlotaFailed = () => ({
  type: ON_GET_CPFLOTA_FAILED,
});

const onGetDeliveryTimesSucceeded = (deliveryTimes: any) => ({
  type: ON_GET_DELIVERY_TIMES_SUCCEEDED,
  deliveryTimes,
});

const onGetDeliveryTimesFailed = () => ({
  type: ON_GET_DELIVERY_TIMES_FAILED,
});

const onVerifyOrderExistSucceeded = (orderExist: any) => ({
  type: ON_VERIFY_ORDER_EXIST_SUCCEEDED,
  orderExist,
});


const onVerifyOrderExistFailed = () => ({
  type: ON_VERIFY_ORDER_EXIST_FAILED,
});

const onClearErrorSucceeded = (transactionError: any) => ({
  type: ON_SEND_CLEAR_ERROR,
  transactionError
});


export const onCleanInfoOrderExists = () => ({
  type: ON_CLEAN_ORDER_EXISTS
})

export const onGetPublicIpClient = () => {
  return async (dispatch: any) => {
    const response = await getPublicIpClient();

    if (response) {
    dispatch(onGetPublicIpClientSucceeded(response))

    } else {
      dispatch(onGetPublicIpClientFailed());

    }
  };
}

const onGetPublicIpClientSucceeded = (ip_client: any) => ({
  type: ON_GET_PUBLIC_IP_SUCCEEDED,
  ip_client,
});


const onGetPublicIpClientFailed = () => ({
  type: ON_GET_PUBLIC_IP_FAILED,
});

export const onDefineCheckoutPath = () => {
  return (dispatch: any) => {
    const sessionCheckoutPath = sessionStorage.getItem("checkoutPath");
    if(sessionCheckoutPath) {
      dispatch(onDefineCheckoutSucceeded(sessionCheckoutPath))
     } else {
        const math_random = Math.random();
        console.log("MATH RANDOM: ", math_random);
        console.log("RATIO HEADLESS: ", process.env.NEXT_PUBLIC_CHECKOUT_HEADLESS_RATIO);
        const pathCheckout = math_random < Number(process.env.NEXT_PUBLIC_CHECKOUT_HEADLESS_RATIO) ? "pago" : "checkout-pago";
        // const pathCheckout = Math.random() < Number(process.env.NEXT_PUBLIC_CHECKOUT_HEADLESS_RATIO) ? "checkout-pago" : "pago";
        sessionStorage.setItem("checkoutPath", pathCheckout)
        dispatch(onDefineCheckoutSucceeded(pathCheckout))
        //dispatch(onLogCheckoutRatio(pathCheckout))
     }
    //0.9 90% headless 10% woo 0.1 90% woo 10% headless
  };
}

const onDefineCheckoutSucceeded = (path: string) => ({
  type: ON_DEFINE_CHECKOUT_PATH_SUCCEEDED,
  path,
});


export const onGetCpsCaba = () => {
  return async (dispatch: any) => {
    const response = await getCpCaba();

    if (response) {
      dispatch(onGetCpsCabaSucceeded(response.data.data));
    } else {
      dispatch(onGetCpsCabaFailed());

    }
  };
}

const onGetCpsCabaSucceeded = (cpCaba: any) => ({
  type: ON_GET_CPCABA_SUCCEEDED,
  cpCaba,
});

const onGetCpsCabaFailed = () => ({
  type: ON_GET_CPCABA_FAILED,
});