import React from 'react';
import { FILTER_ALL_PIZZA } from '../../constants/main';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveFilter } from '../../actions/filters';
import { getUniqueFilters } from '../../utils/main';
import FilterItem from './filter-item';

const Filter = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(({ filters }) => filters.filter);
  const pizza = useSelector(({ data }) => data.pizza);

  const filters = [FILTER_ALL_PIZZA, ...getUniqueFilters(pizza)];

  const setActiveItem = React.useCallback(
    (filter) => {
      dispatch(changeActiveFilter(filter));
    },
    [dispatch],
  );

  return (
    <ul className="filters-list">
      {filters.map((it, i) => (
        <FilterItem
          key={it + i}
          filter={it}
          activeFilter={activeItem}
          onFilterClick={setActiveItem}
        />
      ))}
    </ul>
  );
};

export default React.memo(Filter);
