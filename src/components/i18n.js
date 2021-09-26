import i18next from 'i18next'
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

export default i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
  detection: DETECTION_OPTIONS,
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    },
    ru: {
      translation: {
        "key": "привет мир"
      }
    },
  }
});