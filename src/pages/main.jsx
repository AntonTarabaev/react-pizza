import React from 'react';
import PizzaCard from '../components/pizza-card';
import Sort from '../components/sort';
import Filter from '../components/filter';
import { FilterTypes } from '../constants/main';
import { MOCK_DATA } from '../mock';

const Main = () => {
  return (
    <section className="catalog">
      <div className="catalog__filters">
        <Filter />
        {FilterTypes && <Sort />}
      </div>

      <h2 className="catalog__title">Все пиццы</h2>

      <div className="catalog__pizza-list">
        {MOCK_DATA.map((it) => (
          <PizzaCard key={it.imageUrl} {...it} />
        ))}
      </div>
    </section>
  );
};

export default Main;
