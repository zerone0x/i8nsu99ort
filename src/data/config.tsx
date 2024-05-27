import { Site, SocialObjects } from "./type";
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
export const SITE: Site = {
  website: "https://trine.dev/", // replace this with your deployed domain
  author: "zerone0x",
  desc: "A self-motivated Frontend Web Developer, lifelong learner",
  title: "Trine",
  // ogImage: "zerone0x-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const expData = [
  {
    title: "Software Engineer",
    companyName: "Autodesk",
    // icon: promisLogo,
    date: "October 2020",
    city: "Shanghai",
    points: ["Worked on Autodesk's inventor team with a focus on Inventor Builds and Infrastructure.",
     "Built a dashboard to improve the efficiency of the deployment process. Using React. Used by over 300 engineers and handle 1000 checks daily",
     "Designed and developed a Github pipeline for commits' check for inventor repository.",
     "Built workers to check pipeline health and send alerts to slack."
    ],
  },
  {
    title: "Frontend Developer",
    companyName: "MCT",
    // icon: promisLogo,
    date: "October 2020",
    city: "Shanghai",
    points: ["Frontend Developer on careconnect team, built and shipped features for payment process.",
     "Rebuilt careconnect's transaction page to the new design system, which increased user using feelings and saved time by 2+%",
    "Optimized the build infrastructure (webpack, Babel) and improved build speed by over 70%",
    "Improved code base quality by improving the typing of over 3500 TypeScript files through automation"
  ],
  },
  {
    title: "Frontend Web Developer",
    companyName: "Upwork",
    // icon: promisLogo,
    date: "October 2020",
    city: "Shanghai",
    points: ["promis.points", "promis.points"],
  },
];
export type ExperienceProp = (typeof expData)[number];
export const skillsData = [
  {src: "/tech/html5.svg", alt: "HTML5"},
  {src: "/tech/css3.svg", alt: "CSS3"},
  { src: "/tech/javascript.svg", alt: "JavaScript" },
  { src: "/tech/typescript.svg", alt: "TypeScript" },
  { src: "/tech/reactjs.svg", alt: "React" },
  { src: "/tech/nextjs.svg", alt: "Next.js"},
  { src: "/tech/tailwindcss.svg", alt: "Tailwind CSS"},
  { src: "/tech/sass.svg", alt: "Sass"},
  { src: "/tech/redux.svg", alt: "Redux Toolkit" },
  { src: "/tech/reactquery.svg", alt: "React Query" },
  { src: "/tech/nodedotjs.svg", alt: "Node.js" },
  { src: "/tech/express.svg", alt: "Express" },
  { src: "/tech/postgresql.svg", alt: "Postgresql" },
  
];
export type SkillsProp = (typeof skillsData)[number];

export const projectData = [
  {
    title: "Movie APP",
    desc: "Awesome Movie tracking website designed for a pleasant movie recording experience. The site features a clean and modern look, making it easy for users to browse, rate and catch movies to their watchlist.",
    // TODO change accurate name according to react icon
    tags: ["React", "Redux", "Typescript"],
    imageURL: "/proj/movie4fun.png",
    GithubLink: "https://github.com/zerone0x/movie4fun",
    LiveLink: "https://movie4fun.netlify.app/",
  },
  {
    title: "Movie fffAPP",
    desc: "Awesome Movie tracking website designed for a pleasant movie recording experience. The site features a clean and modern look, making it easy for users to browse, rate and catch movies to their watchlist.",
    tags: ["TailwindCss"],
    imageURL: "/proj/movie4fun.png",
    GithubLink: "https://github.com/zerone0x/movie4fun",
    LiveLink: "https://movie4fun.netlify.app/",
  },
];
export type projectProp = (typeof projectData)[number];
// export const socialIcon = [
//   { src: "/social/linkedin.svg", alt: "Linkedin", href: "https://www.linkedin.com/in/x/" },
//   { src: "/social/github.svg", alt: "Github", href: "https://www.linkedin.com/in/x/"},
//   { src: "/social/x.svg", alt: "Twitter", href: "https://www.linkedin.com/in/x/" },
// ];
// TODO List all the lang icon I need
export const getTag = (tag: string) => {
  let values = [];
  if (tag == "React") {
    values[0] = "blue";
    values[1] = FaReact;
  } else if (tag == "Python") {
    values[0] = "orange";
    values[1] = FaPython;
  } else if (tag == "Javascript") {
    values[0] = "yellow";
    values[1] = FaJs;
  } else if (tag == "Sass") {
    values[0] = "pink";
    values[1] = FaSass;
  } else if (tag == "Flask") {
    values[0] = "green";
    values[1] = FaPepperHot;
  } else if (tag == "Laravel") {
    values[0] = "red";
    values[1] = FaLaravel;
  } else if (tag == "Bootstrap") {
    values[0] = "purple";
    values[1] = FaBootstrap;
  } else if (tag == "SQL") {
    values[0] = "blue";
    values[1] = FaDatabase;
  } else if (tag == "Typescript") {
    values[0] = "#3178C6"; // 蓝色
    values[1] = SiTypescript;
  } else if (tag == "Redux") {
    values[0] = "#764ABC"; // 紫色
    values[1] = SiRedux;
  } else if (tag == "Reactquery") {
    values[0] = "#FF4154"; // 红色
    values[1] = SiReactquery;
  } else if (tag == "TailwindCss") {
    values[0] = "#38B2AC"; // 青色
    values[1] = RiTailwindCssFill;
  } else if (tag == "NodeJs") {
    values[0] = "#339933"; // 绿色
    values[1] = FaNodeJs;
  } else if (tag == "Next.js") {
    values[0] = "gray";
    values[1] = SiNextdotjs;
  } else {
    values[0] = "gray";
    values[1] = FaCode;
  }
  return values;
};
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    src: "/social/github.svg",
    href: "https://github.com/zerone0x",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `${SITE.title} on Facebook`,
  //   active: false,
  // },
  // {
  //   name: "Instagram",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `${SITE.title} on Instagram`,
  //   active: false,
  // },
  {
    name: "LinkedIn",
    src: "/social/linkedin.svg",
    href: "https://github.com/zerone0x",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    src: "/social/x.svg",
    href: "https://github.com/zerone0x",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Mail",
    src: "/social/mail.svg",
    href: "mailto:zerone0x@trine.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  // {
  //   name: "YouTube",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `${SITE.title} on YouTube`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/zerone0x",
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];
