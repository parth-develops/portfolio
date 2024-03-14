"use client";

import React, { useEffect } from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
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
