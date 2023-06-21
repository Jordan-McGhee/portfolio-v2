import ComputerLeft from "../sections/Left-Right/ComputerLeft.js"
import ComputerRight from "../sections/Left-Right/ComputerRight.js"

const ComputerLayout = props => {


    return (
        <div className="flex h-screen">
        
            <div className="px-48 py-64 h-full flex justify-between m-auto">

                <ComputerLeft />

                <ComputerRight />
            </div>


        </div>
    )
}

export default ComputerLayout