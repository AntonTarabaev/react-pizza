import React from 'react';
import PizzaCard from '../components/pizza-card';
import Sort from '../components/sort';
import Filter from '../components/filter';
import { FilterTypes } from '../constants/main';

const Main = () => {
  return (
    <section className="catalog">
      <div className="catalog__filters">
        <Filter />
        {FilterTypes && <Sort />}
      </div>

      <h2 className="catalog__title">Все пиццы</h2>

      <div className="catalog__pizza-list">
        <PizzaCard />
      </div>
    </section>
  );
};

export default Main;
