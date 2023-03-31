import { useState } from 'react';

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return {
    handleToggle,
    isOpen,
  };
};
