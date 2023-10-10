import React from "react";
import Button from "../../components/button";
import { NavLink } from "react-router-dom";

// icon imports
// import purpleBehance from "../../icons/purpleBehance.png"
// import purpleGithub from "../../icons/purpleGithub.png"
// import purpleLinkedin from "../../icons/purpleLinkedin.png"
// import purpleResume from "../../icons/purpleResume.png"
import whiteBehance from "../../icons/whiteBehance.png"
import whiteGithub from "../../icons/whiteGithub.png"
import whiteLinkedin from "../../icons/whiteLinkedin.png"
// import whiteResume from "../../icons/whiteResume.png"

const LeftSide = () => {

    const scrollToTarget = target => {
        const targetDiv = document.getElementById(target)

        if (targetDiv) { targetDiv.scrollIntoView({ behavior: 'smooth'})}
    }

    return (

        <div className="text-white flex flex-col justify-between w-2/5 sticky top-0">
            {/* // div  for name and intro */}
            <div>
                <p className="text-[156px] font-bold">Jordan McGhee</p>
                <p className="text-6xl mb-10 text-accent">Fullstack Software Developer</p>
                <p className="text-5xl text-offWhite max-w-5xl">Something cool that will make me seem cool. Here's another sentence about how great I am.</p>

                <nav>
                    <ul className="mt-32 w-max">
                        <li>
                            <NavLink className="group flex items-center py-8 text-5xl" to="#about" onClick={() => scrollToTarget('about')}>
                                <span className="mr-8">———</span>
                                <span className="">ABOUT</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="group flex items-center py-8 text-5xl" to="#projects" onClick={() => scrollToTarget('projects')}>
                                <span className="mr-8">———</span>
                                <span className="">PROJECTS</span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink className="group flex items-center py-8 text-5xl" to="#experience" onClick={() => scrollToTarget('experience')}>
                                <span className="mr-8">———</span>
                                <span className="">EXPERIENCE</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="group flex items-center py-8 text-5xl" to="#education" onClick={() => scrollToTarget('education')}>
                                <span className="mr-8">———</span>
                                <span className="">EDUCATION</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>

            {/* // div for icons */}
            <div className="flex items-center">
                <img src={ whiteGithub } alt="github logo" className="h-20 w-20 mr-16" />
                <img src={ whiteLinkedin } alt="linkedin logo" className="h-20 w-20 mr-16" />
                <img src={ whiteBehance } alt="behance logo" className="h-20 w-20 mr-16" />
                <Button text = "RESUME" />
            </div>

        </div>
    )
}

export default LeftSide