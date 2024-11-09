import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  viewzen,
  sibhi,
  repo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Viewzen Labs Pvt. Ltd.",
    icon: viewzen,
    iconBg: "#E6DEDD",
    date: "March 2022 - August 2022",
    points: [
      "Created automation testing scripts in JavaScript using Cypress, reducing regression testing workload by 20%.",
      "Contributed to frontend repositories to support testing and developed test cases that uncovered critical issues.",
      "Gained hands-on experience in test-driven development (TDD) and applied these principles effectively in subsequent roles.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Viewzen Labs Pvt. Ltd.",
    icon: viewzen,
    iconBg: "#383E56",
    date: "August 2022 - November 2023",
    points: [
      "Developed an enterprise-level web-based Management Information System (MIS) for the state of Meghalaya, enabling project tracking, in-depth metric visualization, and report generation for welfare initiatives.",
      "Utilized Angular for frontend, Node.js (Express) for backend, and PostgreSQL for data management, deploying via Docker with five distinct services for simplified deployment.",
      "Optimized legacy code to reduce file sizes by 50-70% and integrated SSO to enhance security, phasing out the third-party Keycloak authentication system.",
      "Provided extensive documentation, post-launch support, and actively participated in the entire software development lifecycle.",
    ],
  },
  {
    title: "Personal Projects",
    company_name: "Upskilling",
    icon: sibhi,
    iconBg: "#0A1627",
    date: "November 2023 - Present",
    points: [
      "Backend for a bookstore application built with Golang, featuring JWT authentication and MongoDB for data storage.",
      "A secure backend for a banking system developed with Golang, incorporating JWT authentication and MongoDB for managing user data.",
      "Authentication service using Node.js, supporting standard authentication flows and Google OAuth integration.",
    ],
  },
];

const projects = [
  {
    name: "Bookstore Application",
    description:
      "Backend for a bookstore application built with Golang, featuring JWT authentication and MongoDB for data storage.",
    tags: [
      {
        name: "Golang",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: repo,
    source_code_link: "https://github.com/AlphaArc/go-bookstore",
  },
  {
    name: "Banking Application",
    description:
      "A secure backend for a banking system developed with Golang, incorporating JWT authentication and MongoDB for managing user data.",
    tags: [
      {
        name: "Golang",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: repo,
    source_code_link: "https://github.com/AlphaArc/gobank",
  },
  {
    name: "Node.js Authentication App",
    description:
      "Authentication service using Node.js, supporting standard authentication flows and Google OAuth integration.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Google OAuth",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
    ],
    image: repo,
    source_code_link: "https://github.com/AlphaArc/sample-auth",
  },
  {
    name: "Live Messaging App",
    description:
      "A real-time messaging application developed with Node.js and Socket.io, supporting live communication and interactive chat features.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Real-time",
        color: "pink-text-gradient",
      },
    ],
    image: repo,
    source_code_link: "https://github.com/AlphaArc/node-web-socket",
  },
];

export { services, technologies, experiences, projects };
