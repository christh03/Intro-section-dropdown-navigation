import { useContext } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import { Client } from './Client';

export const PostContent = () => {
  const { main } = useContext(GlobalContext);
  const { title, text, btn } = main.post;

  return (
    <>
      <article className="Hero-article">
        <h2 className="Hero-h2">{title}</h2>
        <p className="Hero-p">{text}</p>
        <button className="Hero-btn">{btn}</button>
        <Client />
      </article>
    </>
  );
};
