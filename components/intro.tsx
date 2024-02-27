"use client";

import Image from "next/image";
import propic from "@/assets/images/propic.jpg";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 mt-36 max-w-[50rem] text-center">
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
    </section>
  )
}
