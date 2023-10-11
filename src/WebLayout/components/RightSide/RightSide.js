import React from "react";
import About from "./About";
import Education from "./Education";
import Projects from "./projects/Projects";
import Experience from "./Experience";

const RightSide = () => {

    return (
        <div className="flex flex-col w-1/2 ">
            
            {/* ABOUT SECTION */}
            <About />

            {/* PROJECTS */}
            <Projects />

            {/* EXPERIENCE */}
            <Experience />

            {/* EDUCATION */}
            <Education />
        </div>
    )
}

export default RightSide