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
  nest,
  vue,
  next,
  graphql,
  mindera,
  semantix,
  mentorcycle,
  newschool,
  awwcor,
  itau,
  balsatech,
  carrent,
  jobit,
  tripguide,
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
    title: "FullStack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

];

const technologies = [
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
    name: "next",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "nest",
    icon: nest,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "graphql",
    icon: graphql,
  },

];

const experiences = [
  {
    title: "Founder and Software Engineer",
    company_name: "Balsa Tech",
    icon: balsatech,
    iconBg: "#812121",
    date: "Jan 2017 - Jan 2019",
    points: [
      "Working autonomously with the provision of technology services.",
      "Technologies: Vue.js, React.js, Redux, Node.js, Nest.js, MongoDB, Postgres",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Semantix Brasil",
    icon: semantix,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Feb 2020",
    points: [
      "As a dedicated consultant at Unimed Brasil, developing the migration of its API's to an API Gateway system.",
      "bringing more security and reliability to the movement of customer information. In addition, I also worked on the front-end to manage these APIs using Angular.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "New School",
    icon: newschool,
    iconBg: "#812121",
    date: "Feb 2020 - Jan 2021",
    points: [
      "Leading the New School team which is an application whose proposal is to bring quality free education to people focused on young people from the periphery.",
      "Technologies: HTML, CSS, SCSS, Javascript, Typescript, Vue.js, Vuetify, Nuxt, Node.js, Nest, TypeORM, MySQL, Trello, Git, Github, Docker, AWS, Jest.",
    ],
  },
  {
    title: "Backend Software Engineer",
    company_name: "Itaú Unibanco",
    icon: itau,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - nov 2021",
    points: [
      "Working as a Software engineer member or the BaaS(Banking as a Service) team. ",
      "Techs: Kotlin, AWS, SpringBoot, jUnit, Jest, Swagger, OpenAPI, Jira, NestJS, DynamoDB and Kafka.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "AWWCOR, Inc.",
    icon: awwcor,
    iconBg: "#812121",
    date: "Nov 2021 - Dec 2022",
    points: [
      "Responsible for working on the Patientfi client, speaking English every day, holding meetings together with the Utah team.",
      "Techs: React, Redux, Node, Express, Mongoose, MongoDB, Typescript, Javascript, AWS, Docker.",
    ],
  },
  {
    title: "Co-Founder",
    company_name: "Mentor Cycle",
    icon: mentorcycle,
    iconBg: "#812121",
    date: "Jan 2023 - Present",
    points: [
      "Mentor Cycle is an Open-Source project to bring quality to students learning journey. I've created it because mentorship changed my career and the main objective of the platform is to connect people, students and mentors, to help learn and teach together, improving their skills.",
    ],
  },
  {
    title: "Full-stack Engineer",
    company_name: "Mindera",
    icon: mindera,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "Working as a Full-stack consultant for 2K Games company, creating the Dev Portal, holding meetings, planning tasks together with the US and Canada team, using English as the main language.",
      "Techs: React, Tailwind, Emotion, Contentful, Styled Components, GraphQL, Next.js, Node, Koa, Express, AWS, Docusaurus, TypeScript, JavaScript, Kubernetes, Docker.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
