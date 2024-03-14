"use client";

import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About", 0.75);

    return (
        <motion.section id="about" className="scroll-mt-28 mb-12 max-w-[45rem] text-center leading-7 sm:mb-24"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <Heading>About me</Heading>
            <p className="mb-3">As a seasoned frontend developer specializing in React, Next.js, SCSS, HTML, and CSS, I thrive on crafting immersive digital experiences that captivate and engage users. With a keen eye for detail and a passion for clean, elegant code, I bring ideas to life with pixel-perfect precision.</p>
            <p>Driven by a relentless pursuit of innovation, I continuously push the boundaries of what&apos;s possible in web development. Whether it&apos;s architecting seamless user interfaces or optimizing performance for lightning-fast load times, I am dedicated to delivering solutions that not only meet but exceed expectations. Let&apos;s collaborate and turn your vision into reality.</p>
        </motion.section>
    )
}
