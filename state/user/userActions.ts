import { ILoggedUser } from "./types";
import {
    ON_GET_USER_IS_LOGGED_SUCCEEDED,
    ON_GET_USER_IS_LOGGED_FAILED,
    ON_GET_OPEN_CHECKOUT_CHAT_SUCCEEDED,
    ON_ENTER_CP
} from "./userConstants";
import { getUserIsLogged, logCheckoutForm, logCheckoutRatio } from "./userService";

export const onGetUserIsLogged = () => {
    return async (dispatch: any) => {
      const response = await getUserIsLogged();
      if (response) {
        dispatch(onGetUserIsLoggedSucceeded(response));
      } else {
        dispatch(onGetUserIsLoggedFailed());
      }
    };
  };

const onGetUserIsLoggedSucceeded = (userStatus: ILoggedUser) => ({
    type: ON_GET_USER_IS_LOGGED_SUCCEEDED,
    userStatus
})

const onGetUserIsLoggedFailed = () => ({
    type: ON_GET_USER_IS_LOGGED_FAILED
  });

export const onLogCheckoutRatio = (checkoutURL: string) => {
  return async () => {
    const response = logCheckoutRatio(checkoutURL);
  };
};

export const onLogCheckoutForm = (form: unknown) => {
  return async () => {
    const response = logCheckoutForm(form);
  };
};

export const onGetOpenChekoutChatSucceeded = () => ({
  type: ON_GET_OPEN_CHECKOUT_CHAT_SUCCEEDED
})

export const onEnterCP = (cp: string) => ({
  type: ON_ENTER_CP,
  cp
})
