import React from "react";

const Button = props => {

    return (
        <button className={ props.buttonClass || "bg-secondary text-accent rounded-full px-4 py-2 text-sm hover:bg-accent hover:text-secondary"}>
            { props.text }
        </button>
    )
}

export default Button