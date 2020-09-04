import { DataActionTypes } from '../constants/action-types';
import axios from 'axios';

export const setLoadedStatus = (status) => ({
  type: DataActionTypes.SET_LOADED_STATUS,
  payload: status,
});

export const setPizza = (pizza) => ({
  type: DataActionTypes.SET_PIZZA,
  payload: pizza,
});

export const loadPizza = () => (dispatch) => {
  axios.get('/pizza').then(({ data }) => {
    dispatch(setPizza(data));
    dispatch(setLoadedStatus(true));
  });
};
