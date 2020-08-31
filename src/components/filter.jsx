import React from 'react';
import { FILTER_ALL_PIZZA } from '../constants/main';
import { MOCK_DATA } from '../mock';

const getUniqueFilters = (pizzaArr) => {
  return [...new Set(pizzaArr.map((it) => it.category))];
};

const Filter = () => {
  const [activeItem, setActiveItem] = React.useState(FILTER_ALL_PIZZA);

  const filters = [FILTER_ALL_PIZZA, ...getUniqueFilters(MOCK_DATA)];

  return (
    <ul className="filters-list">
      {filters.map((it, i) => (
        <li className="filters-list__item" key={it + i}>
          <button
            className={`button button--filter ${it === activeItem && `active`}`}
            onClick={() => setActiveItem(it)}>
            {it}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Filter;
