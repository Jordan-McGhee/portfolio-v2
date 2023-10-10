import React from "react";
import StackList from "./StackList";

const ProjectItem = props => {

    return (
        <li className=" border border-accent rounded-lg flex items-start w-full mb-12 p-12">
            
            {/* IMAGE PLACEHOLDER */}
            <span className="bg-white h-64 mr-16 aspect-video" />

            {/* CONTENT DIV */}
            <div>

                {/* name and github link */}
                <div className="flex items-center mb-2">
                    <p className="text-white font-medium text-[50px] mr-8">{ props.name }</p>
                    <p className="text-offWhite text-[44px]">GITHUB</p>
                </div>

                <p className="text-offWhite text-5xl leading-snug">{ props.about }</p>

                <StackList stack = { props.stack } />

            </div>

        </li>
    )
}

export default ProjectItem