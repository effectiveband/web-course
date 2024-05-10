import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Locales
import { locales } from './locales';

export const localesKeys = Object.keys(locales);
export const DEFAULT_LANG = localesKeys[0];
const lng =
  localesKeys.find((localeKey) => localeKey === localStorage.LOCALE) ??
  DEFAULT_LANG;

i18n.use(initReactI18next).init({
  resources: locales,
  lng,
  fallbackLng: DEFAULT_LANG,
  ns: ['translation'],
  defaultNS: 'translation',

  keySeparator: '.',

  interpolation: {
    escapeValue: false
  }
});

export default i18n;
