import { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';

import App from './App';

import { LoadingIndicator } from './index.css';

function RootApp() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderTimeout = setTimeout(() => setIsLoaded(true), 1000);

  useEffect(() => {
    return () => clearTimeout(loaderTimeout);
  }, [loaderTimeout]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        {!isLoaded ? <LoadingIndicator /> : <App />}
      </ThemeProvider>
    </Router>
  );
}

export default RootApp;
