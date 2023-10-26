import React from "react";
import { Link } from "react-router-dom";

import MobileHeader from "./components/MobileHeader";
import MobileAbout from "./components/MobileAbout";
import MobileProjects from "./components/Projects/MobileProjects";
import MobileExperience from "./components/MobileExperience";
import MobileEducation from "./components/MobileEducation";

const MobileLayout = () => {

    return (
        <div className="px-8 py-12 tracking-wide leading-relaxed mobile-layout min-w-[400px]">
            <MobileHeader />

            <MobileAbout />

            <MobileProjects />

            <MobileExperience />

            <MobileEducation />

            <p className="text-offWhite opacity-75 text-xs">Site inspired by <Link to='https://www.brittanychiang.com' target="_blank" className="text-accent ">Brittany Chiang's</Link> portfolio. Built entirely using React and Tailwind CSS. Thumbnails made in Photoshop.</p>
        </div>
    )
}

export default MobileLayout