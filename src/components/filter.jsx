import React from 'react';
import { FILTER_ALL_PIZZA } from '../constants/main';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveFilter } from '../actions/filters';
import { getUniqueFilters } from '../utils/main';

const Filter = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(({ filters }) => filters.filter);
  const pizza = useSelector(({ data }) => data.pizza);

  const filters = [FILTER_ALL_PIZZA, ...getUniqueFilters(pizza)];

  const setActiveItem = (filter) => {
    dispatch(changeActiveFilter(filter));
  };

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
