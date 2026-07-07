// src/i18n.js
import { createI18n } from 'vue-i18n';
import { projectsMessages } from './projects.i18n';

const messages = {
  en: {
    navbar: {
      home: "VDEV",
      offer: "Services",
      realisations: "Portfolio",
      about: "About",
      contact: "Contact",
      cv: "CV"
    },
    home: {
      hero: {
        title: "Victor De Vos, web developer and technical writer",
        subtitle: "Whether you're building a website or updating documentation, I'll work with you wherever you are.",
        cta_primary: "See my services",
        cta_secondary: "Get in touch",
      },
      offer: {
        title: "What I can do for you",
        subtitle: "Two complementary skills, one point of contact.",
        dev: {
          title: "Web development",
          text: "Showcase websites, custom applications, migrations — I build sites that are robust and easy to maintain.",
        },
        redaction: {
          title: "Technical writing",
          text: "Clear documentation for your users and your teams: guides, manuals, knowledge bases.",
        },
        cta: "Discover the full offer",
      },
      projects: {
        title: "A few recent projects",
        cta: "See all projects",
      },
      about: {
        teaser: "A technical writer turned developer, I bring documentation rigor and attention to detail to every project.",
        cta: "More about my background",
      },
      cta: {
        title: "Got a project in mind?",
        button: "Let's talk about it",
      },
    },
    offer: {
  title: "What I can do for you",
  intro: "Web development and technical writing: two complementary skills, one point of contact.",
  dev: { title: "Web development", text: "I build robust websites, designed to last and easy to maintain." },
  redaction: { title: "Technical writing", text: "I document your products so they stay usable without you." },
  cta: "Get in touch for a quote",
},
realisationsPage: {
  title: "Portfolio",
  filters: {
    all: "All",
    dev: "Web development",
    redaction: "Technical writing"
  }
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
contact: {
      description: "Ready to bring your project to life? Send me a message.",
      location: "Based in Lyon, France",
form: {
  name: "Your name",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  message: "Message",
  callback: "Would you like us to call you back?",
  submit: "Send Message",
},
    },  
  },
  fr: {
    navbar: {
      home: "VDEV",
      offer: "Services",
      realisations: "Réalisations",
      about: "À propos",
      contact: "Contact",
      cv: "CV"
    },
    home: {
      hero: {
        title: "Victor De Vos, intégrateur web et rédacteur technique",
        subtitle: "Création et refonte de sites, gestion de la documentation technique.",
        cta_primary: "Voir mes services",
        cta_secondary: "Me contacter",
      },
      offer: {
        title: "Ce que je peux faire pour vous",
        subtitle: "Deux compétences complémentaires, un seul interlocuteur.",
        dev: {
          title: "Développement web",
          text: "Sites vitrines, e-commerce, migrations. Développement de sites robustes et faciles à maintenir.",
        },
        redaction: {
          title: "Rédaction technique",
          text: "Documentation claire pour vos utilisateurs et vos équipes : guides, notices, bases de connaissances.",
        },
        cta: "Découvrir les offres complètes",
      },
      projects: {
        title: "Mes dernières réalisations",
        cta: "Voir toutes les réalisations",
      },
      about: {
        teaser: "Rédacteur technique devenu développeur, j'allie rigueur documentaire et sens du détail dans chaque projet.",
        cta: "En savoir plus sur mon parcours",
      },
      cta: {
        title: "Un projet en tête ?",
        button: "Discutons-en",
      },
    },
offer: {
  title: "Ce que je peux faire pour vous",
  intro: "Développement web et rédaction technique : deux compétences complémentaires, un seul interlocuteur.",
  dev: { title: "Développement web", text: "Je conçois des sites robustes, pensés pour durer et faciles à maintenir." },
  redaction: { title: "Rédaction technique", text: "Je documente vos produits pour qu'ils restent utilisables sans vous." },
  cta: "Me contacter pour un devis",
},
realisationsPage: {
  title: "Réalisations",
  filters: {
    all: "Tout",
    dev: "Développement web",
    redaction: "Rédaction technique"
  }
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
contact: {
      description: "Prêt à donner vie à votre projet ? Écrivez-moi.",
      location: "Basé à Lyon, France",
form: {
  name: "Votre nom",
  email: "Email",
  phone: "Téléphone",
  subject: "Objet de votre message",
  message: "Message",
  callback: "Souhaitez-vous être rappelé(e) ?",
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