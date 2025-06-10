import React from "react";

const MobileEducation = () => {

    return (
        <div className="mt-8 text-offWhite text-sm">

            <p className="font-black text-2xl mb-6">EDUCATION</p>

            <ul>
                <li>

                    <p className="font-semibold text-lg">Coding Dojo</p>

                    <p className="my-2">Full Stack Web Development Bootcamp <span className="text-accent italic">(Python — Django)</span></p>

                    <p className="mt-1 mb-2 opacity-50 text-xs">MAR 2021 — JUL 2021</p>

                    <p className="my-3">Intensive 14 week, part-time web development program. Included the introduction, implementation, and iteration of various web projects utilizing Python, HTML, CSS, and JavaScript.</p>
                </li>

                <li className="mt-6">
                    <p className="font-semibold text-lg">University of Missouri</p>

                    <p className="my-2">Bachelor of Journalism | <span className="text-accent italic">Radio - TV Production</span></p>

                    <p className="mt-1 mb-2 text-xs opacity-50">AUG 2013 — MAY 2017</p>

                    <p>Graduated cum laude, showcasing a strong commitment to academic excellence. Cultivated valuable skills in effective communication and collaborative teamwork with my peers.</p>
                </li>
            </ul>

        </div>
    )

}

export default MobileEducation