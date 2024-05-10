import { Resource } from 'i18next';

// Translations
import enTranslation from './en.json';
import esTranslation from './ru.json';

export const locales: Resource = {
  en: {
    title: 'English',
    translation: enTranslation
  },
  ru: {
    title: 'Russian',
    translation: esTranslation
  }
};
