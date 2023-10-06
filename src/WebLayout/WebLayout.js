import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide/RightSide";

const WebLayout = () => {

    return (
        <div className="bg-primary h-screen px-80 py-64 flex justify-between overflow-y-scroll">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default WebLayout