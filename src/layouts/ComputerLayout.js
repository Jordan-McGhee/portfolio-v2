import Name from "../sections/Name.js"
import ComputerNav from "../Navbars/ComputerNav.js"
import Icons from "../sections/Icons.js"

const ComputerLayout = props => {


    return (
        <div className="flex h-screen">

        
            <div className="px-96 py-64 h-full">

                {/* LEFT SIDE */}
                <div className="w-50% border border-white h-4/5 my-auto flex flex-col justify-between">
                    <div className="mb-36">
                        <Name />

                        <ComputerNav />
                    </div>

                    <Icons className="justify-self-end"/>
                </div>

                {/* RIGHT SIDE */}
                <div>

                </div>
            </div>


        </div>
    )
}

export default ComputerLayout