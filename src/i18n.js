import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import fi from './locales/fi.json'

const messages = {
  en,
  fi,
};

const i18n = createI18n({
  locale: 'fi',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
