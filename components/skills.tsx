"use client";

import { skillsData } from "@/lib/data";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

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
                            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 text-center flex justify-between items-center gap-2"
                            variants={fadeInAnimationsVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <Image src={skill.icon} alt={skill.title} width={30} />
                            <p className="text-sm">{skill.title}</p>
                        </motion.li>
                    )
                }
            </ul>
        </section>
    )
}
