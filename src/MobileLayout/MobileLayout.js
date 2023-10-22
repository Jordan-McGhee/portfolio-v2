import React from "react";
import MobileHeader from "./components/MobileHeader";
import MobileAbout from "./components/MobileAbout";
import MobileProjects from "./components/Projects/MobileProjects";

const MobileLayout = () => {

    return (
        <div className="px-8 py-12 tracking-wide leading-relaxed">
            <MobileHeader />

            <MobileAbout />

            <MobileProjects />
        </div>
    )
}

export default MobileLayout