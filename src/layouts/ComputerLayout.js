import ComputerLeft from "../sections/Left-Right/ComputerLeft.js"
import ComputerRight from "../sections/Left-Right/ComputerRight.js"

const ComputerLayout = props => {


    return (
        <div className="flex h-screen">
        
            <div className="px-96 py-64 h-full flex">

                <ComputerLeft />

                <ComputerRight />
            </div>


        </div>
    )
}

export default ComputerLayout