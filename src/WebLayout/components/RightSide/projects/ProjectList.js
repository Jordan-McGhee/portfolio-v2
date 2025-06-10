import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = props => {

    const content = props.projects.map((project) => (
        <ProjectItem
            key = { project.name }
            id = { project.name }
            index = { props.projects.indexOf(project) }
            name = { project.name }
            inDevelopment = { project.inDevelopment }
            about = { project.about }
            stack = { project.stack }
            link = { project.link ? project.link : null }
            youtube = { project.youtube ? project.youtube : null}
            github = { project.github }
            image = { project.image ? project.image : null }
        />
    ))

    return (
        <ul className="group/list">
            { content }
        </ul>
    )
}

export default ProjectList