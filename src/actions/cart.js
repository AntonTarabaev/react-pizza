import { CartActionTypes } from '../constants/action-types';

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: itemId,
});

export const removeAllItems = () => ({
  type: CartActionTypes.REMOVE_ALL_ITEMS,
});

export const calculateCountAndPrice = () => ({
  type: CartActionTypes.CALCULATE_COUNT_AND_PRICE,
});

export const incrementCartItem = (itemId) => ({
  type: CartActionTypes.INCREMENT_CART_ITEM,
  payload: itemId,
});

export const decrementCartItem = (itemId) => ({
  type: CartActionTypes.DECREMENT_CART_ITEM,
  payload: itemId,
});
