import { compareAsc, compareDesc } from "date-fns";
import { Skill, Employer, Title } from "./types/enums";

const skillItems: SkillItems = {
  [Skill.sql]: {
    iconFileName: "sql.svg",
    description:
      "SQL (Structured Query Language) is the standard of choice for programming relational databases.",
    detailsUrl: "https://en.wikipedia.org/wiki/SQL",
  },
  [Skill.js]: {
    iconFileName: "javascript.svg",
    description:
      "Javascript is the programming language of choice for the web.",
    detailsUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  [Skill.ts]: {
    iconFileName: "typescript.svg",
    description:
      "Typescript is a static-typed language that compiles down to Javascript.",
    detailsUrl: "https://www.typescriptlang.org/",
  },
  [Skill.flowjs]: {
    iconFileName: "flow.svg",
    description:
      "Flow is a static type checker for Javascript similar to Typescript, supported by Facebook.",
    detailsUrl: "https://flow.org/",
  },
  [Skill.php]: {
    iconFileName: "php.svg",
    description:
      "PHP is a scripting language commonly used for programming web servers.",
    detailsUrl: "https://www.php.net/",
  },
  [Skill.scala]: {
    iconFileName: "scala.svg",
    description:
      "Scala is a functional, object-oriented language that runs in the JVM (Java Virtual Machine).",
    detailsUrl: "https://www.scala-lang.org/",
  },
  [Skill.react]: {
    iconFileName: "react.svg",
    description:
      "React is the most popular Javascript library for web UI development.",
    detailsUrl: "https://reactjs.org/",
  },
  [Skill.vue]: {
    iconFileName: "vue.svg",
    description: "Vue.js is a popular Javascript framework for UI development.",
    detailsUrl: "https://vuejs.org/",
  },
  [Skill.material]: {
    iconFileName: "material.svg",
    description:
      "Material is a standardized design system supported by Google that powers many of today's web and mobile apps.",
    detailsUrl: "https://material.io/",
  },
  [Skill.jest]: {
    iconFileName: "jest.svg",
    description:
      "Jest an open source Javascript testing library supported by Facebook that is the gold standard for automated testing on web apps.",
    detailsUrl: "https://jestjs.io/",
  },
  [Skill.cSharp]: {
    iconFileName: "csharp.svg",
    description:
      "C# is an object-oriented language commonly used for web server programming, supported by Microsoft.",
    detailsUrl: "https://dotnet.microsoft.com/en-us/languages/csharp",
  },
};

function getJobStartDate(job: Job): Date {
  const startDate = job.roles
    .map((role) => role.startDate)
    .sort(compareDesc)
    .pop();

  if (startDate === undefined) {
    throw TypeError("Every job needs a role with a start date");
  }
  return startDate;
}

function getJobEndDate(job: Job): Date | undefined {
  const endDates = job.roles.filter((role) => role.endDate !== undefined);
  if (job.roles.length > endDates.length) {
    return undefined;
  }
  return endDates
    .map((role) => role.endDate)
    .sort((a, b) => compareAsc(a ?? 0, b ?? 0))
    .pop();
}

function getJobSkills(job: Job): SkillItems {
  return Object.fromEntries(
    Object.entries(skillItems).filter(([skillKey, skillItem]) =>
      resumeItems[job.employer]
        .flatMap((item) => item.skills)
        .includes(skillKey as Skill)
    )
  );
}

const jobs: Job[] = [
  {
    employer: Employer.nexonEU,
    roles: [
      {
        title: Title.webDeveloper,
        startDate: new Date(2015, 2),
        endDate: new Date(2016, 7),
        description: "Entry-level web development role",
      },
    ],
    location: "Berlin, Germany",
  },
  {
    employer: Employer.nexon,
    roles: [
      {
        title: Title.associateSoftwareEngineer,
        startDate: new Date(2016, 7),
        endDate: new Date(2017, 11),
        description: "Full-stack engineering role",
      },
      {
        title: Title.frontEndEngineer,
        startDate: new Date(2018, 0),
        endDate: new Date(2020, 6),
        description: "Front-end engineering role",
      },
    ],
    location: "Los Angeles, CA",
  },
  {
    employer: Employer.travelers,
    roles: [
      {
        title: Title.softwareEngineer2,
        startDate: new Date(2020, 7),
        description: "Senior-level engineering role",
      },
    ],
    location: "Hartford, CT (Fully remote)",
  },
];

const resumeItems: ResumeItemsMap = {
  [Employer.travelers]: [
    {
      description:
        "Leading a software team preparing complex insurance policy data for account managers.",
      shortDescription: "",
      skills: [Skill.mentorship, Skill.leadership],
    },
    {
      description:
        "Remaking high-value legacy UIs with React, Typescript, and Material Design (MUI).",
      shortDescription: "",
      skills: [Skill.ts, Skill.react, Skill.material],
    },
    {
      description:
        "Drove adoption of Jest and React Testing Library to build confidence in front-end feature delivery.",
      shortDescription: "",
      skills: [Skill.jest, Skill.react, Skill.leadership],
    },
    {
      description:
        "Normalizing arcane legacy data into a web UI context with C# .Net framework services.",
      shortDescription: "",
      skills: [Skill.cSharp],
    },
    {
      description:
        "Coaching developers towards better Git source control practices with commit message standards, mandatory code reviews, and evolving branching strategy towards CI/CD.",
      shortDescription: "",
      skills: [Skill.git, Skill.mentorship, Skill.leadership],
    },
  ],
  [Employer.nexon]: [
    {
      description:
        "Built and maintained web-frontend for global online gaming platform.",
      shortDescription: "",
      skills: [],
    },
    {
      description:
        "Co-founded web front-end team building a global Vue.js online gaming platform.",
      shortDescription: "",
      skills: [Skill.vue, Skill.leadership],
    },
    {
      description:
        "Built extensive back-office tools suite with Vue.js and Material Design (Vuetify).",
      shortDescription: "",
      skills: [Skill.vue, Skill.material],
    },
    {
      description:
        "Worked with a Korea-based design & UX team to create feature-rich, branded websites.",
      shortDescription: "",
      skills: [],
    },
    {
      description:
        "Pioneered adoption of test-driven front-end development, with Cypress for end-to-end tests, and Vue Test Utils with Jest for web component unit testing.",
      shortDescription: "",
      skills: [Skill.cypress, Skill.e2eTesting, Skill.unitTesting, Skill.jest],
    },
    {
      description:
        "Drove integration with third-party identity providers like Google, Facebook, Twitch, and Steam.",
      shortDescription: "",
      skills: [],
    },
    {
      description:
        "Introduced performance budgeting with Lighthouse and Webpack Bundle Analyzer.",
      shortDescription: "",
      skills: [],
    },
    {
      description:
        "Built and maintained a server-side rendered website and API for game accounts with Scala Play framework.",
      shortDescription: "",
      skills: [Skill.scala, Skill.js],
    },
    {
      description:
        "Wrote a tiny IE9-compatible partner auth library with Flow-typed ES6 and Rollup.",
      shortDescription: "",
      skills: [Skill.js, Skill.flowjs],
    },
    {
      description:
        "Automated builds, tests, and deployments with Webpack, Gulp, Gitlab, Jenkins, and Rundeck.",
      shortDescription: "",
      skills: [Skill.webpack],
    },
    {
      description:
        "Mentored other developers with tech talks and hands-on pair programming sessions.",
      shortDescription: "",
      skills: [Skill.mentorship, Skill.leadership, Skill.presentation],
    },
  ],
  [Employer.nexonEU]: [
    {
      description:
        "Built lean, responsive, static pages with Pug, Underscore, Bootstrap, and Less CSS.",
      shortDescription: "",
      skills: [],
    },
    {
      description:
        "Maintained and improved a C# ASP.net web portal and its SQL Stored Procedures.",
      shortDescription: "",
      skills: [Skill.cSharp, Skill.sql],
    },
    {
      description:
        "Audited and fixed secure authentication mechanisms in PHP and C# applications.",
      shortDescription: "",
      skills: [Skill.php, Skill.cSharp, Skill.security],
    },
  ],
};

export {
  jobs,
  resumeItems,
  skillItems,
  getJobStartDate,
  getJobEndDate,
  getJobSkills,
};
