import React from "react";
import { Link } from "react-router-dom";

const About = () => {

    return (
        <div className="mb-12 px-12  scroll-mt-32" id="about">

            <p className="text-white font-semibold text-2xl mb-8 bg-primary">ABOUT ME</p>

            <p className="text-offWhite text-lg leading-snug mb-6">During Covid, after a stressful workday, I reflected on my career and realized I was on the wrong path. I wanted a new challenge that would teach me something new, while allowing me to improve my <Link to='https://www.behance.net/jordanmcghee' target="_blank" className="font-medium text-white hover:text-accent">design skills</Link>. I set my sights on something that I felt was out of reach — <span className="font-medium text-white">coding, specifically web development.</span></p>

            <p className="text-offWhite text-lg leading-snug mb-6">Fast forward to today and I've got a <span className="font-medium text-white">bootcamp graduation and several projects</span> under my belt. My goal now is to turn my practice into a fulfilling career.</p>

            <p className="text-offWhite text-lg leading-snug mb-6">When I'm not working or coding, I spend most of my time working out, exploring trails with my dog, hanging out with friends, or fighting in the rift with my friends.</p>
        </div>
    )
}

export default About