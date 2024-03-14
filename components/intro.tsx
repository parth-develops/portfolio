"use client";

import Image from "next/image";
import propic from "@/assets/images/propic.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function Intro() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} className="mb-18 mt-36 max-w-[50rem] text-center">
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

            <Image src={propic} alt="Parth's profile picture" quality={90} priority={true} className="h-24 w-24 rounded-full border-[0.35rem] border-[#fff] shadow-xl" />
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
      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hello, I'm Parth.`}</span> I&apos;m a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I enjoy
        building <span className="italic">web apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div className="flex gap-3 justify-center items-center flex-wrap font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/resume.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >Download Resume <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>
        <div className="flex justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/parth-umrania/"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full shadow outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
          ><BsLinkedin /></a>
          <a
            href="https://github.com/parth-develops"
            target="_blank"
            className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full shadow  outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition"
          ><BsGithub /></a>
        </div>
      </motion.div>
    </section>
  )
}
