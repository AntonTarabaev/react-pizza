import { FiltersActionTypes } from '../constants/action-types';

export const changeActiveFilter = (filter) => ({
  type: FiltersActionTypes.CHANGE_ACTIVE_FILTER,
  payload: filter,
});

export const changeSortType = (sortType) => ({
  type: FiltersActionTypes.CHANGE_SORT_TYPE,
  payload: sortType,
});
