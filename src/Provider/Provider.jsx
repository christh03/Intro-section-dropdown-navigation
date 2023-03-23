import { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
const GlobalContext = createContext();

const data = {
  header: {
    logo: { id: uuidv4(), text: 'snap', href: '#' },

    nav: {
      dropDownFeatures: {
        Features: { id: uuidv4(), text: 'Features' },
        list: [
          {
            id: uuidv4(),
            text: 'Todo List',
            href: '#',
            svg: '/public/assets/images/icon-todo.svg',
          },
          {
            id: uuidv4(),
            text: 'Calendar',
            href: '#',
            svg: '/public/assets/images/icon-calendar.svg',
          },
          {
            id: uuidv4(),
            text: 'Reminders',
            href: '#',
            svg: '/public/assets/images/icon-reminders.svg',
          },
          {
            id: uuidv4(),
            text: 'Planning',
            href: '#',
            svg: '/public/assets/images/icon-planning.svg',
          },
        ],
      },
      dropDownCompany: {
        Company: { id: uuidv4(), text: 'Features' },
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

      login: { id: uuidv4(), text: 'Login', href: '#' },
      register: { id: uuidv4(), text: 'Register' },
    },
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
