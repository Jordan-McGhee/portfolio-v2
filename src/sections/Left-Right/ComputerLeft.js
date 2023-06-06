import React from "react";
import Name from "../Name";
import Icons from "../Icons";
import ComputerNav from "../../Navbars/ComputerNav";

const ComputerLeft = () => {

    return (
        <div className="w-50% border border-white h-4/5 my-auto flex flex-col justify-between">
            <div className="mb-36">
                <Name />

                <ComputerNav />
            </div>

            <Icons className="justify-self-end" />
        </div>
    )
}

export default ComputerLeft