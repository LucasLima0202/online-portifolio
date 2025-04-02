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

      protitlen2: "Project Controlnomy" ,
      prolabeln2: "" ,

      
      protitlen3: "Project Safari App" ,
      prolabeln3: "" ,

      buttonpro: "More Projects" ,

      appsectiontitle: "Tools",
      appsubtitle: "Make it happen" ,

      socialtitle: "About",
      socialsubtitle: "Envolving"


      
    }
  },
  pt: {
    translation: {
      welcome: "Lucas Lima,",
      subhed: "Desenvolvedor Full-Stack",
      subtitle: "Desenvolvedor de interfaces modernas, unindo tecnologia e criatividade para soluções eficientes." ,
      buttonhd: "Baixar Curriculo",

      protitle: "Projetos" ,
      prosubtitle: "Conquistas" ,

      protitlen1: "Projeto Oliator" ,
      prolabeln1: "Projeto criado para aprender mais sobre react usando bootstrap, criando e avaliando jogos" ,

      protitlen2: "Projeto Controlnomy" ,
      prolabeln2: "" ,

      
      protitlen3: "Projeto Safari App" ,
      prolabeln3: "" ,

      buttonpro: "Mais Projetos"
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
