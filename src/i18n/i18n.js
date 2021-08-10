import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translations.json';
import translationPL from '../locales/pl/translations.json';
import translationDE from '../locales/de/translations.json';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'pl', 'de'];

const resources = {
    en: {
        translation: translationEN
    },
    pl: {
        translation: translationPL
    },
    de: {
        translation: translationDE
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng,
        detection: {
            checkWhitelist: true
        },

        debug: false,

        whitelist: availableLanguages,

        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
