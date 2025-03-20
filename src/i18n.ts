// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Exemplo de traduções
const resources = {
  en: {
    translation: {
      welcome: "Lucas Lima,",
      subhed: "Full-Stack Developer",
      subtitle: "Developer of modern interfaces, combining technology and creativity for efficient solutions.",
      buttonhd: "Download Now",

      protitle: "Projects" ,
      prosubtitle: "Achievements" ,

      protitlen1: "Project Oliator" ,
      prolabeln1: "Project created to learn more about react using bootstrap, creating and evaluating games" ,

      protitlen2: "" ,
      prolabeln2: "" ,

      
      protitlen3: "" ,
      prolabeln3: "" ,
    }
  },
  pt: {
    translation: {
      welcome: "Lucas Lima,",
      subhed: "Desenvolvedor Full-Stack",
      subtitle: "Desenvolvedor de interfaces modernas, unindo tecnologia e criatividade para soluções eficientes." ,
      buttonhd: "Baixar Curriculo",
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
