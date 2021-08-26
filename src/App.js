import { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ThemeProvider } from 'styled-components';
import { Navbar, Footer } from './components';
import {
    Homepage,
    Offer,
    Gallery,
    About,
    Contact
} from './pages';

import { GlobalStyles, LoadingIndicator, Main } from './index.css';
import theme from './utils/theme';

function App() {
    const { t } = useTranslation();

    return (
        <>
            <GlobalStyles />
            <Router basename={process.env.PUBLIC_URL}>
                <Navbar items={[
                    {content: t('homepage'), to: '/'},
                    {content: t('offer'), to: '/offer'},
                    {content: t('gallery'), to: '/gallery'},
                    {content: t('about'), to: '/about'},
                    {content: t('contact'), to: '/contact'}
                ]}
                />
                <Main>
                    <Switch>
                        <Route exact path='/'>
                            <Homepage />
                        </Route>
                        <Route path='/offer'>
                            <Offer />
                        </Route>
                        <Route path='/gallery'>
                            <Gallery />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/contact'>
                            <Contact />
                        </Route>
                        <Redirect to='/' />
                    </Switch>
                </Main>
                <Footer
                    address={'ul. Nowaka 10a'}
                    telNumber={'123456789'}
                    email={'example@x.com'}
                />
            </Router>
        </>
    );
}

function RootApp() {
    const [isLoaded, setIsLoaded] = useState(false);
    const loaderTimeout = setTimeout(() => setIsLoaded(true), 1500);

    useEffect(() => {
        return () => clearTimeout(loaderTimeout);
    }, [loaderTimeout]);

    return (
        <ThemeProvider theme={theme}>
            {!isLoaded
                ? <LoadingIndicator />
                : <App />
            }
        </ThemeProvider>
    );
}

export default RootApp;
