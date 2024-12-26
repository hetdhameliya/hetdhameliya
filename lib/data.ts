import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import luxchono from "@/public/luxchono.png";
import bt from "@/public/bt.png";

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
    title: "Bachelor of Computer Application",
    location: "Surat",
    description:
      "Graduated with First Class with Distinction from Veer Narmad South Gujarat University, acquiring a solid foundation in computer science and applications",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "React js Developer (1.5 Year)",
    location: "Surat",
    description:
      "Began as an intern and transitioned to a full-time React.js developer at Implies Solutions. Worked on various React.js and Next.js projects, delivering high-quality, responsive web applications for clients and the company. Gained strong technical skills in modern web development while enhancing communication and collaboration within the team.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - May 2024",
  },
  {
    title: "React Developer (8 month )",
    location: "Surat",
    description:
      "Currently working as a developer at Deskcode Solution, focusing on both web and mobile application development. I build cross-platform mobile apps using React Native, Firebase, and Capacitor.js, and also develop responsive web applications with React.js. In addition to coding",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  }
] as const;

export const projectsData = [
  {
    title: "Luxchono Watch",
    description:
      "I worked as a full-stack developer on this. Users can buy the watch with online payment",
    tags: ["React js", "MongoDB", "Tailwind", "Node js", "Type script"],
    imageUrl: luxchono,
  },
  {
    title: "bank transaction",
    description:
      "created a bank transaction management web application using node js and next js",
    tags: ["Next.js", "Node js", "Material Ui", "Tailwind", "MongoDB"],
    imageUrl: bt,
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
  "Firebase",
  "Capacitor js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Docker",
  "DevOps",
  "Material Ui",
  "Primereact",
  "React Suite",
] as const;
