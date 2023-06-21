import React from "react";


const ProjectItem = (props) => {

    const stack = props.stack.map((tech) => (
        null
    ))

    return (
        <li className="flex w-full border border-accent items-start mb-12">
            
            {/* IMAGE PLACEHOLDER */}
            <div className="rounded-sm bg-white h-64 w-64" />

            {/* CONTENT DIV */}
            <div>
                <p className="text-white text-5xl">{ props.name }</p>
                <p className="text-white text-2xl">{ props.about }</p>
                {/* { stack } */}
            </div>
        </li>
    )
}

export default ProjectItem