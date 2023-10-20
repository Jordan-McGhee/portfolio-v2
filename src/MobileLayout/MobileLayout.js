import React from "react";
import MobileHeader from "./components/MobileHeader";
import MobileAbout from "./components/MobileAbout";

const MobileLayout = () => {

    return (
        <div className="px-8 py-12 tracking-wide leading-relaxed">
            <MobileHeader />

            <MobileAbout />
        </div>
    )
}

export default MobileLayout