import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to my portfolio",
          "about": "About me",
          "projects": "Projects",
          "contact": "Contact"
        }
      },
      es: {
        translation: {
          "welcome": "Bienvenido a mi portafolio",
          "about": "Sobre mí",
          "projects": "Proyectos",
          "contact": "Contacto"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;