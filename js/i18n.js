const translations = {
  en: {
    "meta.title": "Louis Chartier | Frontend Developer",
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.title": "Hi, I'm <strong>Louis Chartier</strong>",
    "hero.cta": "View My Work",
    "about.title": "About Me",
    "about.text":
      "Full Stack Developer with a strong frontend focus and a track record of delivering production-grade web applications, including a deployed CRM-based event planning platform built with React, Spring Boot, and PostgreSQL. Owns projects end-to-end, from requirements and database design through deployment and iteration, while managing client relationships and architectural decisions independently. Bilingual (EN/FR), detail-oriented, and experienced with AI-assisted development workflows. Actively seeking frontend, full stack, or software development roles.",
    "projects.title": "Projects",
    "alt.movie": "Movie Explorer screenshot",
    "alt.twitter": "Twitter Clone screenshot",
    "alt.realtor": "Realtor Website screenshot",
    "alt.internal": "Internal System Management Application",
    "alt.market": "Market Place screenshot",
    "p1.desc":
      "A React app using the TMDB API to explore and favorite movies. Responsive and mobile-friendly.",
    "p2.title": "Twitter Clone",
    "p2.desc":
      "Twitter clone using React + Vite, Python FastAPI, and MySQL. Responsive and mobile-friendly.",
    "p3.title": "Realtor Website",
    "p3.desc":
      "A PHP & MySQL real estate site with dynamic listings, contact forms, and a mobile-first UI. Built with HTML, CSS, and vanilla PHP for full-stack functionality.",
    "p3.badge": "Responsive Design",
    "p4.title": "Internal System Management Application",
    "p4.desc":
      "A React + Spring Boot application customly designed to fit a businesses needs. Centralized management platform with a CRM approach.",
    "p5.title": "Market Place",
    "p5.desc":
      "Marketplace demo built with Angular, showcasing product browsing, search/filter/sort, a persistent cart, and a mock authentication flow. Built with standalone components and signals for reactive state management, with a fully custom, responsive design.",
    "btn.demo": "Live Demo",
    "btn.presentation": "Presentation",
    "skills.title": "Skills",
    "contact.title": "Get in Touch",
    "contact.resume": "Download Resume",
    "footer.text": "© 2025 Louis Chartier. All rights reserved.",
  },
  fr: {
    "meta.title": "Louis Chartier | Développeur Frontend",
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "hero.title": "Bonjour, je suis <strong>Louis Chartier</strong>",
    "hero.cta": "Voir mes projets",
    "about.title": "À propos de moi",
    "about.text":
      "Développeur Full Stack avec une forte orientation frontend et une expérience de livraison d'applications web de qualité production, dont une plateforme de planification d'événements de type CRM déployée, construite avec React, Spring Boot et PostgreSQL. Prend en charge ses projets de bout en bout, de l'analyse des besoins et de la conception de la base de données jusqu'au déploiement et aux itérations, tout en gérant seul les relations clients et les décisions d'architecture. Bilingue (EN/FR), minutieux et à l'aise avec les flux de développement assistés par l'IA. À la recherche active d'un poste en développement frontend, full stack ou logiciel.",
    "projects.title": "Projets",
    "alt.movie": "Capture d'écran de Movie Explorer",
    "alt.twitter": "Capture d'écran du clone de Twitter",
    "alt.realtor": "Capture d'écran du site immobilier",
    "alt.internal": "Application interne de gestion",
    "alt.market": "Capture d'écran de Market Place",
    "p1.desc":
      "Une application React qui utilise l'API TMDB pour explorer des films et les ajouter à ses favoris. Responsive et adaptée aux mobiles.",
    "p2.title": "Clone de Twitter",
    "p2.desc":
      "Clone de Twitter avec React + Vite, Python FastAPI et MySQL. Responsive et adapté aux mobiles.",
    "p3.title": "Site immobilier",
    "p3.desc":
      "Un site immobilier PHP et MySQL avec annonces dynamiques, formulaires de contact et interface mobile-first. Construit avec HTML, CSS et PHP natif pour des fonctionnalités full stack.",
    "p3.badge": "Design responsive",
    "p4.title": "Application interne de gestion",
    "p4.desc":
      "Une application React + Spring Boot conçue sur mesure pour répondre aux besoins d'une entreprise. Plateforme de gestion centralisée avec une approche CRM.",
    "p5.title": "Place de marché",
    "p5.desc":
      "Démo de place de marché construite avec Angular : navigation dans les produits, recherche/filtre/tri, panier persistant et authentification simulée. Composants standalone et signals pour la gestion d'état réactive, avec un design entièrement personnalisé et responsive.",
    "btn.demo": "Démo en ligne",
    "btn.presentation": "Présentation",
    "skills.title": "Compétences",
    "contact.title": "Me joindre",
    "contact.resume": "Télécharger mon CV",
    "footer.text": "© 2025 Louis Chartier. Tous droits réservés.",
  },
};

const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.textContent = text;
  });

  // Keys containing markup (trusted, written by you only)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const html = dict[el.dataset.i18nHtml];
    if (html !== undefined) el.innerHTML = html;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const alt = dict[el.dataset.i18nAlt];
    if (alt !== undefined) el.setAttribute("alt", alt);
  });

  document.title = dict["meta.title"];
  document.documentElement.lang = lang;
  langToggle.textContent = lang === "en" ? "FR" : "EN";

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  // Lets script.js react (e.g. restart Typed.js with translated strings)
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

langToggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "fr" : "en");
});

// On load: saved choice, else browser language, else English
let saved = null;
try {
  saved = localStorage.getItem("lang");
} catch (e) {}
setLanguage(saved || (navigator.language.startsWith("fr") ? "fr" : "en"));