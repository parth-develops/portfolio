import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import proj1Img from "@/public/proj1.png";
import proj2Img from "@/public/proj2.jpg";
import proj3Img from "@/public/proj3.png";
import bootstrap from "@/assets/images/icons/bootstrap.png";
import ci from "@/assets/images/icons/ci.png";
import css3 from "@/assets/images/icons/css3.png";
import framer from "@/assets/images/icons/framer.png";
import git from "@/assets/images/icons/git.png";
import html5 from "@/assets/images/icons/html5.png";
import js from "@/assets/images/icons/js.png";
import nextjs from "@/assets/images/icons/nextjs.png";
import mysql from "@/assets/images/icons/mysql.png";
import php from "@/assets/images/icons/php.png";
import react from "@/assets/images/icons/react.png";
import scss from "@/assets/images/icons/scss.png";
import tailwind from "@/assets/images/icons/tailwind.png";
import ts from "@/assets/images/icons/ts.png";

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
    { icon: html5, title: "HTML" },
    { icon: css3, title: "CSS" },
    { icon: scss, title: "SCSS" },
    { icon: tailwind, title: "Tailwind" },
    { icon: bootstrap, title: "Bootstrap" },
    { icon: js, title: "JavaScript" },
    { icon: ts, title: "TypeScript" },
    { icon: react, title: "React" },
    { icon: nextjs, title: "Next.js" },
    { icon: framer, title: "Framer motion" },
    { icon: git, title: "Git" },
    { icon: php, title: "PHP" },
    { icon: mysql, title: "MYSQL" },
    { icon: ci, title: "Codeigniter" },
] as const;