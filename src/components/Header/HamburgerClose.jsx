export const HamburgerClose = ({ handleToggle }) => {
  return (
    <>
      <button className={`Header-hamburgerClose`} onClick={handleToggle}>
        <img src="assets/images/icon-close-menu.svg" alt="Icon-menu" />
      </button>
    </>
  );
};
