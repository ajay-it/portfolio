import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import chatAppImg from "@/public/chatApp.png";
import todoListImg from "@/public/todoList.png";

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
    title: "Graduation",
    location: "Uttar Pradesh, India",
    description:
      "I graduated with a Bachelor of Technology in Information Technology from Dr. A.P.J. Abdul Kalam Technical University.",
    icon: React.createElement(LuGraduationCap),
    date: "08/2019-06/2023",
  },
  {
    title: "Software Engineer",
    location: "Mumbai, Maharashtra",
    description:
      "I worked as a web developer, developed responsive web apps with React.js, Vue.js, and Next.js. Utilized Next.js for server-side rendering and maintained clean, efficient, version-controlled code.",
    icon: React.createElement(CgWorkAlt),
    date: "06/2023 - 01/2024",
  },
] as const;

export const projectsData = [
  {
    title: "Chat Application",
    description:
      "The web app enables user sign-in and connects them with others via WebSocket for live chat functionality.",
    tags: [
      "React",
      "Express",
      "WebSocket",
      "JWT authentication",
      "MongoDB",
      "Tailwind",
    ],
    imageUrl: chatAppImg,
  },
  {
    title: "ToDo List",
    description:
      "The web app enables users to save their to-do lists for easy access and organization.",
    tags: ["HTML", "CSS", "JavaScript", "React", "MongoDB", "Express"],
    imageUrl: todoListImg,
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
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
] as const;
