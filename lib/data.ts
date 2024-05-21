import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import blogApp from "@/public/blogApp.png";
import crytoApp from "@/public/cryptoApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Mumbai, Maharashtra",
    description:
      "I worked as a web developer, developed responsive web apps with React.js, Vue.js, and Next.js. Utilized Next.js for server-side rendering and maintained clean, efficient, version-controlled code.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2023 - 02/2024",
  },
  {
    title: "Graduation",
    location: "Uttar Pradesh, India",
    description:
      "I graduated with a Bachelor of Technology in Information Technology from Dr. A.P.J. Abdul Kalam Technical University.",
    icon: React.createElement(LuGraduationCap),
    date: "08/2019-06/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Blog App",
    description:
      "A full-stack blog app with React frontend, Node.js backend using MongoDB, and secure JWT authentication with Google login.",
    tags: [
      "React",
      "Express",
      "Node",
      "JWT authentication",
      "MongoDB",
      "TailwindCSS",
      "Redux",
    ],
    imageUrl: blogApp,
  },
  {
    title: "Crypto App",
    description:
      "The web app offers real-time cryptocurrency data. Stay updated on crypto prices, market trends, and news effortlessly.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Ant Design",
      "API",
      "Redux",
      "ChartJS",
    ],
    imageUrl: crytoApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "Git",
  "Tailwind",
  "MongoDB",
  "AWS",
  "Express",
  "Framer Motion",
] as const;
