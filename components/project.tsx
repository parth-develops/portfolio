import { useEffect, useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Link from "next/link";
import Fancybox from "./image-box";

type ProjectProps = typeof projectsData[number];

export default function Project({ title, description, tags, image, githubLink, liveLink }: ProjectProps) {
    "use client";

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);



    return (
        <motion.div
            className="group mb-3 sm:mb-8 last:mb-0"
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <article
                className="relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
            >
                <div className="pt-4 pb-7 px-5 sm:pr-2 sm:pl-10 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-auto">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <div className="flex items-center gap-3 my-2">
                        <Link href={liveLink} type="external" target="_blank" title="Live Link">
                            <FaExternalLinkAlt size={20} className="text-[#474747] hover:text-[#000000] dark:text-[#c5c5c5] dark:hover:text-white" />
                        </Link>
                        <Link href={githubLink} type="external" target="_blank" title="GitHub Link">
                            <FaGithub size={24} className="text-[#474747] hover:text-[#000000] dark:text-[#c5c5c5] dark:hover:text-white" />
                        </Link>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {
                            tags.map((tag, index) => (
                                <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">{tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <div
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-full rounded-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
                >
                    <Fancybox>
                        <a data-fancybox href={image.url.src} title="Click to expand">
                            <Image
                                src={image.url} alt={title} quality={80} className="rounded-lg w-full h-full object-cover object-left"
                            />
                        </a>
                    </Fancybox>
                </div>
            </article>
        </motion.div>
    )
}