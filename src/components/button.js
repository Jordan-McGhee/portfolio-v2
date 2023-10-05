import React from "react";

const Button = props => {

    return (
        <button className="bg-accent rounded-lg px-12 py-8 text-4xl">
            { props.text }
        </button>
    )
}

export default Button