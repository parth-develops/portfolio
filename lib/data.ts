import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import proj1Img from "@/public/MMSS.png";
import proj2Img from "@/public/adminDash.png";
import proj3Img from "@/public/aisaas.png";
import proj4Img from "@/public/jobboard.png";
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
import ts from "@/assets/images/icons/typescript.png";
import authjs from "@/assets/images/icons/authjs.png";
import mongo from "@/assets/images/icons/mongo.png";

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
        title: "Full-Stack Developer",
        location: "Remote",
        description:
            "Designed and developed web apps, focusing on performance and user experience, optimizing and reducing data processing latency by over 80%. Collaborated with cross functional teams to improve SEO, implement  robust web security practices and elevate overall performance scores. Utilized React, Next, MySQL & CodeIgniter to develop scalable, efficient, and secure solutions.",
        icon: React.createElement(FaReact),
        date: "Nov 2022 - present",
    },
    {
        title: "Freelance Front-End Developer",
        location: "Remote",
        description:
            "As a freelance front-end web developer, I've built visually stunning and user-friendly websites for clients across various industries, honing my communication and project management skills to ensure timely and budget-friendly delivery.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "Web Dev Intern",
        location: "India",
        description:
            "Developed responsive website designs using HTML, CSS, and JavaScript to enhance user engagement and site performance. I collaborated across teams to troubleshoot and ensure seamless functionality, also assisting in web application creation and maintenance.",
        icon: React.createElement(CgWorkAlt),
        date: "March 2021 - November 2021",
    },
    {
        title: "Computer Engineering",
        location: "India",
        description:
            "I completed my Bachelor's in Computer Engineering with an 8.23 CGPA, gaining comprehensive knowledge in the field. This education equipped me with a solid foundation for my career.",
        icon: React.createElement(LuGraduationCap),
        date: "2018 - 2022",
    },
] as const;

export const projectsData = [
    {
        title: "Mandarin Mastery",
        githubLink: "https://github.com/parth-develops/mandarin-mastery",
        liveLink: "https://mandarin-mastery.vercel.app/",
        description:
            "Mandarin Mastery is a web application designed to make learning Mandarin Chinese accessible and fun. With interactive lessons, pronunciation practice, quizzes, and personalized learning paths, you can learn at your own pace and track your progress.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Next auth"],
        image: { url: proj1Img, isOnLeft: false }
    },
    {
        title: "Admin Dashboard",
        githubLink: "https://github.com/parth-develops/admin-dashboard",
        liveLink: "https://admin-dashboard-two-gray-90.vercel.app",
        description:
            "Admin Dashboard streamlines administrative tasks, providing a centralized platform to oversee user accounts, product information, and key metrics.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Next auth"],
        image: { url: proj2Img, isOnLeft: false }
    },
    {
        title: "AI Saas Landing page",
        githubLink: "https://github.com/parth-develops/brainwave",
        liveLink: "https://brainwave-fawn-gamma.vercel.app/",
        description:
            "AI SaaS Landing Page is a captivating and responsive landing page that leverages scroll animations and parallax effects to deliver an immersive user experience.",
        tags: ["React", "Tailwind", "Parallax animations"],
        image: { url: proj3Img, isOnLeft: false }
    },
    {
        title: "Job Board",
        githubLink: "https://github.com/parth-develops/job-board",
        liveLink: "https://job-board-three-mauve.vercel.app/",
        description:
            "It is a job board platform that enables organizations to register their companies, create job postings, and manage their recruitment process efficiently.",
        tags: ["React", "Typescript", "Next.js", "MongoDB", "Tailwind", "WorkOS Auth"],
        image: { url: proj4Img, isOnLeft: false }
    },
] as const;

export const skillsData = [
    { icon: html5, title: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { icon: css3, title: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: scss, title: "SCSS", link: "https://sass-lang.com/" },
    { icon: tailwind, title: "Tailwind", link: "https://tailwindcss.com/" },
    { icon: bootstrap, title: "Bootstrap", link: "https://getbootstrap.com/" },
    { icon: js, title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: ts, title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { icon: react, title: "React", link: "https://react.dev/" },
    { icon: nextjs, title: "Next.js", link: "https://nextjs.org/" },
    { icon: authjs, title: "Auth.js", link: "https://authjs.dev/" },
    { icon: mongo, title: "MongoDB", link: "https://www.mongodb.com/" },
    { icon: framer, title: "Framer motion", link: "https://motion.dev/" },
    { icon: git, title: "Git", link: "https://git-scm.com/" },
    { icon: php, title: "PHP", link: "https://www.php.net/" },
    { icon: mysql, title: "MYSQL", link: "https://www.mysql.com/" },
    { icon: ci, title: "Codeigniter", link: "https://www.codeigniter.com/" },
] as const;