"use client";

import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);
    const [visibleProjects, setVisibleProjects] = useState(3);

    const showMore = () => setVisibleProjects(projectsData.length);
    const showLess = () => setVisibleProjects(3);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 sm:mb-24 mb-12">
            <Heading>My Projects</Heading>

            <div>
                {projectsData.slice(0, visibleProjects).map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>

            <div className="mt-6">
                {visibleProjects < projectsData.length ? (
                    <button onClick={showMore} className="mx-auto bg-white dark:bg-white/10 shadow-lg dark:text-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none">
                        Show {projectsData.length - visibleProjects} More
                    </button>
                ) : (
                    <button onClick={showLess} className="mx-auto bg-white dark:bg-white/10 shadow-lg dark:text-white/70 px-7 py-3 flex items-center gap-2 rounded-full outline-none">
                        Show Less
                    </button>
                )}
            </div>
        </section>
    )
}
