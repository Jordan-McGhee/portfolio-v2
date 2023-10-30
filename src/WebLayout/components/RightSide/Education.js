import React from "react";
import { Link } from "react-router-dom";

const Education = () => {

    return (
        <div>
            <p className="text-white font-semibold text-2xl mb-12 px-12">EDUCATION</p>
            
            <ul className="scroll-mt-32 group/list" id="education">


                {/* CODING DOJO */}
                <li className="text-offWhite flex justify-between hover:!opacity-100 group-hover/list:opacity-50 group rounded-lg hover:bg-secondary mb-12 px-12">
                    {/* DATE */}
                    <p className="text-xs mt-2">March — July 2021</p>

                    {/* CONTENT DIV */}
                    <div className="w-4/5">
                        <Link className="text-lg font-medium text-white group-hover:text-accent transition-colors duration-300 ease-in-out" to='https://www.codingdojo.com/' target="_blank">Coding Dojo</Link>
                        <p className="text-lg font-medium my-2">Full Stack Web Development Bootcamp <span className="text-white italic">(Python — Django)</span></p>
                        <p className="text-lg leading-snug">Intensive 14 week, part-time web development program. Included the introduction, implementation, and iteration of various web projects utilizing Python, HTML, CSS, and JavaScript</p>
                    </div>
                </li>

                {/* MIZZOU */}
                <li className="text-offWhite flex justify-between hover:!opacity-100 group-hover/list:opacity-50 rounded-lg hover:bg-secondary mb-12 px-12 group">
                    {/* DATE */}
                    <p className="text-xs mt-1.5">2013 — May 2017</p>

                    {/* CONTENT DIV */}
                    <div className="w-4/5">
                        <p className="text-lg font-medium text-white mb-2 group-hover:text-accent transition-colors duration-300 ease-in-out">University of Missouri</p>
                        <p className="text-lg font-medium mb-8">Bachelor of Journalism | Radio - TV Production</p>
                    </div>
                </li>


            </ul>
        </div>
    )
}

export default Education