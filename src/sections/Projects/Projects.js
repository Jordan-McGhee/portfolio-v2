import React from "react";
import projects from "../../projects.json"
import ProjectList from "./ProjectList";

const Projects = () => {

    // console.log(projects)

    return (
        <div id = "projects" className="border border-white">
            <ProjectList projects = { projects } />
        </div>
    )
}

export default Projects