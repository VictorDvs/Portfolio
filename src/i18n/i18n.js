// src/i18n.js
import { createI18n } from 'vue-i18n';
import { projectsMessages } from './projects.i18n';

const messages = {
  en: {
    navbar: {
      about: "About Me",
      projects: "Projects",
      experiences: "Experiences",
      contact: "Contact",
      cv: "My CV"
    },
    about: {
      title: "Welcome to my portfolio!",
      paragraph1: `I’m Victor, a technical writer with a passion for the web. I enjoy creating clear and user-friendly documentation.`, 
      paragraph2: `Currently, I am undergoing training to acquire skills in programming languages and frameworks. My future goal is to work closely with developers and engineers to create precise and effective documentation.`, 
      paragraph3: "Feel free to explore my experiences and projects, and contact me for any collaboration opportunities.", 
      helene: "Technical Writer at",
      tem: `"Victor joined my team for a 9-month replacement during a period of significant transformations within the company. Although this was his first real professional experience as a technical writer, I was impressed by how quickly he acquired new skills and adapted to our tools and methods. Victor was particularly helpful in implementing the 'Docs-as-Code' methodology. Naturally curious and eager to do things well, he invested considerable effort in researching ways to optimize our processes and was proactive in making suggestions. Victor is calm and discreet without being withdrawn. He has a calming and positive effect on the team, making it extremely pleasant to work with him. He has all the qualities needed to thrive successfully in the world of technical writing or beyond. I highly recommend him."`
          },
          ...projectsMessages.en,
    experiences: {
        title1: "EXFO Solutions, St. Jacques-de-la-Lande, November 2022 - August 2023",
        tech: " Technologies used:",
        description1: "Since the technical documentation for EXFO solutions is confidential, I am unable to provide the documents I contributed to. However, I am presenting a few images that illustrate my work.",
        carousel1_slide1:"Documentation setup with MkDocs", 
        carousel1_slide2:"Process for Publishing a New Version of Documentation",
        carousel1_slide3: "Comment Validation Process (Feedback)",  
        title2: "Olfeo, Paris, Apprenticeship from September 2021 to September 2022",
        description2: "Although the documentation has fortunately evolved over time, I had the opportunity to actively contribute to its redesign and development for Olfeo's SaaS solution. I was involved in integrating new features and creating new sections, such as the knowledge base, which includes use cases, problem-solving guides, and release notes.",
        resources: "To learn more :",
        linkOlfeoDoc: "Link to the documentation :",
        soutenance: 'My presentation (PDF)',
        carousel2_slide1: "Knowledge base summary",
        carousel2_slide2: "Use cases",
        carousel2_slide3: "Troubleshooting section",
        carousel2_slide4: "Release notes",

      },
    contact: {
      description: "I would be happy to chat with you! Whether you have questions, projects in mind, or just want to have a conversation, feel free to reach out to me. You can count on a quick response so we can move forward together.",
      form: {
        email: "Email",
        message: "Message",
        submit: "Send Message",
      },
    },
  },
  fr: {
    navbar: {
      about: "À mon propos",
      projects: "Projets Dév Web",
      experiences: "Expériences",
      contact: "Contact",
      cv: "Mon CV"
    },
    about: {
      title: "Bienvenue sur mon portfolio !",
      paragraph1: `Je suis Victor, rédacteur technique et passionné par le web. J'aime créer des documentations claires et adaptées aux utilisateurs.`, 
      paragraph2: `Actuellement, je suis une formation afin d’acquérir des compétences en langages et frameworks. Mon objectif futur est de pouvoir travailler en étroite collaboration avec les développeurs et ingénieurs pour concevoir une documentation précise et efficace.`, 
      paragraph3: "N’hésitez pas à consulter mes expériences et projets, et à me contacter pour toute collaboration.", 
      helene: "Rédactrice Technique chez",
      tem: '"Victor a rejoint mon équipe dans le cadre d`\'un remplacement de 9 mois, au cours d\'une période d\'importantes transformations dans l\'entreprise. Bien que cela soit sa première réelle expérience professionnelle en tant que rédacteur technique, il m\'a impressionnée par la rapidité avec laquelle il est monté en compétences et s\'est adapté à nos outils et méthodes. Victor m\'a notamment été d\'une aide considérable dans la mise en place de la méthode \'Doc-as-code\'. Curieux par nature et soucieux de bien faire, il s\'est beaucoup investi dans les recherches en vue d\'optimiser nos méthodes et a été force de proposition. Victor est calme et discret sans pour autant être effacé. Il a un effet apaisant et positif sur l\'équipe, c\'est extrêmement agréable de travailler avec lui. Il a toutes les qualités pour évoluer avec succès dans le monde de la rédaction technique ou ailleurs. Je le recommande vivement."'

    },
    ...projectsMessages.fr,
    experiences: {
        title1: "EXFO Solutions, St. Jacques-de-la-Lande, Novembre 2022 - Août 2023",
        tech: " Stack utilisé :",
        description1: "Étant donné que la documentation technique des solutions d'EXFO est confidentielle, je ne peux pas fournir les documents auxquels j'ai contribué. Cependant, je vous présente quelques images qui illustrent mon travail.",
        carousel1_slide1: "Configuration de la documentation avec MkDocs",
        carousel1_slide2: "Process de publication d'une nouvelle version de documentation",  
        carousel1_slide3: "Process de validation des commentaires (feedback)",  
        title2: "Olfeo, Paris, En alternance de septembre 2021 à septembre 2022",
        description2: "Bien que la documentation ait heureusement évolué au fil du temps, j’ai eu l’opportunité de contribuer activement à sa refonte et à son développement pour la solution SaaS d’Olfeo. J’ai participé à l’intégration de nouvelles fonctionnalités et à la création de sections inédites, telles que la base de connaissances regroupant des cas d’usage, des résolutions de problèmes et des notes de version.",    
        resources: "Pour en savoir plus :",
        linkOlfeoDoc: "Lien vers la documentation :",
        soutenance: 'Ma soutenance (PDF)',
        carousel2_slide1: "Sommaire de la base de connaissances",
        carousel2_slide2: "Cas d'usages",
        carousel2_slide3: "Résolution de problèmes",
        carousel2_slide4: "Notes de versions",
    },
    contact: {
      description: "Je serai ravi d'échanger avec vous ! Que vous ayez des questions, des projets en tête, ou simplement une envie de discuter, n'hésitez pas à m'écrire. Vous pouvez compter sur une réponse rapide pour que nous puissions avancer ensemble.",
      form: {
        email: "Email",
        message: "Message",
        submit: "Envoyer le message",
      },
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en', // Récupérer la langue depuis le localStorage ou définir la langue par défaut
  messages,
});

export default i18n;
