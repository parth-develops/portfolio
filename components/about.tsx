"use client";

import Heading from "./heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About", 0.75);

    return (
        <motion.section id="about" className="scroll-mt-28 mt-12 sm:mt-0 mb-12 max-w-[45rem] text-center leading-7 sm:mb-24"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <Heading>About me</Heading>
            <p className="mb-3 text-justify">As a full-stack JavaScript developer, I focus on high-performance, efficient web application building, using technologies such as React, Next.js, Tailwind CSS, MongoDB, and MySQL. My passion lies in seeing how the design and functionality come together in seamless digital experiences that capture users and bring value in the real world.</p>
            <p className="mb-3 text-justify">I have experience with front-end as well as back-end development. With this background, I have skills in crafting pixel-perfect user interfaces, implementing web security best practices, and optimizing application performance. My aim is always to translate ideas into impactful, high-quality solutions through the development of scalable APIs and intuitive designs.</p>
            <p className="text-justify">Let&apos;s make your vision come to life!</p>
        </motion.section>
    )
}
