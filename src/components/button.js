import React from "react";

const Button = props => {

    return (
        <button className={ props.buttonClass || "bg-secondary text-accent rounded-full px-12 py-8 text-3xl hover:bg-accent hover:text-secondary"}>
            { props.text }
        </button>
    )
}

export default Button