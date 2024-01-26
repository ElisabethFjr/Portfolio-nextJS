export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'A propos', href: '#about' },
  { name: 'Mon parcours', href: '#career' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skillsSections = [
  {
    name: 'Front-End',
    elems: [
      { name: 'HTML5', iconSrc: '/logos/icons8-html-50.webp' },
      { name: 'CSS3', iconSrc: '/logos/icons8-css3-50.webp' },
      { name: 'SASS', iconSrc: '/logos/icons8-sass-50.webp' },
      { name: 'JavaScript', iconSrc: '/logos/icons8-javascript-50.webp' },
      { name: 'Typescript', iconSrc: '/logos/icons8-typescript-50.webp' },
      { name: 'ReactJS', iconSrc: '/logos/icons8-react-48.webp' },
      { name: 'NextJS', iconSrc: '/logos/icons8-nextjs-48.webp' },
      { name: 'Redux', iconSrc: '/logos/icons8-redux-50.webp' },
      { name: 'Bootstrap', iconSrc: '/logos/icons8-bootstrap-50.webp' },
    ],
  },
  {
    name: 'Back-End',
    elems: [
      { name: 'NodeJS', iconSrc: '/logos/icons8-node-js-48.webp' },
      { name: 'Express', iconSrc: '/logos/icons8-express-js-48.webp' },
      { name: 'SQL', iconSrc: '/logos/icons8-sql-50.webp' },
      {
        name: 'PostgreSQL',
        iconSrc: '/logos/icons8-postgresql-50.webp',
      },
      {
        name: 'Sequelize',
        iconSrc: '/logos/sequelize_icon_132004.webp',
      },
      { name: 'API Rest', iconSrc: '/logos/icons8-api-64.webp' },
      {
        name: 'Programmation Orientée Objet',
        iconSrc: '/logos/icons8-object-oriented-programming-32.webp',
      },
      { name: 'MVC', iconSrc: '/logos/icons8-backend-50.webp' },
    ],
  },
  {
    name: 'Outils & Environnement',
    elems: [
      {
        name: 'VS Code',
        iconSrc: '/logos/icons8-visual-studio-50.webp',
      },
      { name: 'Git', iconSrc: '/logos/icons8-git-50.webp' },
      { name: 'GitHub', iconSrc: '/logos/icons8-github-64.webp' },
      { name: 'SCRUM', iconSrc: '/logos/icons8-scrum-64.webp' },
      { name: 'Trello', iconSrc: '/logos/icons8-trello-50.webp' },
    ],
  },
  {
    name: 'Soft Skills',
    elems: [
      {
        name: 'Autonomie',
        iconSrc: '/logos/flaticon-empowerment.webp',
      },
      {
        name: 'Esprit Logique',
        iconSrc: '/logos/icons8-logic-50.webp',
      },
      {
        name: 'Organisation',
        iconSrc: '/logos/flaticon-clipboard.webp',
      },
      { name: 'Curiosité', iconSrc: '/logos/flaticon-question.webp' },
      { name: 'Écoute active', iconSrc: '/logos/flaticon-voice.webp' },
    ],
  },
];

export const projects = [
  {
    title: "O'Journey",
    description: "Application d'organisation de voyage interactive.",
    link: 'https://o-journey.vercel.app/',
    imageSrc: '/images/ojourney.webp',
    tags: ['React', 'Redux', 'Typescript', 'NodeJS', 'Express', 'postgreSQL'],
  },
  {
    title: 'Ghibliotheque',
    description: 'Projet personnel sur les films du studio Ghibli.',
    link: 'https://github.com/ElisabethFjr/Ghibliotheque',
    imageSrc: '/images/ghibliotheque.webp',
    tags: ['VanillaJS', 'EJS', 'NodeJS', 'Express', 'postgreSQL'],
  },
  {
    title: 'Hunt Showdown Arsenal',
    description: 'Projet personnel sur le jeu vidéo Hunt Showdown (Crytek).',
    link: 'https://github.com/ElisabethFjr/Hunt-Showdown-Arsenal',
    imageSrc: '/images/hunt.webp',
    tags: ['VanillaJS', 'EJS', 'NodeJS', 'Express', 'postgreSQL'],
  },
];
