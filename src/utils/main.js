import { FILTER_ALL_PIZZA, SortTypes } from '../constants/main';

export const getUniqueFilters = (pizzaArr) => {
  return [...new Set(pizzaArr.map((it) => it.category))];
};

export const getPizzaByFilter = (pizza, filter) => {
  return filter === FILTER_ALL_PIZZA ? pizza : pizza.filter((pizza) => pizza.category === filter);
};

export const sortPizza = (pizza, sortType) => {
  switch (sortType) {
    case SortTypes.POPULARITY:
      return [...pizza].sort((a, b) => b.rating - a.rating);

    case SortTypes.ALPHABET:
      return [...pizza].sort((a, b) => a.name.localeCompare(b.name));

    case SortTypes.PRICE:
      return [...pizza].sort((a, b) => a.prices[1] - b.prices[1]);

    default:
      return pizza;
  }
};

export const calculateTotalCount = (pizzaArr) => {
  return pizzaArr.reduce((acc, it) => {
    return acc + it.count;
  }, 0);
};

export const calculateTotalPrice = (pizzaArr) => {
  return pizzaArr.reduce((acc, it) => {
    return acc + it.count * it.price;
  }, 0);
};
