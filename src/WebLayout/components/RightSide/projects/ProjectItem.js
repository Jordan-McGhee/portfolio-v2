import React from "react";
import StackList from "./StackList";
import link from "../../../../icons/link.png"

const ProjectItem = props => {

    return (
        <li className="rounded-lg flex items-start w-full mb-12 px-8 py-6 hover:bg-secondary hover:!opacity-100 group-hover/list:opacity-50 transition-opacity duration-150 ease-in-out group">

            <a
                className="aspect-video h-20 mt-2 mr-8"
                href={props.link || props.youtube || props.github}
                target="_blank"
                rel="noreferrer"
            >

                <img src={props.image} alt={`${props.name} thumbnail`} />
            </a>

            {/* CONTENT DIV */}
            <div>

                {/* name and github link */}
                <div className="mb-2 w-3/4">

                    <div className="flex items-center gap-x-2">
                        <a
                            className="text-white font-medium text-lg hover:text-accent"
                            href={props.link || props.youtube || props.github}
                            target="_blank"
                            rel="noreferrer"
                            title={props.name}
                        >
                            {props.name}
                        </a>

                        <p className="italic text-accent">{props.inDevelopment && "Currently in Development"}</p>
                    </div>

                    <div className="flex items-center mt-2">

                        <img src={link} alt="link icon" className="h-3 invert mr-2" />

                        {
                            props.link &&
                            <a className="text-white hover:text-accent hover:cursor-pointer mr-2" href={props.link} target="_blank" rel="noreferrer">Visit Site</a>
                        }

                        {
                            props.youtube &&
                            <a className="text-white hover:text-accent hover:cursor-pointer mr-2" href={props.youtube} target="_blank" rel="noreferrer">Video Walkthrough</a>
                        }

                        {
                            (props.youtube || props.link) &&
                            <p className="text-white mr-2">·</p>
                        }

                        <a className="text-white hover:text-accent hover:cursor-pointer" href={props.github} target="_blank" rel="noreferrer">GitHub</a>

                    </div>
                </div>

                <p className="text-offWhite text-base leading-snug my-2">{props.about}</p>

                <StackList stack={props.stack} />

            </div>

        </li>
    )
}

export default ProjectItem