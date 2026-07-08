import { createI18n } from 'vue-i18n';
import frNavbar from './locales/fr/navbar';
import frHome from './locales/fr/home';
import frServices from './locales/fr/services';
import frRealisations from './locales/fr/realisations';
import frAbout from './locales/fr/about';
import frContact from './locales/fr/contact';

import enNavbar from './locales/en/navbar';
import enHome from './locales/en/home';
import enServices from './locales/en/services';
import enRealisations from './locales/en/realisations';
import enAbout from './locales/en/about';
import enContact from './locales/en/contact';

const messages = {
  fr: { ...frNavbar, ...frHome, ...frServices, ...frRealisations, ...frAbout, ...frContact },
  en: { ...enNavbar, ...enHome, ...enServices, ...enRealisations, ...enAbout, ...enContact },
};

export default createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'fr',
  fallbackLocale: 'fr',
  messages,
});