import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import useMousePosition from "../hooks/useMousePosition";

const WebLayout = () => {

    const mousePosition = useMousePosition()

    return (
        <div className="bg-primary h-screen px-28 py-20 overflow-y-scroll tracking-wide web-layout">
            <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: `radial-gradient(1200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(192, 156, 247, 0.08), transparent 90%)` }}/>
            
            <div className="max-w-screen-2xl m-auto flex justify-between">
                <LeftSide />
                <RightSide />
            </div>

        </div>
    )
}

export default WebLayout