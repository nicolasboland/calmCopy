import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getCardInfoSelector = createSelector(
  (state: IStore) => state.order.cardData,
  (cardData) => cardData
);

export const getCreatedOrder = createSelector(
  (state: IStore) => state.order.orderCreated,
  (orderCreated) => orderCreated
);

export const getThankuContent = createSelector(
  (state: IStore) => state.order.thankuContent,
  (thankuContent) => thankuContent
);

export const getCpFlota = createSelector(
  (state: IStore) => state.order.cpFlota,
  (cpFlota) => cpFlota
);

export const getCpCaba = createSelector(
  (state: IStore) => state.order.cpCaba,
  (cpCaba) => cpCaba
);

export const getToken = createSelector(
  (state: IStore) => state.order.dataToken,
  (dataToken) => dataToken
);

export const getDeliveryTimes = createSelector(
  (state: IStore) => state.order.deliveryTimes,
  (deliveryTimes) => deliveryTimes
);

export const getTransactionError = createSelector(
  (state: IStore) => state.order.transactionError,
  (transactionError) => transactionError
);

export const getOrderExist = createSelector(
  (state: IStore) => state.order.orderExist,
  (orderExist) => orderExist
)

export const getCheckoutOnlyToPay = createSelector(
  (state: IStore) => state.order.checkoutOnlyToPay,
  (checkoutOnlyToPay) => checkoutOnlyToPay
)

export const getRDC = createSelector(
  (state: IStore) => state.order.rdcData,
  (rdcData) => rdcData
)  

export const getSeguimiento = createSelector(
  (state: IStore) => state.order.seguimiento,
  (seguimiento) => seguimiento
)

export const getForgottenEmail = createSelector(
  (state: IStore) => state.order.forgottenEmail,
  (forgottenEmail) => forgottenEmail
)

export const getPublicIpClient = createSelector(
  (state: IStore) => state.order.ipClient,
  (ipClient) => ipClient
)

export const getCheckoutPath = createSelector(
  (state: IStore) => state.order.pathCheckout,
  (pathCheckout) => pathCheckout
)