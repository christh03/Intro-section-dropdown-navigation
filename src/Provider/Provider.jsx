import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const GlobalContext = createContext();

const data = {
  header: {
    logo: { id: uuidv4(), svg: '/assets/images/logo.svg', href: '#' },

    dropDownFeatures: {
      button: { id: uuidv4(), text: 'Features' },
      list: [
        {
          id: uuidv4(),
          text: 'Todo List',
          href: '#',
          svg: '/assets/images/icon-todo.svg',
        },
        {
          id: uuidv4(),
          text: 'Calendar',
          href: '#',
          svg: '/assets/images/icon-calendar.svg',
        },
        {
          id: uuidv4(),
          text: 'Reminders',
          href: '#',
          svg: '/assets/images/icon-reminders.svg',
        },
        {
          id: uuidv4(),
          text: 'Planning',
          href: '#',
          svg: '/assets/images/icon-planning.svg',
        },
      ],
    },
    dropDownCompany: {
      button: { id: uuidv4(), text: 'Company' },
      list: [
        {
          id: uuidv4(),
          text: 'History',
          href: '#',
        },
        {
          id: uuidv4(),
          text: 'Our Team',
          href: '#',
        },
        {
          id: uuidv4(),
          text: 'Blog',
          href: '#',
        },
      ],
    },

    careers: { id: uuidv4(), text: 'Careers', href: '#' },
    about: { id: uuidv4(), text: 'About', href: '#' },

    registration: [
      { id: uuidv4(), text: 'Login', href: '#' },
      { id: uuidv4(), text: 'Register', href: '#' },
    ],
  },

  main: {
    h2: { title: 'Make remote work' },
    text: {
      text: `Get your team in sync, no matter your location. Streamline processes, 
  create team rituals, and watch productivity soar.`,
    },
    btn: { text: 'Learn more' },
  },
};

export const Provider = ({ children }) => {
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
