import { CartActionTypes } from '../constants/action-types';
import { calculateTotalCount, calculateTotalPrice } from '../utils/main';

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      if (state.items[action.payload.id]) {
        const newItems = {
          ...state.items,
        };

        newItems[action.payload.id].count = newItems[action.payload.id].count + 1;

        return {
          ...state,
          items: newItems,
        };
      }

      const newItems = {
        ...state.items,
        [action.payload.id]: action.payload,
      };

      newItems[action.payload.id].count = 1;

      return {
        ...state,
        items: newItems,
      };

    case CartActionTypes.REMOVE_ITEM:
      const newCartItems = {
        ...state.items,
      };

      delete newCartItems[action.payload];

      return {
        ...state,
        items: newCartItems,
      };

    case CartActionTypes.REMOVE_ALL_ITEMS:
      return initialState;

    case CartActionTypes.CALCULATE_COUNT_AND_PRICE:
      return {
        ...state,
        totalCount: calculateTotalCount(Object.values(state.items)),
        totalPrice: calculateTotalPrice(Object.values(state.items)),
      };

    case CartActionTypes.INCREMENT_CART_ITEM:
      const incrementedItems = {
        ...state.items,
      };

      incrementedItems[action.payload].count = incrementedItems[action.payload].count + 1;

      return {
        ...state,
        items: incrementedItems,
      };

    case CartActionTypes.DECREMENT_CART_ITEM:
      const decrementedItems = {
        ...state.items,
      };

      decrementedItems[action.payload].count =
        decrementedItems[action.payload].count > 1
          ? decrementedItems[action.payload].count - 1
          : decrementedItems[action.payload].count;

      return {
        ...state,
        items: decrementedItems,
      };

    default:
      return state;
  }
};

export default cart;
