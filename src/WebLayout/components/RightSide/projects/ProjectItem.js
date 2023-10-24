import React from "react";
import StackList from "./StackList";
import link from "../../../../icons/link.png"
import d4k from "../../../../thumbnails/d4k.png"
import getfit from "../../../../thumbnails/GetFit.png"
import jobTracker from "../../../../thumbnails/jobtracker.png"
import quizard from "../../../../thumbnails/quizard.png"
import swolemates from "../../../../thumbnails/swolemates.png"

const ProjectItem = props => {

    let image

    if (props.index === 0) {
        image = d4k
    } else if (props.index === 1) {
        image = getfit
    }else if (props.index === 2) {
        image = swolemates
    } else if (props.index === 3) {
        image = jobTracker
    } else {
        image = quizard
    }

    return (
        <li className="rounded-lg flex items-start w-full mb-12 p-12 hover:bg-secondary hover:!opacity-100 group-hover/list:opacity-50 transition-opacity duration-150 ease-in-out group">
            
            <img className="aspect-video h-64 mt-4 mr-16" src={ image } alt="project thumbnail" />

            {/* CONTENT DIV */}
            <div>

                {/* name and github link */}
                <div className="mb-2 w-4/5">
                    <p className="text-white font-medium text-[60px] mr-8">{ props.name }</p>

                    <div className="flex items-center mt-4 text-[40px]">

                        <img src={ link } alt="link icon" className="h-8 invert mr-4"/>

                        { 
                            props.link &&
                            <a className="text-white hover:text-accent hover:cursor-pointer mr-4" href={ props.link } target="_blank" rel="noreferrer">Visit Site</a>
                        }

                        { 
                            props.youtube &&
                            <a className="text-white hover:text-accent hover:cursor-pointer mr-4" href={ props.youtube } target="_blank" rel="noreferrer">Video Walkthrough</a>
                        }

                        {
                            (props.youtube || props.link) &&
                            <p className="text-white mr-4">·</p>
                        }

                        <a className="text-white hover:text-accent hover:cursor-pointer" href={ props.github } target="_blank" rel="noreferrer">GitHub</a>

                    </div>
                </div>

                <p className="text-offWhite text-5xl leading-snug my-4">{ props.about }</p>

                <StackList stack = { props.stack } />

            </div>

        </li>
    )
}

export default ProjectItem