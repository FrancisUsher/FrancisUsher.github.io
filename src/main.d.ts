type Skill =
  | "SQL"
  | "JavaScript"
  | "TypeScript"
  | "Flow JS Type System"
  | "PHP"
  | "Scala"
  | "React"
  | "Vue.js"
  | "Unit Testing"
  | "End-to-end Testing"
  | "Jest"
  | "Cypress"
  | "Webpack"
  | "C#"
  | "Material Design"
  | "Git"
  | "Mentorship"
  | "Leadership"
  | "Web Security"
  | "Presentation";

type Employer = "Nexon America" | "Nexon Europe" | "Travelers Insurance";

type Title =
  | "Web Developer"
  | "Junior Software Engineer"
  | "Front-End Software Engineer"
  | "Senior Software Engineer";

interface SkillDetails {
  iconFileName: string;
  description: string;
  detailsUrl: string;
}

type SkillItems = {
  [key in Skill]?: SkillDetails;
};

interface Job {
  employer: Employer;
  roles: Role[];
  location: string;
}

interface Role {
  title: Title;
  startDate: Date;
  endDate?: Date;
  description: string;
}

interface ResumeItem {
  description: string;
  shortDescription: string;
  skills: Skill[];
}

interface ResumeItemsMap {
  [k: Employer]: ResumeItem[];
}
