import { useState } from 'react';

export const useHeader = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleToggle = () => {
    setMenuActive(!menuActive);
  };

  return {
    handleToggle,
    menuActive,
  };
};
