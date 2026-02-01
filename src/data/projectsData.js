import contentechViewImage from "../assets/portfolio/contentech.png";
import torjomanhViewImage from "../assets/portfolio/torjoman.png";
import adminPanalViewImage from "../assets/portfolio/admin-panal.jpg";
import cssHtmlProjectImage from "../assets/portfolio/html-css-project.png";
import todoImage from "../assets/portfolio/todo.png";
import footballImage from "../assets/portfolio/football.jpg";
import breakBricksImage from "../assets/portfolio/break-bricks.jpg";
import aqaryImage from "../assets/portfolio/aqary.png";
import meanProjectImage from "../assets/portfolio/mean-project.jpg";
import madminImage from "../assets/portfolio/madmin.png";
import chessVesionImage from "../assets/portfolio/chess-vesion.png";
import eatFishImage from "../assets/portfolio/eat-fish.png";
import bootstrap from "../assets/portfolio/bootstrap.png";
import cProgramming from "../assets/portfolio/c-programming.png";
import logoImage from "../assets/logo.png";



const projectsData = [
  {
    imageUrl: logoImage, // Using placeholder/logo for now as no image provided for Ayady
    title: "Ayady – Labor Recruitment Platform",
    description: "A full recruitment platform that allows Saudi citizens to hire labor from abroad.",
    link: "https://ayady.sa",
    details: [
      "Built with Laravel + Filament 3",
      "Facilitates labor recruitment for Saudi citizens"
    ],
    keywords: [
      "Laravel",
      "Filament 3",
      "PHP",
      "Recruitment Platform",
    ],
  },
  {
    imageUrl: logoImage, // Using placeholder/logo
    title: "InstaShop — Price Comparison Platform",
    description: "A full solution for comparing product prices across multiple e-commerce stores. (Under Development)",
    link: "#", // Under development
    details: [
      "Built with Fastify & Typescript",
      "Compare product prices",
      "Under Development"
    ],
    keywords: [
      "Fastify",
      "Typescript",
      "Price Comparison",
      "E-commerce",
    ],
  },
  {
    imageUrl: logoImage, // Using placeholder/logo
    title: "InstaCar — Car Listing Platform",
    description: "A platform similar to “Sayarat Saudi” for browsing and comparing car listings. (Under Development)",
    link: "#", // Under development
    details: [
      "Built with Laravel + Filament 3",
      "Car browsing and comparison",
      "Under Development"
    ],
    keywords: [
      "Laravel",
      "Filament 3",
      "Car Listing",
      "Platform",
    ],
  },
  {
    imageUrl: contentechViewImage,
    title: "Contentech",
    description:
      "This is one of the company's websites that works and contributed to it.",
    link: "https://contentech.com/",
    details: [
      "Future Group Translation Service"
    ],
    keywords: [
      "Dashboard",
      "CRM",
      "API",
      "Framework",
    ],
  },
  {
    imageUrl: torjomanhViewImage,
    title: "Torjoman",
    description:
      "This is one of the company's websites that works and contributed to it",
    link: "https://torjoman.com/",
    details: [
      "Future Group Translation Service"
    ],
    keywords: [
      "Dashboard",
      "CRM",
      "API",
      "Framework",
    ],
  },
  {
    imageUrl: adminPanalViewImage,
    title: "Translation Management System (TMS)",
    description: "A large-scale internal system for Future Group used by translators to manage translation workflows.",
    link: "#",
    secret: true,
    details: [
      "Future Group Translation Service",
      "Internal System"
    ],
    keywords: [
      "React",
      "Workflow Management",
      "Internal Tool",
    ],
  },
  {
    imageUrl: aqaryImage,
    title: "Aqary real state project",
    description: "real state project using MERN Stack",
    link: "https://aqary-eg.web.app/",
    details: ["- contact form", "- register form", "- login form"],
    keywords: [
      "CSS3",
      "HTML5",
      "Tailwindcss",
      "React",
      "Nodejs",
      "MongoDB",
      "Expressjs",
    ],
  },
  {
    imageUrl: meanProjectImage,
    title: "MEAN Stack Projet",
    description: "Book Store project using MEAN Stack",
    link: "https://github.com/Omar3ain/backend-MeanStack-project",
    details: [],
    keywords: [
      "CSS3",
      "HTML5",
      "Tailwindcss",
      "Angular",
      "Nodejs",
      "Expressjs",
      "MongoDB",
    ],
  },
  {
    imageUrl: madminImage,
    title: "MAdmin Nodejs Package",
    description: "admin management npm package manager for nodejs",
    link: "https://www.npmjs.com/package/@muhammedadel/madmin",
    details: [],
    keywords: [
      "Api",
      "Npm",
      "package",
      "Tailwindcss",
      "Angular",
      "Expressjs",
      "MongoDB",
    ],
  },
  {
    imageUrl: logoImage,
    title: "Java EE & spring boot",
    description: "Authentication and Authorization System for Microservices",
    link: "#",
    details: ["- Solid SOLID coding", "- SOLID Desgin Pattern codding", "- Uses data structure and alogrthims"],
    secret: true,
    keywords: [
      "Api",
      "Maven",
      "Spring boot",
      "Spring cloud",
      "Spring security",
      "Spring data",
      "Hibernate",
      "MongoDB",
      "mysql",
      "etc....",
    ],
  },
  {
    imageUrl: cssHtmlProjectImage,
    title: "example css&html4 site",
    description: "sample site for a lab in ITI",
    link: "https://mhamdadel.github.io/html-css-project/",
    details: [],
    keywords: [
      "CSS",
      "HTML4",
      "contact form",
      "register form",
      "login form",
      "ITI",
    ],
  },
  // Older projects kept for history if needed, but lower priority
  {
    imageUrl: todoImage,
    title: "TODO list",
    description: "todo list project with custom future",
    link: "https://mhamdadel.github.io/old_portfolio/projects/clientside/todo/todo-list.html",
    details: ["- local storage", "- rearrange todos", "- all future in todos"],
    keywords: [
      "TODO list",
      "local storage",
      "rearrange todos",
      "custom features",
    ],
  },
  {
    imageUrl: cProgramming,
    title: "shelySQL",
    description: "relational database system by bash script",
    link: "https://github.com/mhamdadel/shelySQL",
    details: ["RDBMS"],
    keywords: ["Bash", "script", "RDBMS", "database"],
  },
];
export default projectsData;