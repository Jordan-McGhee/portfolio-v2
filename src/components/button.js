import React from "react";

const Button = props => {

    return (
        <button className="bg-accent rounded-full px-12 py-8 text-3xl hover:bg-white hover:text-accent">
            { props.text }
        </button>
    )
}

export default Button