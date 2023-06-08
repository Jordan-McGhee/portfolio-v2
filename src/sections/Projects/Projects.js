import React from "react";
import projects from "../../projects.json"
import ProjectList from "./ProjectItem";

const Projects = () => {

    console.log(projects.projects)

    return (
        <div id = "projects" className="border border-white">
            <ProjectList projects = { projects.projects } />
        </div>
    )
}

export default Projects