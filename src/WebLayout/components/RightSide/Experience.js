import React from "react";

const Experience = () => {

    return (
        <div className="mb-24 rounded-lg">

            <p className="text-white font-semibold text-7xl mb-16 px-12">EXPERIENCE</p>

            {/* TERMINUS */}
            <div className="text-offWhite flex justify-between border border-accent p-12">

                {/* DATE */}
                <p className="text-4xl mt-1.5">2018 — PRESENT</p>

                {/* CONTENT DIV */}
                <div className="w-4/5">
                    <p className="text-5xl font-medium text-white mb-4">Manager, Creative Services · Terminus ABM</p>
                    <p className="text-4xl font-medium mb-8 opacity-50">Formerly: Sr. Digital Designer, Jr. Digital Strategist</p>

                    <p className="text-5xl mb-6">
                        Lead Terminus’ Creative Services team, turning around personalized
                        animated and/or static ad sets for customer marketing campaigns.
                    </p>
                    <p className="text-5xl mb-6">
                        Managed <span className="font-medium text-white">60+</span> customer accounts, responsible for more than
                        65% of all incoming customer requests.
                    </p>
                    <p className="text-5xl">
                        Delivered <span className="font-medium text-white">100%</span> of requests on time within a tight turnaround window.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Experience