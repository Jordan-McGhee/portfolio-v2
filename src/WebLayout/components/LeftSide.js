import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/button";
import { Link, NavLink } from "react-router-dom";

// icon imports
import whiteBehance from "../../icons/whiteBehance.png";
import whiteGithub from "../../icons/whiteGithub.png";
import whiteLinkedin from "../../icons/whiteLinkedin.png";

// PDF import
// import resume from "../../JordanMcGhee_Resume_2024.pdf";
import resume from "../../Jordan_McGhee-Full_Stack_Software_Engineer-Mar2025.pdf";

const titles = ["Full Stack Software Developer", "Frontend Developer", "UX/UI Designer"];

const LeftSide = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 5000); // Change title every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const scrollToTarget = (target) => {
        const targetDiv = document.getElementById(target);
        if (targetDiv) {
            targetDiv.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="text-white flex flex-col justify-between w-2/5 sticky top-0 h-fit">
            {/* Name and Intro */}
            <div>
                <p className="text-5xl font-bold">Jordan McGhee</p>

                {/* Animated Title */}
                <div className="relative h-10 overflow-hidden my-3">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={titles[currentTitleIndex]}
                            className="absolute w-full text-3xl text-accent"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 30, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            {titles[currentTitleIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <p className="text-lg text-offWhite w-3/4">
                    Web developer with experience developing MERN, PERN, and Django applications.
                    Formerly a digital designer with 7+ years of experience working in the Adobe Suite.
                    Looking forward to connecting!
                </p>

                <nav>
                    <ul className="my-16 w-max">
                        {["about", "projects", "experience", "education"].map((section) => (
                            <li key={section}>
                                <NavLink
                                    className="group flex items-center py-4 opacity-50 hover:opacity-100"
                                    to={`/${section}`}
                                    onClick={() => scrollToTarget(section)}
                                >
                                    <span className="mr-8 h-0.5 w-12 bg-white transition-all duration-300 ease-in-out group-hover:w-24"></span>
                                    <span className="font-semibold">{section.toUpperCase()}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center">
                <Link to="https://github.com/Jordan-McGhee" target="_blank">
                    <img src={whiteGithub} alt="GitHub" className="h-7 mr-6 opacity-60 hover:opacity-100" />
                </Link>

                <Link to="https://www.linkedin.com/in/jordan-mcghee-048939117/" target="_blank">
                    <img src={whiteLinkedin} alt="LinkedIn" className="h-7 mr-6 opacity-60 hover:opacity-100" />
                </Link>

                <Link to="https://www.behance.net/jordanmcghee" target="_blank">
                    <img src={whiteBehance} alt="Behance" className="h-7 mr-6 opacity-60 hover:opacity-100" />
                </Link>

                <Link to={resume} target="_blank">
                    <Button text="RESUME" />
                </Link>
            </div>
        </div>
    );
};

export default LeftSide;
