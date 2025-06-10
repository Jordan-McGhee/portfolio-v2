import React from "react";
import { Link } from "react-router-dom";

const Education = () => {

    return (
        <div className="scroll-mt-20" id="education">
            <p className="text-white font-semibold text-2xl mb-6 px-8">EDUCATION</p>
            
            <ul className="group/list">


                {/* CODING DOJO */}
                <li className="text-offWhite flex justify-between hover:!opacity-100 group-hover/list:opacity-50 group rounded-lg hover:bg-secondary px-8 py-6">

                <div>
                    {/* DATE */}
                    <p className="text-xs mt-1.5">MAR 2021 — JUL 2021</p>

                    {/* location */}
                    <p className="text-sm font-medium mt-2 text-accent">Online</p>
                </div>

                    {/* CONTENT DIV */}
                    <div className="w-3/4">
                        <Link className="text-lg font-medium text-white group-hover:text-accent transition-colors duration-300 ease-in-out" to='https://www.codingdojo.com/' target="_blank">Coding Dojo</Link>
                        <p className="text-lg font-medium my-2">Full Stack Web Development Bootcamp <span className="text-white italic">(Python — Django)</span></p>
                        <p className="text-base leading-snug">Intensive 14 week, part-time web development program. Included the introduction, implementation, and iteration of various web projects utilizing Python, HTML, CSS, and JavaScript.</p>
                    </div>
                </li>

                {/* MIZZOU */}
                <li className="text-offWhite flex justify-between hover:!opacity-100 group-hover/list:opacity-50 rounded-lg hover:bg-secondary mb-12 px-8 py-6 group">

                <div>
                    {/* DATE */}
                    <p className="text-xs mt-1.5">AUG 2013 — MAY 2017</p>
                    {/* location */}
                    <p className="text-sm font-medium mt-2 text-accent">Columbia, MO</p>
                </div>

                    {/* CONTENT DIV */}
                    <div className="w-3/4">
                        <p className="text-lg font-medium text-white mb-2 group-hover:text-accent transition-colors duration-300 ease-in-out">University of Missouri</p>
                        <p className="text-lg font-medium my-2">Bachelor of Journalism | Radio - TV Production</p>
                        <p className="text-base leading-snug">Graduated cum laude, showcasing a strong commitment to academic excellence. Cultivated valuable skills in effective communication and collaborative teamwork with my peers.</p>
                    </div>
                </li>


            </ul>
        </div>
    )
}

export default Education