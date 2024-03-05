import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="bg-neutral-700 h-[70px] w-[100%] flex
            justify-between items-center px-20">
            <Link to='/'>
            <span className="text-white hover:text-slate-300 font-semibold">
                Home
            </span>
            </Link>
            <Link to='/experience'>
            <span className="text-white hover:text-slate-300 font-semibold">
                Experience
            </span>
            </Link>
            <Link to='/myproject'>
            <span className="text-white hover:text-slate-300 font-semibold">
                MyProject
            </span>
            </Link>
            <Link to='/skills'>
            <span className="text-white hover:text-slate-300 font-semibold">
                MySkills
            </span>
            </Link>
        </div>
    )
}