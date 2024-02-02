import { FaChevronDown } from "react-icons/fa";
import {BsBookHalf} from "react-icons/bs"
import {AiOutlineSearch} from 'react-icons/ai'
import {GiHamburgerMenu} from "react-icons/gi"
import SideBar from "../components/LandingSideBar"
import { useState } from "react";
import {Link} from "react-router-dom"

const BetterNavBar = () => {
    const [openSide,setOpenSide] = useState(false);
    const [openFeatures,setOpenFeatures] = useState(false);
    const sideBarOperation = () => {
        setOpenSide(!openSide);
        // window.scrollTo(0,0);
    }
    const buttonStyle = "focus:outline-none bg-transparent text-black flex items-end border-b-2 border-transparent hover:border-blue-500 duration-700 ease";
    
    const features = () => {
        setOpenFeatures(!openFeatures);
        
    }

    return (  
        <>
            <div id="Nav" className="z-2 text-black text-lg flex justify-between bg-[#FCF5EB]/80 w-full h-[15%] py-5 px-8 sticky top-0 left-0 overflow-hidden ">
                <div className="lg:hidden items-center flex">
                    <button onClick={sideBarOperation}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className="text-blue-500 text-2xl strong font-bold flex max-lg:text-md">
                    <Link to = "/" className="flex">
                        <BsBookHalf className="text-[40px] items-baseline mr-2"/>
                        InnoWorks
                    </Link>
                </div>
                <div className="bg-black text-white lg:hidden">
                    
                </div>
                <div className="flex justify-around w-[50%] items-center max-lg:hidden">
                    
                    <button className={buttonStyle} > 
                        Features
                        <FaChevronDown className="my-[3px]"/>
                    </button>
                    
                    <Link to="/campus" className={buttonStyle}>Colleges</Link>
                    <Link to="/projects/add" className={buttonStyle}>Add a Project</Link>
                    <Link to="/leaderboard" className={buttonStyle}>Leaderboards</Link>
                    <Link to="/projects" className={buttonStyle}>Projects</Link>
                </div>
                <div className="flex justify-around items-center max-lg:hidden">
                    <button className='ml-5 border-black border rounded-[50px] bg-blue-700 px-5 py-3 text-black focus:outline-none flex items-end'>
                        Explore Now <AiOutlineSearch className='mb-[5px] ml-2'/>
                    </button>
                </div>
            </div>
            {
                openSide && <SideBar vis = {openSide} setVis = {setOpenSide}/>
            }
            {
                openFeatures && <FeaturesBar show = {openFeatures}/>
            }
        </>
    );
}
 
export default BetterNavBar;