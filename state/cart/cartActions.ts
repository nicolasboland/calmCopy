import {
  onAddCouponLoadingFinished,
  onAddCouponLoadingStart,
  onAddToCartLoadingFinished,
  onAddToCartLoadingStart,
  onCalcShippingCostLoadingFinished,
  onCalcShippingCostLoadingStart,
  onDeleteCouponLoadingFinished,
  onDeleteCouponLoadingStart,
  onDeleteToCartLoadingFinished,
  onDeleteToCartLoadingStart,
  onEmptyCartLoadingFinished,
  onEmptyCartLoadingStart,
  onGetCartLoadingFinished,
  onGetCartLoadingStart,
  onUpdateToCartLoadingFinished,
  onUpdateToCartLoadingStart,
} from '../loading/loadingActions';

import {
  ON_ADD_ITEM_TO_CART_FAILED,
  ON_ADD_ITEM_TO_CART_SUCCEEDED,
  ON_GET_CART_FAILED,
  ON_GET_CART_SUCCEEDED,
  ON_REMOVE_ITEM_FROM_CART_FAILED,
  ON_REMOVE_ITEM_FROM_CART_SUCCEEDED,
  ON_UPDATE_ITEM_FROM_CART_FAILED,
  ON_UPDATE_ITEM_FROM_CART_SUCCEEDED,
  ON_ADD_COUPON_TO_CART_FAILED,
  ON_ADD_COUPON_TO_CART_SUCCEEDED,
  ON_CLEAR_CART_FAILED,
  ON_CLEAR_CART_SUCCEEDED,
  ON_REMOVE_COUPON_TO_CART_FAILED,
  ON_REMOVE_COUPON_TO_CART_SUCCEEDED,
  ON_UPDATE_SHIPPING_FROM_CART_FAILED,
  ON_UPDATE_SHIPPING_FROM_CART_SUCCEEDED,
  ON_GET_CART_RELATED_PRODUCTS_SUCCEEDED,
  ON_GET_CART_RELATED_PRODUCTS_FAILED,
  ON_OPEN_SIDECART,
  ON_CLOSE_SIDECART,
  ON_GET_VARIATION_SUCCEEDED,
  ON_GET_VARIATION_FAILED,
  ON_UPDATE_CART_DATA_WITH_SESSION,
  ON_SHOW_FIXEDCART,
  ON_CLOSE_FIXEDCART,
  ON_VISIBLE_FIXEDCART,
  ON_NOTVISIBLE_FIXEDCART,
  ON_MOBILE_MENU_OPEN,
  ON_MOBILE_MENU_CLOSE
} from './cartConstants';

import {
  getCart,
  addItemToCart,
  removeItem,
  updateItem,
  clearCart,
  addCouponToCart,
  removeCouponFromCart,
  updateShippingFromCart,
  getCartRelatedProducts,
  getVariation
} from './cartServices';

export const onGetCart = () => {
  return async (dispatch: any) => {

    dispatch(onGetCartLoadingStart());
    const response = await getCart();

    if (response.dataCart.status == 200) {
      dispatch(onGetCartSucceeded(response));
      dispatch(onGetCartLoadingFinished())

    } else {
      dispatch(onGetCartFailed());
      dispatch(onGetCartLoadingFinished())
    }
  };
};

const onGetCartSucceeded = (cartData: any) => ({
  type: ON_GET_CART_SUCCEEDED,
  cartData
});

const onGetCartFailed = () => ({
  type: ON_GET_CART_FAILED
});

export const onGetVariation = (id: string) => {
  return async (dispatch: any) => {
    const response = await getVariation(id);
    if (response) {
      dispatch(onGetVariationSucceeded(response));
    } else {
      dispatch(onGetVariationFailed());
    }
  };
};

const onGetVariationSucceeded = (variationData: any) => ({
  type: ON_GET_VARIATION_SUCCEEDED,
  variationData
});

const onGetVariationFailed = () => ({
  type: ON_GET_VARIATION_FAILED
});

export const onAddItemToCart = (id: number, quantity: number, hasEDE: boolean = false) => {
  return async (dispatch: any) => {

    dispatch(onAddToCartLoadingStart());
    if(hasEDE) {
      await addItemToCart(2024353, 1);
    }
    const response = await addItemToCart(id, quantity);

    if (response.dataCart.status == 200) {
      dispatch(onAddItemToCartSucceeded(response));
      dispatch(onAddToCartLoadingFinished())

    } else {
      dispatch(onAddItemToCartFailed(response.dataCart?.data?.message as string ?? ""));
      dispatch(onAddToCartLoadingFinished())
    }
  };
};

const onAddItemToCartSucceeded = (cartData: any) => ({
  type: ON_ADD_ITEM_TO_CART_SUCCEEDED,
  cartData
});

const onAddItemToCartFailed = (errorDetail: string) => ({
  type: ON_ADD_ITEM_TO_CART_FAILED,
  errorDetail
});

export const onRemoveItemFromCart = (key: string, product?: string) => {
  return async (dispatch: any) => {

    dispatch(onDeleteToCartLoadingStart())
    const response = await removeItem(key, product);

    if (response.dataCart.status == 200) {
      dispatch(onRemoveItemFromCartSucceeded(response));
      dispatch(onDeleteToCartLoadingFinished());

    } else {
      dispatch(onRemoveItemFromCartFailed());
      dispatch(onDeleteToCartLoadingFinished());
    }
  };
};

const onRemoveItemFromCartSucceeded = (cartData: any) => ({
  type: ON_REMOVE_ITEM_FROM_CART_SUCCEEDED,
  cartData
});

const onRemoveItemFromCartFailed = () => ({
  type: ON_REMOVE_ITEM_FROM_CART_FAILED
});

export const onUpdateItemFromCart = (key: string, quantity: number, product?: string) => {

  return async (dispatch: any) => {

    dispatch(onUpdateToCartLoadingStart())
    const response = await updateItem(key, quantity, product);

    if (response.dataCart.status == 200) {
      dispatch(onUpdateItemFromCartSucceeded(response));
      dispatch(onUpdateToCartLoadingFinished())

    } else {
      dispatch(onUpdateItemFromCartFailed());
      dispatch(onUpdateToCartLoadingFinished())

    }
  };
};

const onUpdateItemFromCartSucceeded = (cartData: any) => ({
  type: ON_UPDATE_ITEM_FROM_CART_SUCCEEDED,
  cartData
});

const onUpdateItemFromCartFailed = () => ({
  type: ON_UPDATE_ITEM_FROM_CART_FAILED
});

// export const onClearCart = (keys: { key: string }[]) => {
//   return async (dispatch: any) => {

//     dispatch(onEmptyCartLoadingStart());
//     const response = await clearCart(keys);

//     if (response.dataCart.status == 200) {
//       dispatch(onClearCartSucceeded(response));
//       dispatch(onEmptyCartLoadingFinished());

//     } else {
//       dispatch(onClearCartFailed());
//       dispatch(onEmptyCartLoadingFinished());

//     }
//   };
// };

export const onRemoveAllItemsCart = (keys: { key: string }[]) => {
  return async (dispatch: any) => {

    dispatch(onEmptyCartLoadingStart());

    const fetchData = async (key: string) => {
      const response = await updateItem(key, 0);
      return response.dataCart;
    };

    const fetchDataSequentially = async () => {
      let results = [];
      for (const item of keys) {
        const data = await fetchData(item.key);
        results.push(data);
      }
      return results;
    };

    fetchDataSequentially()
      .then(res => {
        dispatch(onClearCartSucceeded(res));
        dispatch(onEmptyCartLoadingFinished());
      })
      .catch(error => {
        console.error("Error:", error);
        dispatch(onClearCartFailed());
        dispatch(onEmptyCartLoadingFinished());
      });
  };
};

const onClearCartSucceeded = (cartData: any) => ({
  type: ON_CLEAR_CART_SUCCEEDED,
  cartData
});

const onClearCartFailed = () => ({
  type: ON_CLEAR_CART_FAILED
});

export const onAddCouponToCart = (code: string) => {
  return async (dispatch: any) => {

    dispatch(onAddCouponLoadingStart());
    const response = await addCouponToCart(code);

    if (response.dataCart.status == 200) {
      dispatch(onAddCouponToCartSucceeded(response));
      dispatch(onAddCouponLoadingFinished());

    } else {
      dispatch(onAddCouponToCartFailed(response.dataCart.data['message']));

      dispatch(onAddCouponLoadingFinished());
    }
  };
};

const onAddCouponToCartSucceeded = (cartData: any) => ({
  type: ON_ADD_COUPON_TO_CART_SUCCEEDED,
  cartData
});

const onAddCouponToCartFailed = (errorDetail: any) => ({
  type: ON_ADD_COUPON_TO_CART_FAILED,
  errorDetail
});

export const onRemoveCouponFromCart = (code: string) => {
  return async (dispatch: any) => {

    dispatch(onDeleteCouponLoadingStart());
    const response = await removeCouponFromCart(code);

    if (response.dataCart.status == 200) {
      dispatch(onRemoveCouponFromCartSucceeded(response));
      dispatch(onDeleteCouponLoadingFinished());

    } else {
      dispatch(onRemoveCouponFromCartFailed());
      dispatch(onDeleteCouponLoadingFinished());

    }
  };
};

const onRemoveCouponFromCartSucceeded = (cartData: any) => ({
  type: ON_REMOVE_COUPON_TO_CART_SUCCEEDED,
  cartData
});

const onRemoveCouponFromCartFailed = () => ({
  type: ON_REMOVE_COUPON_TO_CART_FAILED
});

export const onUpdateShippingFromCart = (postcode: string) => {
  return async (dispatch: any) => {

    dispatch(onCalcShippingCostLoadingStart());
    const response = await updateShippingFromCart(postcode);

    if (response.dataCart.status == 200) {
      dispatch(onUpdateShippingFromCartSucceeded(response));
      dispatch(onCalcShippingCostLoadingFinished());

    } else {
      dispatch(onUpdateShippingFromCartFailed());
      dispatch(onCalcShippingCostLoadingFinished());

    }
  };
};

const onUpdateShippingFromCartSucceeded = (cartData: any) => ({
  type: ON_UPDATE_SHIPPING_FROM_CART_SUCCEEDED,
  cartData
});

const onUpdateShippingFromCartFailed = () => ({
  type: ON_UPDATE_SHIPPING_FROM_CART_FAILED
});

export const onGetCartRelatedProducts = (ids: string[]) => {
  return async (dispatch: any) => {
    const response = await getCartRelatedProducts(ids);
    if (response) {
      dispatch(onGetCartRelatedProductsSucceeded(response));
    } else {
      dispatch(onGetCartRelatedProductsFailed());
    }
  };
};

const onGetCartRelatedProductsSucceeded = (productData: any) => ({
  type: ON_GET_CART_RELATED_PRODUCTS_SUCCEEDED,
  productData
});

const onGetCartRelatedProductsFailed = () => ({
  type: ON_GET_CART_RELATED_PRODUCTS_FAILED
});

export const onOpenSideCart = () => ({
  type: ON_OPEN_SIDECART
});

export const onCloseSideCart = () => ({
  type: ON_CLOSE_SIDECART
});

export const onShowCart = () => ({
  type: ON_SHOW_FIXEDCART
});

export const onCloseCart = () => ({
  type: ON_CLOSE_FIXEDCART
});

export const isATCVisible = () => ({
  type: ON_VISIBLE_FIXEDCART
});

export const isATCNotVisible = () => ({
  type: ON_NOTVISIBLE_FIXEDCART
});

export const onUpdateCartDataWithSession = (cartData: string) => ({
  type: ON_UPDATE_CART_DATA_WITH_SESSION,
  cartData
});

export const onMobileMenuOpen = () => ({
  type: ON_MOBILE_MENU_OPEN
});

export const onMobileMenuClose = () => ({
  type: ON_MOBILE_MENU_CLOSE
});
