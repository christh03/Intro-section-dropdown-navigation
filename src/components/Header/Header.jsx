import { useContext, useState } from 'react';
import { GlobalContext } from '../../Provider/Provider';

export const Header = () => {
  return (
    <>
      <header className="Header">
        <Logo />
        <Nav />
      </header>
    </>
  );
};

export const Logo = () => {
  const { header } = useContext(GlobalContext);
  const { text } = header.logo;
  return (
    <>
      <h1 className="Header-h1">{text}</h1>
    </>
  );
};

export const Nav = () => {
  return (
    <nav className="Header-nav">
      <Menu />
      <Registration />
    </nav>
  );
};

export const Menu = () => {
  const { header } = useContext(GlobalContext);
  const { careers } = header;
  return (
    <ul className="Header-ul">
      <li className="Header-li">
        <DropDownFeatures />
      </li>
      <li className="Header-li">
        <DropDownCompany />
      </li>
      <li className="Header-li">
        <a href={careers.href} className="Header-button">
          {careers.text}
        </a>
      </li>
    </ul>
  );
};

export const Registration = () => {
  const { header } = useContext(GlobalContext);
  const { login, register } = header;
  return (
    <div className="Header-div">
      <a href={login.href}>{login.text}</a>
      <a href={register.href}>{register.text}</a>
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
      <button className="Header-DopDownFeatures-button" onClick={handleToggle}>
        {button.text}
      </button>
      {isOpen && (
        <ul className="Header-DopDownFeatures-ul">
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
    <li className="Header-DopDownFeatures-li">
      <a className="Header-DopDownFeatures-a" href={href}>
        <img className="Header-DopDownFeatures-img" src={svg} alt={text} />
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
      <button className="Header-dropDownCompany-button" onClick={handleToggle}>
        {button.text}
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
    <li className="Header-dropDownCompany">
      <a href={href} className="Header-dropDownCompany-a">
        {text}
      </a>
    </li>
  );
};
