import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ filter, activeFilter, onFilterClick }) => {
  const handleFilterClick = () => {
    onFilterClick(filter);
  };

  return (
    <li className="filters-list__item">
      <button
        className={`button button--filter ${filter === activeFilter && `active`}`}
        onClick={handleFilterClick}>
        {filter}
      </button>
    </li>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.string.isRequired,
  activeFilter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
};

export default FilterItem;
