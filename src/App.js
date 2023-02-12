import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from 'react-cookie-consent';
import { initGA } from './utils/GoogleAnalytics';

import { Homepage, Gallery, About, Contact, Privacy, Impressum } from './pages';
import { Navbar, Footer } from './components';
import ScrollArrow from './components/ScrollArrow';

import { GlobalStyles, Main } from './index.css';

function App() {
  const { t } = useTranslation();
  const location = useLocation();

  const handleAcceptCookie = () => {
    initGA();
  };

  const handleDeclineCookie = () => {
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <>
      <GlobalStyles />
      <Navbar
        items={[
          { id: 1, content: t('homepage'), to: '/' },
          { id: 2, content: t('gallery'), to: '/gallery' },
          { id: 3, content: t('about'), to: '/about' },
          { id: 4, content: t('contact'), to: '/contact' },
          { id: 5, content: t('privacy'), to: '/privacy' },
        ]}
      />
      <Main>
        <Routes>
          <Route path="/*" element={<Navigate to="/start" />} />
          <Route path="/start" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
        <ScrollArrow />
        <CookieConsent
          enableDeclineButton
          buttonText="Ich akzeptiere"
          declineButtonText="Ich lehne ab"
          onDecline={handleDeclineCookie}
          onAccept={handleAcceptCookie}
        >
          {t('cookie_info')}
        </CookieConsent>
      </Main>
      <Footer
        labels={{ privacy: t('privacy'), impressum: t('impressum') }}
        address="Oberurseler Str. 3, 61440 Oberursel"
        telNumber="+49 176 242 648 54"
        email="nataliastachnik.ns@gmail.com"
      />
    </>
  );
}
export default App;
