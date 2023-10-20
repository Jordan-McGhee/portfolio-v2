import React from "react";
import Button from "../../components/button";
import { Link, NavLink } from "react-router-dom";

// icon imports
import whiteBehance from "../../icons/whiteBehance.png"
import whiteGithub from "../../icons/whiteGithub.png"
import whiteLinkedin from "../../icons/whiteLinkedin.png"

const LeftSide = () => {

    const scrollToTarget = target => {
        const targetDiv = document.getElementById(target)

        if (targetDiv) { targetDiv.scrollIntoView({ behavior: 'smooth' }) }
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
                        <li className="">
                            <NavLink className="group flex items-center py-8 text-[40px] opacity-50 hover:opacity-100" to="/about" onClick={() => scrollToTarget('about')}>
                                <span className="mr-8 h-1 w-24 bg-white transition-all duration-300 ease-in-out group-hover:w-60"></span>
                                <span className="font-semibold">ABOUT</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="group flex items-center py-8 text-[40px] opacity-50 hover:opacity-100" to="/projects" onClick={() => scrollToTarget('projects')}>
                                <span className="mr-8 h-1 w-24 bg-white transition-all duration-300 ease-in-out group-hover:w-60"></span>
                                <span className="font-semibold">PROJECTS</span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink className="group flex items-center py-8 text-[40px] opacity-50 hover:opacity-100" to="/experience" onClick={() => scrollToTarget('experience')}>
                                <span className="mr-8 h-1 w-24 bg-white transition-all duration-300 ease-in-out group-hover:w-60"></span>
                                <span className="font-semibold">EXPERIENCE</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink className="group flex items-center py-8 text-[40px] opacity-50 hover:opacity-100" to="/education" onClick={() => scrollToTarget('education')}>
                                <span className="mr-8 h-1 w-24 bg-white transition-all duration-300 ease-in-out group-hover:w-60"></span>
                                <span className="font-semibold">EDUCATION</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>

            {/* // div for icons */}
            <div className="flex items-center">
                <Link to='https://github.com/Jordan-McGhee' target="_blank">
                    <img src={whiteGithub} alt="github logo" className="h-20 w-20 mr-16 opacity-60 hover:opacity-100" />
                </Link>

                <Link to='https://www.linkedin.com/in/jordan-mcghee-048939117/' target="_blank">
                    <img src={whiteLinkedin} alt="linkedin logo" className="h-20 w-20 mr-16 opacity-60 hover:opacity-100" />
                </Link>

                <Link to='https://www.behance.net/jordanmcghee' target="_blank">
                    <img src={whiteBehance} alt="behance logo" className="h-20 w-20 mr-16 opacity-60 hover:opacity-100" />
                </Link>

                <Link to='' target="_blank">
                    <Button text="RESUME" />
                </Link>
            </div>

        </div>
    )
}

export default LeftSide