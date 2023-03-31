import { useContext } from 'react';
import { GlobalContext } from '../../Provider/Provider';

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
