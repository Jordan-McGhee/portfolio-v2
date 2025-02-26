import React from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./projects/Projects";
import Experience from "./Experience";

const RightSide = () => {

    return (
        <div className="flex flex-col w-7/12">
            
            {/* ABOUT SECTION */}
            <About />

            {/* PROJECTS */}
            <Projects />

            {/* EXPERIENCE */}
            <Experience />

            {/* EDUCATION */}
            <Education />

            {/* <p className="text-offWhite opacity-50 text-lg px-12">Site inspired by <Link to='https://www.brittanychiang.com' target="_blank" className="hover:text-accent transition-colors duration-300 ease-in-out">Brittany Chiang's</Link> portfolio. Built entirely using React and Tailwind CSS. Thumbnails made in Photoshop.</p> */}
        </div>
    )
}

export default RightSide