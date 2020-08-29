import React from 'react';

const Header = () => {
  return (
    <header className="page-header">
      <a className="logo">
        <img
          className="logo__image"
          src="img/pizza-logo.svg"
          width="38"
          height="38"
          alt="React pizza logo"
        />
        <div className="logo__text-container">
          <h1 className="logo__header">React pizza</h1>
          <p className="logo__desc">самая вкусная пицца во вселенной</p>
        </div>
      </a>
      <button className="button button--cart">Корзина</button>
    </header>
  );
};

export default Header;
