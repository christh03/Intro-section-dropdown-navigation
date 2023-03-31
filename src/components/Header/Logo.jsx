import { useContext } from 'react';
import { GlobalContext } from '../../Provider/Provider';

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
