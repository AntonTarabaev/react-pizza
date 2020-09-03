import React from 'react';
import PropTypes from 'prop-types';

const SortItem = ({ filter, activeItem, onItemSelect }) => {
  const onItemClick = () => {
    onItemSelect(filter);
  };

  return (
    <li
      className={`sort__popup-item ${filter === activeItem && `sort__popup-item--active`}`}
      onClick={onItemClick}>
      {filter}
    </li>
  );
};

SortItem.propTypes = {
  filter: PropTypes.string.isRequired,
  activeItem: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
};

export default React.memo(SortItem);
