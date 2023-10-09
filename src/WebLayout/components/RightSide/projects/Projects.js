import React from "react";

import projects from "../../../../projects.json"
import ProjectList from "./ProjectList";

const Projects = () => {


    return (
        <div className="mb-12">

            <p className="text-white font-semibold text-7xl mb-16 px-12">PROJECTS</p>

            <ProjectList projects = { projects } />
        </div>
    )
}

export default Projects