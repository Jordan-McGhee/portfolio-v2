import React from "react";
import MobileProjectItem from "./MobileProjectItem";

const MobileProjectList = props => {
    const content = props.projects.map((project) =>
        <MobileProjectItem
            key = { project.name }
            id = { project.name }
            index = { props.projects.indexOf(project) }
            name = { project.name }
            about = { project.about }
            stack = { project.stack }
            link = { project.link ? project.link : null }
            youtube = { project.youtube ? project.youtube : null}
            github = { project.github }
            image = { project.image ? project.image : null }
        />
    )

    return (
        <ul className="mt-6">
            { content }
        </ul>
    )
}

export default MobileProjectList