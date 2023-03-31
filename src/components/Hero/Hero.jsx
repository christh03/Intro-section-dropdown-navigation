import { useContext } from 'react';
import { GlobalContext } from '../../Provider/Provider';
import './Hero.scss';

export const Hero = () => {
  return (
    <main className="Hero">
      <PostContent />
      <HeroPicture />
    </main>
  );
};

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

export const HeroPicture = () => {
  return (
    <figure className="Hero-figure">
      <picture className="Hero-picture">
        <source
          srcSet="/assets/images/image-hero-desktop.png"
          media="(min-width:60.0625rem)"
        />
        <img src="/assets/images/image-hero-mobile.png" alt="hero-mobile" />
      </picture>
    </figure>
  );
};
