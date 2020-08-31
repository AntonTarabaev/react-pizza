import React from 'react';
import { FilterTypes } from '../constants/main';

const Sort = () => {
  const [isPopupVisible, setPopupVisibility] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const sortRef = React.useRef();

  const filters = Object.values(FilterTypes);

  const togglePopupVisibility = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const onItemSelect = (i) => {
    setActiveItem(i);
    setPopupVisibility(false);
  };

  const onOutsideClick = (evt) => {
    !evt.path.includes(sortRef.current) && setPopupVisibility(false);
  };

  React.useEffect(() => {
    document.addEventListener('click', onOutsideClick);

    return () => {
      document.removeEventListener('click', onOutsideClick);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <b className={`sort__title ${isPopupVisible && `sort__title--rotated-mark`}`}>
          Сортировка:
        </b>
        <span className="sort__current" onClick={togglePopupVisibility}>
          {filters[0]}
        </span>
      </div>
      {isPopupVisible && (
        <ul className="sort__popup">
          {filters.map((it, i) => (
            <li
              className={`sort__popup-item ${i === activeItem && `sort__popup-item--active`}`}
              onClick={() => onItemSelect(i)}>
              {filters[i]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
