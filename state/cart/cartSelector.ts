import { createSelector } from "@reduxjs/toolkit";
import { IStore } from "../types";

export const getOpenSideCart = createSelector((state: IStore) => state.cart.openSideCart, openSideCart => openSideCart);

export const getCartItemsCount = createSelector((state: IStore) => state.cart.cartData, cartData => cartData ? cartData.items_count : "");

export const getShippingCost = createSelector((state: IStore) => state.cart.cartData?.totals?.total_shipping, shippingCost => shippingCost);

export const getCartError = createSelector((state: IStore) => state.cart, cart => {return {error: cart.error, errorDetail: cart.errorDetail, addToCartErrorDetail: cart.addToCartErrorDetail}});
export const getTotalPrice = createSelector((state: IStore) => state.cart.cartData?.totals?.total_price, total_price => total_price ?? "0");

export const getSubtotalPrice = createSelector((state: IStore) => state.cart.cartData?.totals?.total_items, total_items => total_items ?? "0");

export const getSubtotalPriceDiscount = createSelector((state: IStore) => state.cart.cartData?.totals?.total_discount, total_discount => total_discount ?? "0");

export const getCartData = createSelector((state: IStore) => state.cart.cartData, cartData => cartData);

export const getHasEDE = createSelector((state: IStore) => state.cart.cartData?.items, items => items?.some((item) => item.id === 2024353));

export const getVariationsData = createSelector((state: IStore) => state.cart.variationsData, variationsData => variationsData);

export const getCartCurrentProductsRelated = createSelector((state: IStore) => state.cart.currentProductsRelated, currentProductsRelated => currentProductsRelated);

export const getDescriptionCoupons = createSelector((state: IStore) => state.cart.descriptionCoupons, descriptionCoupons => descriptionCoupons);

export const getSKUsCommaSeparated = createSelector((state: IStore) => state.cart.cartData?.items, items => items?.map(i => i.sku).join(","));

export const getCartPostCode = createSelector((state: IStore) => state.cart.cartData?.shipping_address, shipping_address => shipping_address?.postcode);

export const getShowFixedCart = createSelector((state: IStore) => state.cart.showFixedCart, showFixedCart => showFixedCart);

export const getATCVisible = createSelector((state: IStore) => state.cart.isATCVisible, isATCVisible => isATCVisible);

export const getMobileMenu = createSelector((state: IStore) => state.cart.isMobileMenuOpen, isMobileMenuOpen => isMobileMenuOpen);