import { HamburgerClose, Menu, Registration } from './index';

export const Nav = ({ menuActive, handleToggle }) => {
  return (
    <nav className={`Header-nav ${menuActive ? 'isActive' : ''}`}>
      <HamburgerClose handleToggle={handleToggle} />
      <Menu />
      <Registration />
    </nav>
  );
};
