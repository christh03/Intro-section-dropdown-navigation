import { useContext, useState } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import './Header.scss';

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <header className={`Header  ${menuActive ? 'isActive' : ''}`}>
        <Logo />
        <Hamburger handleToggle={handleToggle} />
        <Nav menuActive={menuActive} handleToggle={handleToggle} />
      </header>
    </>
  );
};

export const Logo = () => {
  const { header } = useContext(GlobalContext);
  const { svg, href } = header.logo;
  return (
    <>
      <h1 className="Header-h1">
        <a href={href}>
          <img src={svg} alt="Logo" />
        </a>
      </h1>
    </>
  );
};

export const Hamburger = ({ handleToggle }) => {
  return (
    <>
      <button className="Header-hamburger" onClick={handleToggle}>
        <img src="/assets/images/icon-menu.svg" alt="Icon-menu" />
      </button>
    </>
  );
};

export const HamburgerClose = ({ handleToggle }) => {
  return (
    <>
      <button className={`Header-hamburgerClose`} onClick={handleToggle}>
        <img src="/assets/images/icon-close-menu.svg" alt="Icon-menu" />
      </button>
    </>
  );
};

export const Nav = ({ menuActive, handleToggle }) => {
  return (
    <nav className={`Header-nav ${menuActive ? 'isActive' : ''}`}>
      <HamburgerClose handleToggle={handleToggle} />
      <Menu />
      <Registration />
    </nav>
  );
};

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

export const Registration = () => {
  const { header } = useContext(GlobalContext);
  const { registration } = header;
  return (
    <div className="Header-Registration">
      {registration.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={
            item.text === 'Login'
              ? 'Header-btnLinks Header-a--login'
              : 'Header-btnLinks Header-a--register'
          }
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};

export const DropDownFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { header } = useContext(GlobalContext);
  const { button, list } = header.dropDownFeatures;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
            src="/assets/images/icon-arrow-up.svg"
            alt="arrow-up"
          />
        ) : (
          <img
            className="Header-arrow"
            src="/assets/images/icon-arrow-down.svg"
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

export const DropDownFeaturesItem = ({ href, text, svg }) => {
  return (
    <li className="Header-dropDownFeatures-li">
      <a className="Header-dropDownFeatures-a" href={href}>
        <img className="Header-dropDownFeatures-img" src={svg} alt={text} />
        {text}
      </a>
    </li>
  );
};

export const DropDownCompany = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { header } = useContext(GlobalContext);
  const { button, list } = header.dropDownCompany;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
            src="/assets/images/icon-arrow-up.svg"
            alt="arrow-up"
          />
        ) : (
          <img
            className="Header-arrow"
            src="/assets/images/icon-arrow-down.svg"
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

export const DropDownCompanyItem = ({ href, text }) => {
  return (
    <li className="Header-dropDownCompany-li">
      <a href={href} className="Header-dropDownCompany-a">
        {text}
      </a>
    </li>
  );
};
