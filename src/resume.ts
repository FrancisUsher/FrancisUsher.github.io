import { compareAsc, compareDesc } from "date-fns";

enum Skills {
  js = "JavaScript",
  ts = "TypeScript",
}

enum Employers {
  nexon = "Nexon America",
  nexonEU = "Nexon Europe",
  travelers = "Travelers Insurance",
}

enum Titles {
  webDeveloper = "Web Developer",
  associateSoftwareEngineer = "Junior Software Engineer",
  frontEndEngineer = "Front-End Software Engineer",
  softwareEngineer2 = "Senior Software Engineer",
}

interface Job {
  employer: Employers;
  roles: Role[];
  location: string;
}

interface Role {
  title: Titles;
  startDate: Date;
  endDate?: Date;
  description: string;
}

interface ResumeItem {
  description: string;
  shortDescription: string;
  job: Job;
  skills: Skills[];
}

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

const jobs: Job[] = [
  {
    employer: Employers.nexonEU,
    roles: [
      {
        title: Titles.webDeveloper,
        startDate: new Date(2015, 2),
        endDate: new Date(2016, 7),
        description: "Entry-level web development role",
      },
    ],
    location: "Berlin, Germany",
  },
  {
    employer: Employers.nexon,
    roles: [
      {
        title: Titles.associateSoftwareEngineer,
        startDate: new Date(2016, 7),
        endDate: new Date(2017, 11),
        description: "Full-stack engineering role",
      },
      {
        title: Titles.frontEndEngineer,
        startDate: new Date(2018, 0),
        endDate: new Date(2020, 6),
        description: "Front-end engineering role",
      },
    ],
    location: "Los Angeles, CA",
  },
  {
    employer: Employers.travelers,
    roles: [
      {
        title: Titles.softwareEngineer2,
        startDate: new Date(2020, 7),
        description: "Senior-level engineering role",
      },
    ],
    location: "Hartford, CT (Fully remote)",
  },
];

const resumeItems: ResumeItem[] = [];

export { jobs, resumeItems, getJobStartDate, getJobEndDate };

export type { Job, Role };
