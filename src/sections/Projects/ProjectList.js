import React from "react";
import ProjectItem from "./ProjectItem"

const ProjectList = props => {

    console.log(props.projects)

    const content = props.projects.map((project) => (
        <ProjectItem
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