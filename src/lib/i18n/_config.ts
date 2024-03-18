import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enjson from './locales/en/translation.json';
import frjosn from './locales/fr/translation.json';

i18next.
    use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: ['en-US', 'fr-FR'],
        load: 'currentOnly',
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        resources: {
            'en-US': {
                translation: enjson,
            },
            'fr-FR': {
                translation: frjosn,
            }
        }
    })

