import React from 'react';

const Main = () => {
  return (
    <section className="catalog">
      <div className="catalog__filters">
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
      </div>

      <h2 className="catalog__title">Все пиццы</h2>

      <div className="catalog__pizza-list">
        <div className="pizza-card">
          <img
            className="pizza-card__image"
            width="260"
            height="260"
            alt="Pizza image"
            src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg"
          />
          <h3 className="pizza-card__title">Чизбургер-пицца</h3>
          <div className="pizza-card__selectors">
            <ul className="pizza-card__selectors-list">
              <li className="pizza-card__selectors-item">
                <input
                  className="pizza-card__radio visually-hidden"
                  id="dough-thin"
                  name="dough"
                  value="thin"
                  type="radio"
                  defaultChecked
                />
                <label className="pizza-card__selector" htmlFor="dough-thin">
                  тонкое
                </label>
              </li>
              <li className="pizza-card__selectors-item">
                <input
                  className="pizza-card__radio visually-hidden"
                  id="dough-traditional"
                  name="dough"
                  value="traditional"
                  type="radio"
                />
                <label className="pizza-card__selector" htmlFor="dough-traditional">
                  традиционное
                </label>
              </li>
            </ul>

            <ul className="pizza-card__selectors-list">
              <li className="pizza-card__selectors-item">
                <input
                  className="pizza-card__radio visually-hidden"
                  id="size-26"
                  name="size"
                  value="26"
                  type="radio"
                />
                <label className="pizza-card__selector" htmlFor="size-26">
                  26 см.
                </label>
              </li>
              <li className="pizza-card__selectors-item">
                <input
                  className="pizza-card__radio visually-hidden"
                  id="size-30"
                  name="size"
                  value="30"
                  type="radio"
                  defaultChecked
                />
                <label className="pizza-card__selector" htmlFor="size-30">
                  30 см.
                </label>
              </li>
              <li className="pizza-card__selectors-item">
                <input
                  className="pizza-card__radio visually-hidden"
                  id="size-40"
                  name="size"
                  value="40"
                  type="radio"
                />
                <label className="pizza-card__selector" htmlFor="size-40">
                  40 см.
                </label>
              </li>
            </ul>
          </div>
          <div className="pizza-card__bottom">
            <p className="pizza-card__price">803 ₽</p>
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
      </div>
    </section>
  );
};

export default Main;
