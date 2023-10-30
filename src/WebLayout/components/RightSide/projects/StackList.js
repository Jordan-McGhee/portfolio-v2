import React from "react";

const StackList = props => {

    let stackClass

    if (props.windowSize === 'mobile') {
        stackClass = "bg-secondary text-accent rounded-full mr-2 mt-2 text-xs px-3 py-1 scale-80"
    } else {
        stackClass = "mt-3 px-3 py-1 bg-secondary text-accent text-sm rounded-full mr-2 group-hover:bg-primary"
    }

    let content = props.stack.map((stack) => (
        <li className={ stackClass } key={props.stack.indexOf(stack)}>
            { stack }
        </li>
    ))

    return (
        <ul className={ props.windowSize === "mobile" ? "flex flex-wrap mt-3" : "flex flex-wrap"}>
            { content }
        </ul>
    )
}

export default StackList