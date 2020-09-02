import React from 'react';
import PropTypes from 'prop-types';

const PizzaCardSelector = ({ selector, pizzaId, isChecked, label, onChange }) => {
  const handleChange = () => {
    onChange(selector.ID);
  };

  return (
    <li className="pizza-card__selectors-item">
      <input
        className="pizza-card__radio visually-hidden"
        id={`${label}-${pizzaId}-${selector.ID}`}
        name={label}
        value={selector.ID}
        type="radio"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="pizza-card__selector" htmlFor={`${label}-${pizzaId}-${selector.ID}`}>
        {selector.TEXT}
      </label>
    </li>
  );
};

PizzaCardSelector.propTypes = {
  selector: PropTypes.shape({
    ID: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
    TEXT: PropTypes.string.isRequired,
  }).isRequired,
  pizzaId: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PizzaCardSelector;
