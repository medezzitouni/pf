import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enjson from './locales/en/common.json';
import frjosn from './locales/fr/common.json';

i18next.
    use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: ['en', 'fr'],
        load: 'currentOnly',
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        resources: {
            en: {
                translation: enjson,
            },
            fr: {
                translation: frjosn,
            }
        }
    })

