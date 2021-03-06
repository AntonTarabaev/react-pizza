import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  calculateCountAndPrice,
  decrementCartItem,
  incrementCartItem,
  removeItem,
} from '../actions/cart';

const CartItem = ({ id, name, imageUrl, price, dough, size, count }) => {
  const dispatch = useDispatch();
  const totalPrice = price * count;

  const onDeleteButtonClick = () => {
    if (window.confirm('Вы действительно хотите удалить пиццу?')) {
      dispatch(removeItem(id));
      dispatch(calculateCountAndPrice());
    }
  };

  const onIncrementButtonClick = () => {
    dispatch(incrementCartItem(id));
    dispatch(calculateCountAndPrice());
  };

  const onDecrementButtonClick = () => {
    dispatch(decrementCartItem(id));
    dispatch(calculateCountAndPrice());
  };

  return (
    <li className="cart__item product">
      <img className="product__image" width="80" height="80" alt={name} src={imageUrl} />
      <div className="product__info">
        <h3 className="product__title">{name}</h3>
        <p className="product__text">
          {dough} тесто, {size}.
        </p>
      </div>
      <div className="product__buttons">
        <button className="button button--rounded" onClick={onDecrementButtonClick}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="#EB5A1E"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
          </svg>
        </button>
        <span className="product__count">{count}</span>
        <button className="button button--rounded" onClick={onIncrementButtonClick}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="#EB5A1E"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
          </svg>
        </button>
      </div>
      <p className="product__price">{totalPrice} ₽</p>
      <button className="button button--rounded button--gray" onClick={onDeleteButtonClick}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="#EB5A1E"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
          <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
        </svg>
      </button>
    </li>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dough: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default React.memo(CartItem);
