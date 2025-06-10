import React from "react";
import StackList from "../../../WebLayout/components/RightSide/projects/StackList";
import link from "../../../icons/link.png"

const MobileProjectItem = props => {

    return (
        <li className="text-offWhite text-sm mt-6 mb-10">

            <img src={props.image} alt= {`${props.name} thumbnail`} className="aspect-video h-28 mb-5" />

            <p className="text-white text-base mb-2 font-semibold hover:text-accent">{props.name}</p>

            {/* link div */}
            <div className="flex items-center w-3/4 mb-2">

                <img src={link} alt="link icon" className="h-3 invert mr-2" />

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

            <p>{props.about}</p>

            <StackList stack={props.stack} windowSize='mobile' />

        </li>
    )

}

export default MobileProjectItem