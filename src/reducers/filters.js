import { FiltersActionTypes } from '../constants/action-types';
import { FILTER_ALL_PIZZA, SortTypes } from '../constants/main';

const initialState = {
  filter: FILTER_ALL_PIZZA,
  sortType: SortTypes.POPULARITY,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case FiltersActionTypes.CHANGE_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };

    case FiltersActionTypes.CHANGE_ACTIVE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default filters;
