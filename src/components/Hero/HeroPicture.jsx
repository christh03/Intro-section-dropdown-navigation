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
