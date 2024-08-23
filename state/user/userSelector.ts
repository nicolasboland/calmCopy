import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getUserIsLogged = createSelector((state: IStore) => state.user.userStatus, userStatus => userStatus);

export const getOpenCheckoutChat = createSelector((state: IStore) => state.user.openCheckoutChat, openCheckoutChat => openCheckoutChat);

export const getUserCP = createSelector((state: IStore) => state.user.cp, cp => cp);
