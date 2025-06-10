import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../../../components/button";

import projects from "../../../../json/projects.json";
import ProjectList from "./ProjectList";

const Projects = () => {
    const [showFull, setShowFull] = useState(false);

    const staticProjects = projects.slice(0, 3);
    const additionalProjects = projects.slice(3);

    return (
        <div className="mb-12 scroll-mt-20" id="projects">
            <p className="text-white font-semibold text-2xl mb-6 px-8">PROJECTS</p>

            {/* Render first 3 projects statically */}
            <ProjectList projects={staticProjects} />

            {/* Animate additional projects separately */}
            <AnimatePresence>
                {showFull && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <ProjectList projects={additionalProjects} />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="ml-7" onClick={() => setShowFull(!showFull)}>
                <Button
                    text={showFull ? "Show Less" : "Show More"}
                    className="text-accent text-xl hover:cursor-pointer hover:text-white"
                    
                />
            </div>
        </div>
    );
};

export default Projects;
