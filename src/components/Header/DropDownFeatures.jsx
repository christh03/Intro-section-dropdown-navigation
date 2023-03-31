import { useContext } from 'react';
import { useDropDown } from '../../hook/useDropDown';
import { GlobalContext } from '../../Provider/Provider';
import { DropDownFeaturesItem } from './DropDownFeaturesItem';

export const DropDownFeatures = () => {
  const { handleToggle, isOpen } = useDropDown();
  const { header } = useContext(GlobalContext);
  const { button, list } = header.dropDownFeatures;

  return (
    <>
      <button
        className="Header-dropDownFeatures-button Header-btnLinks"
        onClick={handleToggle}
      >
        <span>{button.text}</span>
        {isOpen ? (
          <img
            className="Header-arrow"
            src="assets/images/icon-arrow-up.svg"
            alt="arrow-up"
          />
        ) : (
          <img
            className="Header-arrow"
            src="assets/images/icon-arrow-down.svg"
            alt="arrow-down"
          />
        )}
      </button>
      {isOpen && (
        <ul
          className={`Header-dropDownFeatures-ul ${isOpen ? 'transition' : ''}`}
        >
          {list.map((item) => (
            <DropDownFeaturesItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </>
  );
};
