import React from "react";

const MobileEducation = () => {

    return (
        <div className="my-8 text-offWhite text-sm">

            <p className="font-semibold text-xl mb-6">EDUCATION</p>

            <ul>
                <li>

                    <p className="mb-2 font-extrabold opacity-50">March — July 2021</p>

                    <p className="font-semibold">Coding Dojo</p>

                    <p className="my-3">Full Stack Web Development Bootcamp <span className="text-accent italic">(Python — Django)</span></p>

                    <p className="my-3">Intensive 14 week, part-time web development program. Included the introduction, implementation, and iteration of various web projects utilizing Python, HTML, CSS, and JavaScript</p>
                </li>

                <li className="mt-6">
                    <p className="mb-2 font-extrabold opacity-50">August 2013 — May 2017</p>

                    <p className="font-semibold">University of Missouri</p>

                    <p className="my-3">Bachelor of Journalism | Radio - TV Production</p>

                    <p>Graduated cum laude, showcasing a strong commitment to academic excellence. Cultivated valuable skills in effective communication and collaborative teamwork with my peers.</p>
                </li>
            </ul>

        </div>
    )

}

export default MobileEducation