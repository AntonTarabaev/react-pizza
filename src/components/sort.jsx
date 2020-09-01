import React from 'react';
import { SortTypes } from '../constants/main';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortType } from '../actions/filters';

const Sort = () => {
  const filters = Object.values(SortTypes);

  const dispatch = useDispatch();
  const activeItem = useSelector(({ filters }) => filters.sortType);
  const [isPopupVisible, setPopupVisibility] = React.useState(false);
  const sortRef = React.useRef();

  const setActiveItem = (sortType) => {
    dispatch(changeSortType(sortType));
  };

  const togglePopupVisibility = () => {
    setPopupVisibility(!isPopupVisible);
  };

  const onItemSelect = (item) => {
    setActiveItem(item);
    setPopupVisibility(false);
  };

  const onOutsideClick = (evt) => {
    const path = evt.path || (evt.composedPath && evt.composedPath());

    !path.includes(sortRef.current) && setPopupVisibility(false);
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
          {activeItem}
        </span>
      </div>
      {isPopupVisible && (
        <ul className="sort__popup">
          {filters.map((it, i) => (
            <li
              key={it + i}
              className={`sort__popup-item ${it === activeItem && `sort__popup-item--active`}`}
              onClick={() => onItemSelect(it)}>
              {it}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sort;
