import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = props => {

    const content = props.projects.map((project) => (
        <ProjectItem
            key = { project.name }
            id = { project.name }
            name = { project.name }
            about = { project.about }
            stack = { project.stack }
            link = { project.link ? project.link : null }
            image = { project.image ? project.image : null }
        />
    ))

    return (
        <ul>
            { content }
        </ul>
    )
}

export default ProjectList