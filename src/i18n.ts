// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Exemplo de traduções
const resources = {
  en: {
    translation: {
      welcome: "Welcome Test",
      // outras chaves de tradução...
    }
  },
  pt: {
    translation: {
      welcome: "Teste Bem-vindo",
      // outras chaves de tradução...
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // língua inicial
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
