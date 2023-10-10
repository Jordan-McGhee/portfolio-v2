import React from "react";
import Button from "../../components/button";

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
    return (

        <div className="text-white flex flex-col justify-between w-2/5 sticky top-0">
            {/* // div  for name and intro */}
            <div>
                <p className="text-[156px] font-bold">Jordan McGhee</p>
                <p className="text-6xl my-10">Fullstack Software Developer</p>
                <p className="text-5xl text-offWhite max-w-5xl">Something cool that will make me seem cool. Here's another sentence about how great I am.</p>

                <nav>
                    <ul className="mt-32 w-max">
                        <li>
                            <a className="group flex items-center py-8 text-5xl" href="#about">
                                <span className="mr-8">———</span>
                                <span className="">ABOUT</span>
                            </a>
                        </li>

                        <li>
                            <a className="group flex items-center py-8 text-5xl" href="#projects">
                                <span className="mr-8">———</span>
                                <span className="">PROJECTS</span>
                            </a>
                        </li>


                        <li>
                            <a className="group flex items-center py-8 text-5xl" href="#experience">
                                <span className="mr-8">———</span>
                                <span className="">EXPERIENCE</span>
                            </a>
                        </li>

                        <li>
                            <a className="group flex items-center py-8 text-5xl" href="#education">
                                <span className="mr-8">———</span>
                                <span className="">EDUCATION</span>
                            </a>
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