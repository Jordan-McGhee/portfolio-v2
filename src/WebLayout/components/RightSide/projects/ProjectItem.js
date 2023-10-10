import React from "react";
import StackList from "./StackList";

const ProjectItem = props => {

    return (
        <li className="rounded-lg flex items-start w-full mb-12 p-12 hover:bg-secondary hover:bg-opacity-50">
            
            {/* IMAGE PLACEHOLDER */}
            <span className="bg-white h-64 mt-4 mr-16 aspect-video" />

            {/* CONTENT DIV */}
            <div>

                {/* name and github link */}
                <div className="mb-2 w-4/5">
                    <p className="text-white font-medium text-[60px] mr-8">{ props.name }</p>

                    <div className="flex mt-4 text-[40px]">

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