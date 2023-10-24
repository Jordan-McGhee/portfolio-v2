import React from "react";
import StackList from "../../../WebLayout/components/RightSide/projects/StackList";
import link from "../../../icons/link.png"
import d4k from "../../../thumbnails/d4k.png"
import getfit from "../../../thumbnails/GetFit.png"
import jobTracker from "../../../thumbnails/jobtracker.png"
import quizard from "../../../thumbnails/quizard.png"
import swolemates from "../../../thumbnails/swolemates.png"

const MobileProjectItem = props => {

    let image

    if (props.index === 0) {
        image = d4k
    } else if (props.index === 1) {
        image = getfit
    } else if (props.index === 2) {
        image = swolemates
    } else if (props.index === 3) {
        image = jobTracker
    } else {
        image = quizard
    }

    return (
        <li className="text-offWhite text-sm mt-6">
            <p className="text-white text-base mb-2 font-semibold">{props.name}</p>

            {/* link div */}
            <div className="flex items-center w-3/4 mb-2">

                <img src={ link } alt="link icon" className="h-3 invert mr-2"/>

                {
                    props.link &&
                    <a className="text-accent mr-1" href={props.link} target="_blank" rel="noreferrer">Visit Site</a>
                }

                {
                    props.youtube &&
                    <a className="text-accent mr-1" href={props.youtube} target="_blank" rel="noreferrer">Video Walkthrough</a>
                }

                {
                    (props.youtube || props.link) &&
                    <p className="text-white mr-1">·</p>
                }

                <a className="text-accent" href={props.github} target="_blank" rel="noreferrer">GitHub</a>
            </div>

            <p>{ props.about }</p>

            <StackList stack = { props.stack } windowSize = 'mobile' />

            <img src={ image } alt="project thumbnail" className="aspect-video h-32 mt-5"/>

        </li>
    )

}

export default MobileProjectItem