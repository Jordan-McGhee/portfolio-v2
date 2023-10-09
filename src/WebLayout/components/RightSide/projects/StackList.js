import React from "react";

const StackList = props => {

    let content = props.stack.map((stack) => (
        <li className="mt-8 px-8 py-4 bg-secondary text-accent rounded-full text-4xl mr-4">
            { stack }
        </li>
    ))

    return (
        <ul className="flex flex-wrap w-3/4">
            { content }
        </ul>
    )
}

export default StackList