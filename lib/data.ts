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
      "Currently I am studying BCA degree in Veer Narmad South Gujarat University",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Front-End Developer (9 month)",
    location: "Surat",
    description:
      "I am react js developer at implies solution Collaborated with team members to created many projcet in react js techology for company and client ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
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
