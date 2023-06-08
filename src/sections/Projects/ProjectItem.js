import React from "react";


const ProjectList = props => {


    console.log(typeof props.stack)
    // const stack = props.stack.map((tech) => (
    //     null
    // ))

    return (
        <li className="flex">
            
            {/* IMAGE PLACEHOLDER */}
            <div className="w-1/3 rounded-sm bg-white" />

            {/* CONTENT DIV */}
            <div>
                <p className="">{ props.name }</p>
                <p className="">{ props.about }</p>
                {/* { stack } */}
            </div>
        </li>
    )
}

export default ProjectList