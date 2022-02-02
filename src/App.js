import { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './utils/ScrollToTop';

import { ThemeProvider } from 'styled-components';
import { Navbar, Footer } from './components';
import { Homepage, Gallery, About, Contact, Privacy } from './pages';

import { GlobalStyles, LoadingIndicator, Main } from './index.css';
import theme from './utils/theme';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar
          items={[
            { id: 1, content: t('homepage'), to: '/' },
            { id: 2, content: t('gallery'), to: '/gallery' },
            { id: 3, content: t('about'), to: '/about' },
            { id: 4, content: t('contact'), to: '/contact' },
          ]}
        />
        <Main>
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Main>
        <Footer
          privacyLabel={t('privacy')}
          address="Oberurseler Str. 3, 61440 Oberursel"
          telNumber="+49 176 242 648 54"
          email="nataliastachnik.ns@gmail.com"
        />
      </Router>
    </>
  );
}

function RootApp() {
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderTimeout = setTimeout(() => setIsLoaded(true), 1000);

  useEffect(() => {
    return () => clearTimeout(loaderTimeout);
  }, [loaderTimeout]);

  return (
    <ThemeProvider theme={theme}>
      {!isLoaded ? <LoadingIndicator /> : <App />}
    </ThemeProvider>
  );
}

export default RootApp;
