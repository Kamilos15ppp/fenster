import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ThemeProvider } from 'styled-components';
import { Navbar } from './components';
import { Homepage, Offer, Gallery, About, Contact } from './pages';

import { GlobalStyles, LoadingIndicator } from './index.css';
import theme from './utils/theme';

function App() {
    const { t } = useTranslation();

    return (
        <>
            <GlobalStyles />
            <Router>
                <Navbar items={[
                    {content: t('homepage'), to: '/'},
                    {content: t('offer'), to: '/offer'},
                    {content: t('gallery'), to: '/gallery'},
                    {content: t('about'), to: '/about'},
                    {content: t('contact'), to: '/contact'}
                ]}
                />
                <div>
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
                    </Switch>
                </div>
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
