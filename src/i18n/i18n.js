// src/i18n.js
import { createI18n } from 'vue-i18n';
import { projectsMessages } from './projects.i18n';

const messages = {
  en: {
    navbar: {
      about: "About Me",
      techWritingProjects: "Technical Writing",
      projects: "Web Devlopment",
      experiences: "Experiences",
      contact: "Contact",
      cv: "CV"
    },
    about: {
      title: "Welcome to my portfolio!",
      paragraph1: `I am a software-oriented technical writer with experience as a web developer.`, 
      paragraph2: `I have documented a cybersecurity SaaS product as well as several software solutions in the telecommunications and medical sectors. I write clear and structured documentation—user guides, troubleshooting guides, release notes—tailored to specific uses and business contexts. I also develop websites using the Vue and Symfony frameworks.`, 
      paragraph3: "Find out more about my projects and experience, and feel free to contact me.", 
      helene: "Technical Writer at",
      tem: `"Victor joined my team for a 9-month replacement during a period of significant transformations within the company. Although this was his first real professional experience as a technical writer, I was impressed by how quickly he acquired new skills and adapted to our tools and methods. Victor was particularly helpful in implementing the 'Docs-as-Code' methodology. Naturally curious and eager to do things well, he invested considerable effort in researching ways to optimize our processes and was proactive in making suggestions. Victor is calm and discreet without being withdrawn. He has a calming and positive effect on the team, making it extremely pleasant to work with him. He has all the qualities needed to thrive successfully in the world of technical writing or beyond. I highly recommend him."`
          },
    techWritingProjects: {
      docusaurus_title: "Docusaurus",
      mkdocs_title: "MkDocs",
      fastpack_title: "Fastpack", 
      fastpack_description: "Fastpack is a fictitious packaging tool designed to automate, simplify and standardize the preparation of web projects prior to deployment. I've tried to document it here with Docusaurus. (French version only, for the moment).",
      restokit_title: "RestoKit",
      restokit_description: "RestoKit is a fictitious SDK. For RESTful API references, I used the OpenAPI standard and integrated the Redocly tool into the project.",
            // Bouton 
      learn_more: "Learn more",
      visit_project: "Visit project",
      close: "Close"
    },
          ...projectsMessages.en,
    experiences: {
        title_efor: "Consultant at Efor Group",
        date_efor: "November 2025 - January 2026",
        description1_1_efor: "My main task at one of Efor's clients was to create a user manual for data visualization and analysis software in the healthcare sector. I worked closely with the project's Product Owner, who was a key subject matter expert during the development of the manual.",
        description1_efor: "To undertake this documentation, I was trained on IXIA CCMS, a DITA-based content management software. I started with an existing template for the company's software documentation and used other existing documents for certain topics. I was able to deliver a final draft to the PO, providing documentation for a first version of the software.",
        title_baifall_dream: "Web Developer (Intern) at Baïfall Dream",
        date_baifall_dream: "January 2025 - March 2025",
        desc_baifall_dream: "During my internship at Baïfall Dream, a web agency based in Paris, I developed jointly with another student a website for a future restaurant. We used Symfony for the entire site and set up deployment on Hostinger. As main features, we developed a user account, an admin space, online payment and implemented functional and unit tests.",
        resources_baifall_dream: "Some illustrations of the project :",
        carousel3_slide1: "Database design with the Mérise method",
        carousel3_slide2: "Admin interface design with EasyAdmin",
        carousel3_slide3: "Functional tests with PHPUnit",
        title1: "Technical writer at EXFO Solutions",
        date_title1: "November 2022 - August 2023",
        tech: " Technologies used:",
        description1_1: "During my 9 months at EXFO, I learned a lot: managing multiple documentations simultaneously, code review, documentation migration (DITA to Markdown), setting up a Docs-as-Code workflow, and handling daily releases.",
        description1: "Since the technical documentation for EXFO solutions is confidential, I am unable to provide the documents I contributed to. However, I am presenting a few images that illustrate my work.",
        carousel1_slide1:"Doc setup with MkDocs", 
        carousel1_slide2:"Process for Publishing a New Version of Documentation",
        carousel1_slide3: "Comment Validation Process (Feedback)",  
        title2: "Technical writer at Olfeo",
        date_title2: "Apprenticeship from September 2021 to September 2022",
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
      techWritingProjects: "Rédaction Technique",
      projects: "Développement Web",
      experiences: "Expériences",
      contact: "Contact",
      cv: "CV"
    },
    about: {
      title: "Bienvenue sur mon portfolio !",
      paragraph1: `Je suis rédacteur technique orienté logiciel, avec une casquette de développeur web.`, 
      paragraph2: `J’ai documenté un produit SaaS de cybersécurité ainsi que plusieurs solutions logicielles dans les télécommunications et le secteur médical. Je rédige des documentations claires et structurées — guides utilisateurs, dépannage, notes de version — adaptées aux usages et aux contextes métiers. Je développe aussi des sites avec les frameworks Vue et Symfony.`, 
      paragraph3: "Découvrez mes projets et expériences, et n’hésitez pas à me contacter.", 
      helene: "Rédactrice Technique chez",
      tem: '" Victor a rejoint mon équipe dans le cadre d\'un remplacement de 9 mois, au cours d\'une période d\'importantes transformations dans l\'entreprise. Bien que cela soit sa première réelle expérience professionnelle en tant que rédacteur technique, il m\'a impressionnée par la rapidité avec laquelle il est monté en compétences et s\'est adapté à nos outils et méthodes. Victor m\'a notamment été d\'une aide considérable dans la mise en place de la méthode \'Doc-as-code\'. Curieux par nature et soucieux de bien faire, il s\'est beaucoup investi dans les recherches en vue d\'optimiser nos méthodes et a été force de proposition. Victor est calme et discret sans pour autant être effacé. Il a un effet apaisant et positif sur l\'équipe, c\'est extrêmement agréable de travailler avec lui. Il a toutes les qualités pour évoluer avec succès dans le monde de la rédaction technique ou ailleurs. Je le recommande vivement. "'
    },
    techWritingProjects: {
      docusaurus_title: "Docusaurus",
      mkdocs_title: "MkDocs",
      fastpack_title: "Fastpack", 
      fastpack_description: "Fastpack est un outil fictif de packaging conçu pour automatiser, simplifier et standardiser la préparation de projets web avant déploiement. J'ai tenté ici de le documenter avec Docusaurus (En version française uniquement pour le moment).",
      restokit_title: "RestoKit",
      restokit_description: "RestoKit est un SDK fictif. Pour les références API RESTful, j'ai utilisé le standard OpenAPI et intégré l'outil Redocly au projet.",
      // Bouton
      learn_more: "En savoir plus",
      visit_project: "Visiter le projet",
      close: "Fermer"
    },
    ...projectsMessages.fr,
    experiences: {
        title_efor: "Consultant chez Efor Group",
        date_efor: "Novembre 2025 - Janvier 2026",
        description1_1_efor: "Ma mission principale chez l'un des clients d'Efor consistait à créer un manuel utilisateur pour un logiciel de visualisation et d'analyse de données dans le domaine de la santé. J'ai collaboré étroitement avec le Product Owner du projet. Il était un SME priviliégié durant l'élaboration du manuel.",
        description1_efor: "Pour entreprendre cette documentation, j'ai été formé sur IXIA CCMS, un logiciel de gestion de contenu basé sur DITA. Je suis parti d'un template existant pour la doc logiciel de la compagnie et je me suis servi des autres docs existantes pour certains topics. J'ai pu livrer un draft final au PO, assurant une doc pour une première version du logiciel.",
        title_baifall_dream: "Développeur web (Stagiaire) chez Baïfall Dream",
        date_baifall_dream: "Janvier 2025 - Mars 2025",
        desc_baifall_dream: "Durant mon stage chez Baïfall Dream, une agence web basée à Paris, j'ai développé conjointement avec une autre étudiante un site d'un futur restaurant. Nous avons utilisé Symfony pour l'ensemble du site et mis en place un déploiement sur Hostinger. Comme fonctionnalités principales, nous avons développé un compte utilisateur, un espace admin, le payement en ligne et mis en place des tests fonctionels et unitaires.",
        resources_baifall_dream: "Quelques illustrations du projet :",
        carousel3_slide1: "Conception de la BDD avec la méthode Mérise",
        carousel3_slide2: "Conception de l'interface admin avec EasyAdmin",
        carousel3_slide3: "Tests fonctionnels avec PHPUnit",
        title1: "Rédacteur technique chez EXFO Solutions",
        date_title1: "Novembre 2022 - Août 2023",
        tech: " Stack utilisé :",
        description1_1: "Pendant mes 9 mois chez EXFO, j'ai énormément appris : gestion de plusieurs projets, revue de code, migration de doc (DITA vers Markdown), mise en place d'un workflow Docs-as-Code, releases quotidiennes.",
        description1: "Comme la documentation technique d'EXFO est confidentielle, je ne peux pas fournir les documents auxquels j'ai contribué. Cependant, je présente ci-dessous un fichier YAML et 2 process qui illustrent certaines de mes missions.",
        carousel1_slide1: "Configuration d'une doc avec MkDocs",
        carousel1_slide2: "Process de publication d'une nouvelle version de documentation",  
        carousel1_slide3: "Process de validation des commentaires (feedback)",  
        title2: "Rédacteur technique chez Olfeo",
        date_title2: "Alternance de septembre 2021 à septembre 2022",
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
  locale: localStorage.getItem('lang') || 'fr', // Récupérer la langue depuis le localStorage ou définir la langue par défaut
  messages,
});

export default i18n;
