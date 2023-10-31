import React from "react";

const Experience = () => {

    return (
        <div className="mb-12 leading-snug" id="experience">

            <p className="text-white font-semibold text-2xl mb-6 px-12">EXPERIENCE</p>

            {/* TERMINUS */}
            <div className="text-offWhite flex rounded-lg justify-between px-12 py-6 hover:bg-secondary hover:bg-opacity-50 group">

                {/* DATE */}
                <p className="mt-2 text-xs">2018 — PRESENT</p>

                {/* CONTENT DIV */}
                <div className="w-4/5">
                    <p className="text-lg font-medium text-white mb-2">Manager, Creative Services · <a className="group-hover:text-accent transition-colors duration-300 ease-in-out" href="https://terminus.com/" target="_blank" rel="noreferrer">Terminus ABM</a></p>
                    <p className="font-medium mb-4 opacity-50">Formerly: Sr. Digital Designer, Jr. Digital Strategist</p>

                    <p className="text-lg mb-2 leading-snug">
                        Led Terminus’ Creative Services team, turning around personalized
                        animated and/or static ad sets for customer marketing campaigns.
                    </p>
                    <p className="text-lg mb-2 leading-snug">
                        Managed <span className="font-medium text-white group-hover:text-accent transition-colors duration-300 ease-in-out">60+</span> customer accounts, responsible for more than
                        65% of all incoming customer requests.
                    </p>
                    <p className="text-lg mb-2 leading-snug">
                        Delivered <span className="font-medium text-white group-hover:text-accent transition-colors duration-300 ease-in-out">100%</span> of requests on time within a tight turnaround window.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Experience