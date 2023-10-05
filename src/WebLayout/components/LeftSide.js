import React from "react";
import Button from "../../components/button";

// icon imports
import purpleBehance from "../../icons/purpleBehance.png"
import purpleGithub from "../../icons/purpleGithub.png"
import purpleLinkedin from "../../icons/purpleLinkedin.png"
import purpleResume from "../../icons/purpleResume.png"
import whiteBehance from "../../icons/whiteBehance.png"
import whiteGithub from "../../icons/whiteGithub.png"
import whiteLinkedin from "../../icons/whiteLinkedin.png"
import whiteResume from "../../icons/whiteResume.png"

const LeftSide = () => {
    return (

        <div className="text-white flex-col border border-white h-5/6 content-evenly">
            {/* // div  for name and intro */}
            <div>
                <p className="text-9xl font-bold">Jordan McGhee</p>
                <p className="text-6xl my-10">Fullstack Software Developer</p>
                <p className="text-5xl text-offWhite">Something cool that will make me seem cool.</p>
            </div>

            {/* // div for nav */}
            <div className="text-4xl">
                <p>—————— ABOUT</p>
                <p>—————— PROJECTS</p>
                <p>—————— EXPERIENCE</p>
            </div>

            {/* // div for icons */}
            <div className="flex items-center">
                <img src={ whiteGithub } className="h-20 w-20 mr-12" />
                <img src={ whiteLinkedin } className="h-20 w-20 mr-12" />
                <img src={ whiteBehance } className="h-20 w-20 mr-12" />
                <Button text = "RESUME" />
            </div>

        </div>
    )
}

export default LeftSide