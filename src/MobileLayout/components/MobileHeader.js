import React from "react";
import Button from "../../components/button";
import { Link } from "react-router-dom"

// icon imports
import whiteBehance from "../../icons/whiteBehance.png"
import whiteGithub from "../../icons/whiteGithub.png"
import whiteLinkedin from "../../icons/whiteLinkedin.png"

// pdf import
import resume from "../../JordanMcGhee_Resume_2024.pdf"

const MobileHeader = () => {


    return (
        <div className="text-white mb-12">
            <p className="text-4xl font-bold">Jordan McGhee</p>
            <p className="text-lg my-3 text-accent">Fullstack Software Developer</p>
            <p className="text-offWhite opacity-75 mb-5">Digital designer turned web developer. I build apps and do other cool stuff. Let's connect.</p>

            {/* LINK DIV */}
            <div className="flex w-fit justify-between items-center">
            <Link to='https://github.com/Jordan-McGhee' target="_blank">
                    <img src={whiteGithub} alt="github logo" className="h-6 w-6 opacity-60 hover:opacity-100 mr-4" />
                </Link>

                <Link to='https://www.linkedin.com/in/jordan-mcghee-048939117/' target="_blank">
                    <img src={whiteLinkedin} alt="linkedin logo" className="h-6 w-6 opacity-60 hover:opacity-100 mr-4" />
                </Link>

                <Link to='https://www.behance.net/jordanmcghee' target="_blank">
                    <img src={whiteBehance} alt="behance logo" className="h-6 w-6 opacity-60 hover:opacity-100 mr-4" />
                </Link>

                <Link to={ resume } target="_blank">
                    <Button text="RESUME" buttonClass = "bg-secondary text-accent rounded-full px-4 py-2 text-xs" />
                </Link>
            </div>
        </div>
    )
}

export default MobileHeader