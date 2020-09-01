import React from 'react';
import PropTypes from 'prop-types';
import { PizzaDough, PizzaSizes } from '../constants/main';

const PizzaCard = ({ id, imageUrl, name, description, prices }) => {
  const [price, setPrice] = React.useState(prices[1]);
  const [dough, setDough] = React.useState(PizzaDough.THIN.ID);

  const onPriceChange = (evt) => {
    setPrice(prices[evt.target.value]);
  };

  const onDoughChange = (evt) => {
    setDough(evt.target.value);
  };

  return (
    <div className="pizza-card">
      <img className="pizza-card__image" width="260" height="260" alt={name} src={imageUrl} />
      <h3 className="pizza-card__title">{name}</h3>
      <p className="pizza-card__description">{description}</p>
      <form className="pizza-card__selectors">
        <ul className="pizza-card__selectors-list">
          {Object.values(PizzaDough).map((it) => (
            <li className="pizza-card__selectors-item" key={it.ID}>
              <input
                className="pizza-card__radio visually-hidden"
                id={`dough-${id}-${it.ID}`}
                name="dough"
                value={it.ID}
                type="radio"
                checked={dough === it.ID}
                onChange={onDoughChange}
              />
              <label className="pizza-card__selector" htmlFor={`dough-${id}-${it.ID}`}>
                {it.TEXT}
              </label>
            </li>
          ))}
        </ul>

        <ul className="pizza-card__selectors-list">
          {Object.values(PizzaSizes).map((it) => (
            <li className="pizza-card__selectors-item" key={`pizza-size-${it.ID}`}>
              <input
                className="pizza-card__radio visually-hidden"
                id={`size-${id}-${it.ID}`}
                name="size"
                value={it.ID}
                type="radio"
                checked={prices[it.ID] === price}
                onChange={onPriceChange}
              />
              <label className="pizza-card__selector" htmlFor={`size-${id}-${it.ID}`}>
                {it.TEXT}
              </label>
            </li>
          ))}
        </ul>
      </form>
      <div className="pizza-card__bottom">
        <p className="pizza-card__price">{price} ₽</p>
        <button className="button button--add">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
          Добавить
        </button>
      </div>
    </div>
  );
};

PizzaCard.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prices: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};

export default PizzaCard;
