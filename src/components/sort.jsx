import React from 'react';

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <b className="sort__title">Сортировка:</b>
        <span className="sort__current">по популярности</span>
      </div>
      <ul className="sort__popup">
        <li className="sort__popup-item sort__popup-item--active">по популярности</li>
        <li className="sort__popup-item">по цене</li>
        <li className="sort__popup-item">по алфавиту</li>
      </ul>
    </div>
  );
};

export default Sort;
