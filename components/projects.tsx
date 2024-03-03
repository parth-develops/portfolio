"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Heading from "./heading";
import Project from "./project";

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
