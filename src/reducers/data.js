import { DataActionTypes } from '../constants/action-types';

const initialState = {
  pizza: [],
  isLoaded: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case DataActionTypes.SET_PIZZA:
      return {
        ...state,
        pizza: action.payload,
      };

    case DataActionTypes.SET_LOADED_STATUS:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default data;
