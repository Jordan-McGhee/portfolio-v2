import React from "react";
import Education from "./Education";
import Projects from "./projects/Projects";
import Experience from "./Experience";

const RightSide = () => {

    return (
        <div className="flex flex-col w-1/2 ">
            
            {/* ABOUT SECTION */}
            <div className="mb-12 px-12">
                <p className="text-offWhite text-[50px] leading-tight mb-12">During Covid, after a stressful workday, I reflected on my career and realized I was on the wrong path. I wanted a new challenge that would teach me something new, while allowing me to improve my design skills. I set my sights on something that I felt was out of reach — <span className="font-medium text-white">coding, specifically web development.</span></p>

                <p className="text-offWhite text-[50px] leading-tight mb-12">Fast forward to today and I've got a <span className="font-medium text-white">bootcamp graduation and several projects under my belt.</span> My goal now is to turn my practice into a fulfilling career.</p>

                <p className="text-offWhite text-[50px] leading-tight mb-12">When I'm not working or coding, I spend most of my time working out, exploring trails with my dog, hanging out with friends, or fighting in the rift with my friends.</p>
            </div>

            {/* EXPERIENCE */}
            <Experience />

            {/* PROJECTS */}
            <Projects />

            {/* EDUCATION */}
            <Education />
        </div>
    )
}

export default RightSide