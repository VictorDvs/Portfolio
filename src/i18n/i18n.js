// src/i18n.js
import { createI18n } from 'vue-i18n';
import { projectsMessages } from './projects.i18n';

const messages = {
  en: {
    navbar: {
      about: "About Me",
      techWritingProjects: "Tech Writer Projects",
      projects: "Web Dev Projects",
      experiences: "Experiences",
      contact: "Contact",
      cv: "My CV"
    },
    about: {
      title: "Welcome to my portfolio!",
      paragraph1: `My name is Victor, a technical writer with a focus on software and more recently, a web developer`, 
      paragraph2: `My few years in documenting digital solutions have given me the opportunity to document a SaaS solution as well as tools in the telecommunications sector. I have contributed to writing user guides, getting started documents, troubleshooting documentation, release notes, and many other resources, always with a focus on adapting to the needs of different user types.`, 
      paragraph3: "Explore my experiences and projects, and feel free to reach out if you're interested in collaborating.", 
      helene: "Technical Writer at",
      tem: `"Victor joined my team for a 9-month replacement during a period of significant transformations within the company. Although this was his first real professional experience as a technical writer, I was impressed by how quickly he acquired new skills and adapted to our tools and methods. Victor was particularly helpful in implementing the 'Docs-as-Code' methodology. Naturally curious and eager to do things well, he invested considerable effort in researching ways to optimize our processes and was proactive in making suggestions. Victor is calm and discreet without being withdrawn. He has a calming and positive effect on the team, making it extremely pleasant to work with him. He has all the qualities needed to thrive successfully in the world of technical writing or beyond. I highly recommend him."`
          },
    techWritingProjects: {
      docusaurus_title: "Docusaurus",
      fastpack_title: `Fastpack`, 
      fastpack_description: `Fictional project created with Docusaurus`,
    },
          ...projectsMessages.en,
    experiences: {
        title1: "Technical writer at EXFO Solutions, November 2022 - August 2023",
        tech: " Technologies used:",
        description1_1: "During my 9 months at EXFO, I learned a lot: managing multiple documentations simultaneously, code review, documentation migration (DITA to Markdown), setting up a Docs-as-Code workflow, and handling daily releases...",
        description1: "Since the technical documentation for EXFO solutions is confidential, I am unable to provide the documents I contributed to. However, I am presenting a few images that illustrate my work.",
        carousel1_slide1:"Doc setup with MkDocs", 
        carousel1_slide2:"Process for Publishing a New Version of Documentation",
        carousel1_slide3: "Comment Validation Process (Feedback)",  
        title2: "Technical writer at Olfeo, apprenticeship from September 2021 to September 2022",
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
      description: "I'd be happy to connect with you! Whether it's for questions, sharing projects, or just having a chat, feel free to reach out.",
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
      techWritingProjects: "Projets Rédacteur Technique",
      projects: "Projets Dév Web",
      experiences: "Expériences",
      contact: "Contact",
      cv: "Mon CV"
    },
    about: {
      title: "Bienvenue sur mon portfolio !",
      paragraph1: `Je m'appelle Victor, rédacteur technique orienté logiciel et plus récemment développeur web.`, 
      paragraph2: `Mes quelques années dans la documentation de solutions numériques m'ont donné l’occasion de documenter une solution SaaS ainsi que des outils dans le secteur des télécommunications. J’ai contribué à la rédaction de guides utilisateur, de démarrage, de documentations de troubleshooting, de notes de version et bien d’autres ressources, toujours avec le souci de m’adapter aux besoins des différents types d’utilisateurs.`, 
      paragraph3: "Explorez mes expériences et projets, et contactez-moi si vous êtes intéressé par une collaboration.", 
      helene: "Rédactrice Technique chez",
      tem: '" Victor a rejoint mon équipe dans le cadre d\'un remplacement de 9 mois, au cours d\'une période d\'importantes transformations dans l\'entreprise. Bien que cela soit sa première réelle expérience professionnelle en tant que rédacteur technique, il m\'a impressionnée par la rapidité avec laquelle il est monté en compétences et s\'est adapté à nos outils et méthodes. Victor m\'a notamment été d\'une aide considérable dans la mise en place de la méthode \'Doc-as-code\'. Curieux par nature et soucieux de bien faire, il s\'est beaucoup investi dans les recherches en vue d\'optimiser nos méthodes et a été force de proposition. Victor est calme et discret sans pour autant être effacé. Il a un effet apaisant et positif sur l\'équipe, c\'est extrêmement agréable de travailler avec lui. Il a toutes les qualités pour évoluer avec succès dans le monde de la rédaction technique ou ailleurs. Je le recommande vivement. "'
    },
    techWritingProjects: {
      docusaurus_title: "Docusaurus",
      fastpack_title: `Fastpack`, 
      fastpack_description: `Projet fictif réalisé avec Docusaurus`,
    },
    ...projectsMessages.fr,
    experiences: {
        title1: "Rédacteur technique chez EXFO Solutions, Novembre 2022 - Août 2023",
        tech: " Stack utilisé :",
        description1_1: "Pendant mes 9 mois chez EXFO, j'ai énormément appris : gestion de plusieurs documentations à la fois, revue de code, migration de doc (DITA vers Markdown), mise en place d'un workflow Docs-as-Code, releases quotidiennes...",
        description1: "Comme la documentation technique d'EXFO est confidentielle, je ne peux pas fournir les documents auxquels j'ai contribué. Cependant, je présente ci-dessous un fichier YAML et 2 process qui illustrent certaines de mes missions.",
        carousel1_slide1: "Configuration d'une doc avec MkDocs",
        carousel1_slide2: "Process de publication d'une nouvelle version de documentation",  
        carousel1_slide3: "Process de validation des commentaires (feedback)",  
        title2: "Rédacteur technique chez Olfeo, en alternance de septembre 2021 à septembre 2022",
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
      description: "Je serais heureux d'échanger avec vous ! Que ce soit pour des questions, des projets à partager, ou simplement pour discuter, contactez-moi sans hésiter.",
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
