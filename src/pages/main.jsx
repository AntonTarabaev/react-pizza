import React from 'react';
import PizzaCard from '../components/pizza-card/pizza-card';
import Sort from '../components/sort/sort';
import Filter from '../components/filter/filter';
import { SortTypes } from '../constants/main';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getPizzaByFilter, sortPizza } from '../utils/main';

const Main = () => {
  const isLoaded = useSelector(({ data }) => data.isLoaded);
  const filter = useSelector(({ filters }) => filters.filter);

  const getFilteredPizza = createSelector(
    (state) => state.data.pizza,
    (state) => state.filters.filter,
    (state) => state.filters.sortType,
    (pizza, filter, sortType) => {
      return sortPizza(getPizzaByFilter(pizza, filter), sortType);
    },
  );

  const filteredPizza = useSelector(getFilteredPizza);

  return (
    <section className="catalog">
      <div className="catalog__filters">
        <Filter />
        {SortTypes && <Sort />}
      </div>

      <h2 className="catalog__title">{filter} пиццы</h2>

      <div className="catalog__pizza-list">
        {isLoaded ? (
          filteredPizza.map((it) => <PizzaCard key={it.imageUrl} {...it} />)
        ) : (
          <h2>Loading... Please wait</h2>
        )}
      </div>
    </section>
  );
};

export default Main;
