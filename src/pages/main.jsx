import React from 'react';
import PizzaCard from '../components/pizza-card';
import Sort from '../components/sort';
import Filter from '../components/filter';

const Main = () => {
  return (
    <section className="catalog">
      <div className="catalog__filters">
        <Filter />
        <Sort />
      </div>

      <h2 className="catalog__title">Все пиццы</h2>

      <div className="catalog__pizza-list">
        <PizzaCard />
      </div>
    </section>
  );
};

export default Main;
