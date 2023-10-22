import React, { useState } from "react";

import projects from "../../../projects.json"
import MobileProjectList from "./MobileProjectList";

const MobileProjects = () => {

    const [ showFull, setShowFull ] = useState(false)

    return (
        <div className="my-8 text-white" id="projects">
            <p className="font-semibold text-sm mb-6">PROJECTS</p>

            <MobileProjectList projects = { showFull ? projects : projects.slice(0,3)} />

            <p className="text-accent" onClick={ () => setShowFull(!showFull)}>{ showFull ? 'Show Less' : 'Show More'}</p>
        </div>
    )
}

export default MobileProjects