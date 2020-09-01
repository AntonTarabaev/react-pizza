import React from 'react';
import PizzaCard from '../components/pizza-card';
import Sort from '../components/sort';
import Filter from '../components/filter';
import { SortTypes } from '../constants/main';
import { useDispatch, useSelector } from 'react-redux';
import { loadPizza } from '../actions/data';
import { createSelector } from 'reselect';
import { getPizzaByFilter, sortPizza } from '../utils/main';

const Main = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ data }) => data.isLoaded);

  const getFilteredPizza = createSelector(
    (state) => state.data.pizza,
    (state) => state.filters.filter,
    (state) => state.filters.sortType,
    (pizza, filter, sortType) => {
      return sortPizza(getPizzaByFilter(pizza, filter), sortType);
    },
  );

  const filteredPizza = useSelector(getFilteredPizza);

  React.useEffect(() => {
    dispatch(loadPizza());
  }, [dispatch]);

  return (
    <section className="catalog">
      <div className="catalog__filters">
        <Filter />
        {SortTypes && <Sort />}
      </div>

      <h2 className="catalog__title">Все пиццы</h2>

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
