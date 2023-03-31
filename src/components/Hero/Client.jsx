import { useContext } from 'react';
import { GlobalContext } from '../../Provider/Provider';

export const Client = () => {
  const { main } = useContext(GlobalContext);
  const { client } = main;
  return (
    <figure className="Hero-client">
      {client.map(({ id, svg, alt }) => (
        <img key={id} src={svg} alt={alt} className={`Hero-${alt}`} />
      ))}
    </figure>
  );
};
