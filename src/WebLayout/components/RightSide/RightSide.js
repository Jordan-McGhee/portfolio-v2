import React from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./projects/Projects";
import Experience from "./Experience";
import { Link } from "react-router-dom";

const RightSide = () => {

    return (
        <div className="flex flex-col w-1/2">
            
            {/* ABOUT SECTION */}
            <About />

            {/* PROJECTS */}
            <Projects />

            {/* EXPERIENCE */}
            <Experience />

            {/* EDUCATION */}
            <Education />

            <p className="text-offWhite opacity-50 text-[40px] px-12 pb-40 hover:opacity-100">Site inspired by <Link to='https://www.brittanychiang.com' target="_blank" className="hover:text-accent transition-colors duration-300 ease-in-out">Brittany Chiang's</Link> portfolio. Built entirely using React and Tailwind CSS. <br /> Thumbnails made in Photoshop.</p>
        </div>
    )
}

export default RightSide