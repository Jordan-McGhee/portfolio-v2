import React from "react";
import { useState } from "react";

import projects from "../../../../projects.json"
import ProjectList from "./ProjectList";

const Projects = () => {

    const [ showFull, setShowFull ] = useState(false)


    return (
        <div className="mb-24">

            <p className="text-white font-semibold text-7xl mb-16 px-12">PROJECTS</p>

            <ProjectList projects = { showFull ? projects : projects.slice(0,3) } />

            <p className="text-white pl-12 text-5xl hover:cursor-pointer hover:text-accent" onClick={ () => setShowFull(!showFull)}>{ showFull ? 'Show Less' : 'Show More'}</p>
        </div>
    )
}

export default Projects