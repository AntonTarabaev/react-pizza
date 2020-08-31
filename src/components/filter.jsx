import React from 'react';

const Filter = () => {
  return (
    <ul className="filters-list">
      <li className="filters-list__item">
        <button className="button button--filter active">Все</button>
      </li>
      <li className="filters-list__item">
        <button className="button button--filter">Мясные</button>
      </li>
      <li className="filters-list__item">
        <button className="button button--filter">Вегетарианские</button>
      </li>
      <li className="filters-list__item">
        <button className="button button--filter">Гриль</button>
      </li>
      <li className="filters-list__item">
        <button className="button button--filter">Острые</button>
      </li>
      <li className="filters-list__item">
        <button className="button button--filter">Закрытые</button>
      </li>
    </ul>
  );
};

export default Filter;
