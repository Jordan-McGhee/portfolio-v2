import React  from "react"
import { NavLink } from "react-router-dom"

const ComputerNav = () => {

    return (
        <div className="flex flex-col my-36 h-1/2 justify-evenly">
            <NavLink to='' className='flex items-center'>
                <div className="bg-white h-1 w-48 mr-12 rounded-full"/>
                <p className="text-white text-5xl uppercase font-semibold">About</p>
            </NavLink>

            <NavLink to='' className='flex items-center'>
                <div className="bg-white h-1 w-48 mr-12 rounded-full"/>
                <p className="text-white text-5xl uppercase font-semibold">Projects</p>
            </NavLink>

            <NavLink to='' className='flex items-center'>
                <div className="bg-white h-1 w-48 mr-12 rounded-full"/>
                <p className="text-white text-5xl uppercase font-semibold">Experience</p>
            </NavLink>

            <NavLink to='' className='flex items-center'>
                <div className="bg-white h-1 w-48 mr-12 rounded-full"/>
                <p className="text-white text-5xl uppercase font-semibold">Skills</p>
            </NavLink>

            <NavLink to='' className='flex items-center'>
                <div className="bg-white h-1 w-48 mr-12 rounded-full"/>
                <p className="text-white text-5xl uppercase font-semibold">School</p>
            </NavLink>
        </div>
    )
}

export default ComputerNav