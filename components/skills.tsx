"use client";

import { skillsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInAnimationsVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        }
    })
}

export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <Heading>My Skills</Heading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) =>
                        <motion.li
                            key={index}
                            className="bg-white border borderBlack rounded-md text-sm sm:text-base sm:rounded-xl text-center dark:bg-white/10 dark:text-white/80"
                            variants={fadeInAnimationsVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <Link href={skill.link} type="external" target="_blank" className="flex justify-between items-center gap-1 sm:gap-2 px-3 sm:px-5 py-1 sm:py-3">
                                <Image src={skill.icon} alt={skill.title} className="w-[22px] sm:w-[30px]" />
                                <p className="text-sm">{skill.title}</p>
                            </Link>
                        </motion.li>
                    )
                }
            </ul>
        </section>
    )
}
