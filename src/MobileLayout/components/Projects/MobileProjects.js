import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../../components/button";

import projects from "../../../json/projects.json";
import MobileProjectList from "./MobileProjectList";

const MobileProjects = () => {
    const [showFull, setShowFull] = useState(false);

    const staticProjects = projects.slice(0, 3);
    const additionalProjects = projects.slice(3);

    return (
        <div className="my-8 text-white">
            <p className="font-black text-xl mb-8">PROJECTS</p>

            <MobileProjectList projects={staticProjects} />

            <AnimatePresence>
                {showFull && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <MobileProjectList projects={additionalProjects} />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="" onClick={() => setShowFull(!showFull)}>
                <Button
                    text={showFull ? "Show Less" : "Show More"}
                    className="text-accent text-xl hover:cursor-pointer hover:text-white"

                />
            </div>
        </div>
    );
};

export default MobileProjects;
