import { useContext } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import { DropDownCompany, DropDownFeatures } from './index';

export const Menu = () => {
  const { header } = useContext(GlobalContext);
  const { careers, about } = header;
  return (
    <ul className="Header-ul">
      <li className="Header-li">
        <DropDownFeatures />
      </li>
      <li className="Header-li">
        <DropDownCompany />
      </li>
      <li className="Header-li">
        <a href={careers.href} className="Header-a-careers Header-btnLinks">
          {careers.text}
        </a>
      </li>
      <li className="Header-li">
        <a href={about.href} className="Header-a-about Header-btnLinks">
          {about.text}
        </a>
      </li>
    </ul>
  );
};
