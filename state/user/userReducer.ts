import { AnyAction } from "@reduxjs/toolkit";
import { ILoggedUser } from "./types";
import {
    ON_GET_USER_IS_LOGGED_SUCCEEDED,
    ON_GET_USER_IS_LOGGED_FAILED,
    ON_GET_OPEN_CHECKOUT_CHAT_SUCCEEDED
} from "./userConstants";

const initialState: ILoggedUser = {
    error: false,
    openCheckoutChat: false,
};

export default (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case ON_GET_USER_IS_LOGGED_SUCCEEDED:
            return {
                ...state,
                userStatus: action.userStatus
            };
        case ON_GET_USER_IS_LOGGED_FAILED:
            return {
                ...state,
                error: true
            };
        case ON_GET_OPEN_CHECKOUT_CHAT_SUCCEEDED:
            return {
                ...state,
                openCheckoutChat: true
            };
        default:
           return state;
    }
}