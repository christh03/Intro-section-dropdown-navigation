import { useContext } from 'react';
import { useDropDown } from '../../hook/useDropDown';
import { GlobalContext } from '../../Provider/Provider';
import { DropDownCompanyItem } from './DropDownCompanyItem';

export const DropDownCompany = () => {
  const { handleToggle, isOpen } = useDropDown();
  const { header } = useContext(GlobalContext);
  const { button, list } = header.dropDownCompany;

  return (
    <>
      <button
        className="Header-dropDownCompany-button Header-btnLinks"
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
        <ul className="Header-dropDownCompany-ul">
          {list.map((item) => (
            <DropDownCompanyItem key={item.id} {...item} />
          ))}
        </ul>
      )}
    </>
  );
};
