import React from "react";

const Education = () => {

    return (
        <div className="mb-24 p-12 scroll-mt-40" id="education">

            <p className="text-white font-semibold text-7xl mb-16">EDUCATION</p>

            {/* CODING DOJO */}
            <div className="text-offWhite flex justify-between">
                {/* DATE */}
                <p className="text-4xl mt-1.5">March — July 2021</p>

                {/* CONTENT DIV */}
                <div className="w-4/5">
                    <p className="text-5xl font-medium text-white mb-8">Coding Dojo</p>
                    <p className="text-5xl font-medium mb-8">Full Stack Web Development Bootcamp <span className="text-white italic">(Python — Django)</span></p>
                    <p className="text-5xl leading-snug">Intensive 14 week, part-time web development program. Included the introduction, implementation, and iteration of various web projects utilizing Python, HTML, CSS, and JavaScript</p>
                </div>
            </div>

            {/* MIZZOU */}
            <div className="text-offWhite flex justify-between py-12">
                {/* DATE */}
                <p className="text-4xl mt-1.5">2013 — May 2017</p>

                {/* CONTENT DIV */}
                <div className="w-4/5">
                    <p className="text-5xl font-medium text-white mb-8">University of Missouri</p>
                    <p className="text-5xl font-medium mb-8">Bachelor of Journalism | Radio - TV Production</p>
                </div>
            </div>


        </div>
    )
}

export default Education