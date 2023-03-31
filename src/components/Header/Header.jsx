import { useHeader } from '../../hook/useHeader';
import { Logo, Hamburger, Nav } from './index';
import './Header.scss';

export const Header = () => {
  const { handleToggle, menuActive } = useHeader();

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
