import React from "react";
import ProjectItem from "./ProjectItem"

const ProjectList = (props) => {

    const content = props.projects.map((project) => (
        <ProjectItem
            key = { project.name }
            name = { project.name }
            about = { project.about }
            stack = { project.stack }
            link = { project.link ? project.link : null }
            github = { project.github }
            image = { project.image }
        />
    ))

    return (
        <ul className="border border-white">
            { content }
        </ul>
    )
}

export default ProjectList