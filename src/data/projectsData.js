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
      title: "Admin Panal",
      description: "Sorry I can't share it, it's secret =)",
      link: "#",
      secret: true,
      details: [
        "Future Group Translation Service"
      ],
      keywords: [
        "Admin Panel",
      ],
    },
    {
      imageUrl: aqaryImage,
      title: "Aqary real state project",
      description: "sample site for a lab in ITI",
      link: "https://aqary-eg.web.app/",
      details: ["- contact form", "- register form", "- login form"],
      keywords: [
        "CSS3",
        "HTML5",
        "Tailwindcss",
        "Angular",
        "Nodejs",
        "MongoDB",
        "Expressjs",
      ],
    },
    {
      imageUrl: meanProjectImage,
      title: "MEAN Stack Projet",
      description: "sample site for a lab in ITI",
      link: "https://mhamdadel.github.io/html-css-project/",
      details: ["- contact form", "- register form", "- login form"],
      keywords: [
        "CSS3",
        "HTML5",
        "Tailwindcss",
        "React",
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
      details: ["- contact form", "- register form", "- login form"],
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
      title: "Nodejs Framework",
      description: "solid framework uses nodejs with strong data structure", 
      link: "#",
      details: ["- Solid SOLID coding", "- SOLID Desgin Pattern codding", "- Uses data structure and alogrthims"],
      secret: true,
      keywords: [
        "Api",
        "Npm",
        "package",
        "Expressjs",
        "MongoDB",
        "Nodejs",
        "Microservies",
        "etc....",
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
      details: ["- contact form", "- register form", "- login form"],
      keywords: [
        "CSS",
        "HTML4",
        "contact form",
        "register form",
        "login form",
        "ITI",
      ],
    },
    {
      imageUrl: todoImage,
      title: "TODO list",
      description: "todo list project with custom future",
      link: "https://mhamdadel.github.io/index/projects/clientside/todo/todo-list.html",
      details: ["- local storage", "- rearrange todos", "- all future in todos"],
      keywords: [
        "TODO list",
        "local storage",
        "rearrange todos",
        "custom features",
      ],
    },
    {
      imageUrl: bootstrap,
      title: "bootstrap lib",
      description: "only bootstrap some words by css",
      link: "https://mhamdadel.github.io/index/projects/clientside/bootstrap/index.html",
      details: ["landing page"],
      keywords: ["Bootstrap", "landing page", "CSS"],
    },
    {
      imageUrl: breakBricksImage,
      title: "brick bricks",
      description: "javascript brick bricks game",
      link: "https://mhamdadel.github.io/index/projects/clientside/project_js_Game_brick_breaker/index.html",
      details: [
        "my team :",
        "Adel Abd Alatif",
        "Mustafa Mahmoud",
        "Mahmoud Mohammed",
      ],
      keywords: ["JavaScript", "brick bricks game", "team project"],
    },
    {
      imageUrl: cProgramming,
      title: "cross fire [ball & fire]",
      description: "javascript game project",
      link: "https://mhamdadel.github.io/index/projects/clientside/cross-fire/index.html",
      details: ["crossfire"],
      keywords: ["JavaScript", "game", "crossfire"],
    },
    {
      imageUrl: chessVesionImage,
      title: "chess vision",
      description: "javascript game project",
      link: "https://mhamdadel.github.io/index/projects/chess%20vision%20js/index.html",
      details: ["chess vision"],
      keywords: ["JavaScript", "game", "chess vision"],
    },
    {
      imageUrl: breakBricksImage,
      title: "brick bricks",
      description: "javascript brick bricks game",
      link: "https://mhamdadel.github.io/index/projects/clientside/project_js_Game_brick_breaker/index.html",
      details: [
        "futures",
        "- bonuses",
        "- fire",
        "- choose controller mouse or keyboard",
        "- extreme hard levels",
      ],
      keywords: [
        "JavaScript",
        "brick bricks game",
        "bonuses",
        "fire",
        "mouse controller",
        "keyboard controller",
        "extreme levels",
      ],
    },
    {
      imageUrl: eatFishImage,
      title: "eat fish",
      description: "javascript game project",
      link: "https://mhamdadel.github.io/fish/",
      details: ["eat fish"],
      keywords: ["JavaScript", "game", "eat fish"],
    },
    {
      imageUrl: footballImage,
      title: "football",
      description: "javascript game project",
      link: "https://mhamdadel.github.io/index/projects/clientside/football-game/index.html",
      details: ["football"],
      keywords: ["JavaScript", "game", "football"],
    },
    {
      imageUrl: cProgramming,
      title: "ping-bong",
      description: "pingbong game by c language use arrow to move",
      link: "https://github.com/mhamdadel/CLang-Ping-Pong",
      details: ["ping-pong by c"],
      keywords: ["C", "game", "ping-pong"],
    },
    {
      imageUrl: cProgramming,
      title: "choose random names",
      description:
        "c program apply you to choose randomly name from list of names",
      link: "https://github.com/mhamdadel/CLang-Ping-Pong",
      details: ["random-name"],
      keywords: ["C", "random name", "program"],
    },
    {
      imageUrl: cProgramming,
      title: "linked-list datastructure",
      description:
        "c program apply you to choose randomly name from list of names",
      link: "https://github.com/mhamdadel/linked-list",
      details: ["linked-list"],
      keywords: ["C", "linked-list", "datastructure"],
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