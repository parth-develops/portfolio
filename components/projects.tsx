"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import Project from "./project";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-28">
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
