import React from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import Image from "next/image";

export default function Projects() {
    return (
        <section>
            <Heading>My Projects</Heading>

            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

type ProjectProps = typeof projectsData[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
    return <article className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8">
        <div className="pt-4 pb-7 px-5 sm:pr-2 sm:pl-10 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {
                    tags.map((tag, index) => (
                        <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">{tag}</li>
                    ))
                }
            </ul>
        </div>

        <Image className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl" src={imageUrl} alt={title} quality={80} />
    </article>
}