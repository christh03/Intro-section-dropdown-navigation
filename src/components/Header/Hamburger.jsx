export const Hamburger = ({ handleToggle }) => {
  return (
    <>
      <button className="Header-hamburger" onClick={handleToggle}>
        <img src="assets/images/icon-menu.svg" alt="Icon-menu" />
      </button>
    </>
  );
};
