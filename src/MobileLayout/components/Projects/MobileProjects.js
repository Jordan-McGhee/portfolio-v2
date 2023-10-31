import React, { useState } from "react";

import projects from "../../../projects.json"
import MobileProjectList from "./MobileProjectList";

const MobileProjects = () => {

    const [ showFull, setShowFull ] = useState(false)

    return (
        <div className="my-8 text-white">
            <p className="font-semibold text-xl mb-8">PROJECTS</p>

            <MobileProjectList projects = { showFull ? projects : projects.slice(0,3)} />

            <p className="text-accent mt-4 underline underline-offset-8" onClick={ () => setShowFull(!showFull)}>{ showFull ? 'Show Less' : 'Show More'}</p>
        </div>
    )
}

export default MobileProjects