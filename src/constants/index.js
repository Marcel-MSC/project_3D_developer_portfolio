import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  sintel,
  remay,
  fincs,
  routeasy,
  martonis,
  ax4b,
  tesla,
  shopify,
  portfolio2d,
  carrent,
  jobit,
  tripguide,
  threejs,
  threejs2,
  reactjsportfolio,
  mmsclandingpage,
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
    title: "Fronted Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "Three JS",
    icon: threejs2,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Sintel S.A.",
    icon: sintel,
    iconBg: "#383E56",
    date: "January 2018 - December 2019",
    points: [
      "I joined as a support intern where I worked checking EDI digital files, business rule application compliance of Sintel systems, opening and analyzing calls/tickets",
      "At the end of 2018 I changed my position to Rollout intern where I applied settings in the internal system from Sintel and also analyzes file flow through the platform (Database and Delphi applications)",
      "In May I started working in the development area and worked with SQL, Linux, JavaScript, AngularJS, Protractor, Bootstrap, HTML5, CSS technologies and C#(Csharp).",
    ],
  },
  {
    title: "Full Stack Junior Developer",
    company_name: "Remay ",
    icon: remay,
    iconBg: "#E6DEDD",
    date: "January 2020 - March 2020",
    points: [
      "Developer of applications in C#, JavaScript (BootStrap and Jquery), HTML, CSS and SQL Server for Bradesco's internal applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "FINCS - Soluções e Componentes em Finanças",
    icon: fincs,
    iconBg: "#383E56",
    date: "May 2020 - August 2020",
    points: [
      "Development and maintenance of web applications in ASP.NET, C# and SQL Server.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Martoni's Sistemas Inteligentes",
    icon: martonis,
    iconBg: "#E6DEDD",
    date: "September 2020 - March 2021",
    points: [
      "Technologies: TypeScript, Reactjs, Nodejs, Mongodb and Oracle Data Base.",
      "The web applications were focused on monitoring the data that was provided by PRODATA partner.",
      "'Procedures' in Oracle were normal to perform on a daily basis.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "RoutEasy ",
    icon: routeasy,
    iconBg: "#E6DEDD",
    date: "April 2021 - May 2022",
    points: [
      "Application development in MEAN Stack.",
      "Routeeasy is focused on the logistics industry.",
      "MEAN Stack == Mongodb, ExpressJS, AngularJS e NodeJS.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "AX4B Enterprise Solutions ",
    icon: ax4b,
    iconBg: "#E6DEDD",
    date: "June 2022 - November 2022",
    points: [
      "Internal CRM development that uses HTML5, CSS3, JavaScript, Bootstrap, jQuery, C# and SQL Server.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "2D Portfolio",
    description:
      "2D portfolio with Kaboomjs, it was made to look like zelda old game of Ninntendo. Can tap/click around to see information about myself. The map is a representation of my house.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "Kaboomjs",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2d,
    source_code_link: "https://github.com/Marcel-MSC/2D-portfolio",
  },
  {
    name: "ReactJS Resume",
    description:
      "Its a portfolio to show some project, information and contact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "gitconnected",
        color: "green-text-gradient",
      },
    ],
    image: reactjsportfolio,
    source_code_link: "github.com/Marcel-MSC/portfolio-marcelo",
  },
  {
    name: "MMSC Fake Company",
    description:
      "This website is made with an experimental starter built using gatsby-theme-codebushi, a theme which uses Tailwind CSS.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Gatsby",
        color: "green-text-gradient",
      },
      {
        name: "potcss",
        color: "red-text-gradient",
      },
    ],
    image: mmsclandingpage,
    source_code_link: "https://github.com/Marcel-MSC/mmsc-landing-page",
  },
];

export { services, technologies, experiences, testimonials, projects };
