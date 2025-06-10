import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/button";
import { Link } from "react-router-dom";

// icon imports
import whiteBehance from "../../icons/whiteBehance.png";
import whiteGithub from "../../icons/whiteGithub.png";
import whiteLinkedin from "../../icons/whiteLinkedin.png";

// PDF import
import resume from "../../JordanMcGhee_UXUI&FrontendDeveloperResume_June2025.pdf";

const titles = ["Full Stack Software Developer", "Frontend Developer", "UX/UI Designer"];

const MobileHeader = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 5000); // Change title every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return (
        <div className="text-white mb-12">
            <p className="text-4xl font-bold">Jordan McGhee</p>

            {/* Animated Title */}
            <div className="relative h-6 overflow-hidden my-3">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={titles[currentTitleIndex]}
                        className="absolute w-full text-xl text-accent"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {titles[currentTitleIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            <p className="text-offWhite opacity-75 mb-5">
                Web developer with experience developing MERN, PERN, and Django applications.
                Formerly a creative services manager with 7+ years of experience working in the Adobe Suite.
                <br />I look forward to connecting!
            </p>

            {/* LINK DIV */}
            <div className="flex w-fit justify-between items-center">
                <Link to="https://github.com/Jordan-McGhee" target="_blank">
                    <img src={whiteGithub} alt="GitHub" className="h-6 w-6 opacity-60 hover:opacity-100 mr-4" />
                </Link>

                <Link to="https://www.linkedin.com/in/jordan-mcghee-dev" target="_blank">
                    <img src={whiteLinkedin} alt="LinkedIn" className="h-6 w-6 opacity-60 hover:opacity-100 mr-4" />
                </Link>

                <Link to="https://www.behance.net/jordanmcghee" target="_blank">
                    <img src={whiteBehance} alt="Behance" className="h-6 w-6 opacity-60 hover:opacity-100 mr-4" />
                </Link>

                <Link to={resume} target="_blank">
                    <Button text="RESUME" buttonClass="bg-secondary text-accent rounded-full px-4 py-2 text-xs" />
                </Link>
            </div>
        </div>
    );
};

export default MobileHeader;
