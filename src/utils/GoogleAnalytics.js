import * as ReactGA from 'react-ga';

export const initGA = () => {
  const id = 'UA-214569519-1';
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(id);
  }
};
