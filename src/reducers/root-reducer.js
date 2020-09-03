import { combineReducers } from 'redux';
import data from './data';
import filters from './filters';
import cart from './cart';

const rootReducer = combineReducers({
  data,
  filters,
  cart,
});

export default rootReducer;
