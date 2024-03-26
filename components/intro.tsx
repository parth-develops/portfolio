"use client";

import Image from "next/image";
import propic from "@/assets/images/propic.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} className="mb-18 mt-36 max-w-[50rem] text-center relative">
      <div className="bg-[#00000000] absolute top-[50%] -z-10 left-[50%] -translate-x-[50%] -translate-y-[50%] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5656ff26]"></div>
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >

            <Image src={propic} alt="Parth's profile picture" quality={90} priority={true} className="h-36 w-36 rounded-full border-[0.35rem] border-[#fff] shadow-xl" />
          </motion.div>
          <motion.span className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              delay: 0.2,
              duration: 0.7
            }}
          >👋🏼</motion.span>
        </div>
      </div>
      <motion.h1 className="mb-0 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Parth.`}</span>
      </motion.h1>
      <motion.p className="mb-10 px-0 sm:px-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      ><span className="font-bold">I&apos;m a front-end developer</span> with over <span className="font-bold">a year</span> of experience. I enjoy building <span className="italic">web apps</span>. My focus is <span className="underline">React (Next.js)</span>.</motion.p>
      <motion.div className="flex gap-3 justify-center items-center flex-wrap font-medium mb-8"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setTimeOfLastClick(Date.now());
            setActiveSection("Contact");
          }}
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/resume.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow outline-none focus:scale-110 hover:scale-110 active:scale-105 transition dark:bg-white/10 dark:text-white/70 dark:hover:text-white/100"
        >Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition dark:group-hover:opacity-100" /></a>
      </motion.div>
      <motion.div className="flex gap-3 justify-center items-center flex-wrap font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/parth-umrania/"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full shadow outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:bg-white/10 dark:text-white/70 dark:hover:text-white/100"
          ><BsLinkedin /></a>
          <a
            href="https://github.com/parth-develops"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full shadow  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:bg-white/10 dark:text-white/70 dark:hover:text-white/100"
          ><BsGithub /></a>
          <a
            href="https://x.com/parth_develops?t=cAmYfs83uSp3BOapXG8OqQ&s=09"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full shadow  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:bg-white/10 dark:text-white/70 dark:hover:text-white/100"
          ><BsTwitterX /></a>
        </div>
      </motion.div>
    </section>
  )
}
