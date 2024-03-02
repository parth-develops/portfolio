import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import proj1Img from "@/public/proj1.png";
import proj2Img from "@/public/proj2.jpg";
import proj3Img from "@/public/proj3.png";

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
        title: "Computer Engineering",
        location: "India",
        description:
            "Description here",
        icon: React.createElement(LuGraduationCap),
        date: "2018 - 2022",
    },
    {
        title: "Web Dev Intern",
        location: "India",
        description:
            "Description here",
        icon: React.createElement(CgWorkAlt),
        date: "March 2021 - November 2021",
    },
    {
        title: "Freelance Front-End Developer",
        location: "Remote",
        description:
            "Description here",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Full-Stack Developer",
        location: "Remote",
        description:
            "Decription here",
        icon: React.createElement(FaReact),
        date: "Nov 2022 - present",
    },
] as const;

export const projectsData = [
    {
        title: "proj1",
        description:
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: proj1Img,
    },
    {
        title: "proj2",
        description:
            "Description here",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: proj2Img,
    },
    {
        title: "proj3",
        description:
            "Description here",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: proj3Img,
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
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;