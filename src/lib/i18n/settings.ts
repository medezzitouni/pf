export const fallbackLng = 'en'
export const languages = [fallbackLng, 'fr', 'ar']
export const defaultNS = 'translation'
export const cookieName = 'i18next'
export const cookieThemeName = 'theme'
export const I18N_COOKIE_EXPIRATION = 2147483647;
export function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        // debug: true,
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}