import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// API key and load path for translations
const apiKey = 'NEcsOaG3CchodIa5oZH8SQ';
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
  .use(HttpBackend) // To load translations from backend
  .use(LanguageDetector) // To detect the user language
  .use(initReactI18next) // To pass i18next instance to react-i18next
  .init({
    fallbackLng: 'en', // Fallback language when the selected language is not available
    ns: ['default'], // Namespace for translations
    defaultNS: 'default', // Default namespace
    supportedLngs: [
      'en', 'hi', 'af', 'sq', 'pa', 'hy', 'ar', 'am', 'as', 'ay', 
      'bm', 'az', 'bn', 'zh'
    ], // Supported languages
    backend: {
      loadPath: loadPath // URL template to load translations
    },
    detection: {
      // Optional settings for language detection
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator'],
      caches: ['cookie']
    },
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18next;
