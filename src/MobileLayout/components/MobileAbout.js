import React from "react";
import { Link } from "react-router-dom";

const MobileAbout = () => {

    return (
        <div className="my-8 text-white" id="about">
            <p className="font-semibold text-lg mb-6">ABOUT ME</p>

            <p className="text-offWhite mb-6">During Covid, after a stressful workday, I reflected on my career and realized I was on the wrong path. I wanted a new challenge that would teach me something new, while allowing me to improve my <Link to='https://www.behance.net/jordanmcghee' target="_blank" className="font-medium text-accent">design skills</Link>. I set my sights on something that I felt was out of reach — <span className="font-medium text-white">coding, specifically web development.</span></p>

            <p className="text-offWhite mb-6">Fast forward to today and I've got a <span className="font-medium text-white">bootcamp graduation and several projects</span> under my belt. My goal now is to turn my practice into a fulfilling career.</p>

            <p className="text-offWhite mb-6">When I'm not working or coding, I spend most of my time working out, exploring trails with my dog, hanging out with friends, or fighting in the rift with my friends.</p>

        </div>
    )
}

export default MobileAbout