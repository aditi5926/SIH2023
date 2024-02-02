import {AiOutlineHome} from "react-icons/ai"
import {FaSchool,FaChalkboardTeacher} from "react-icons/fa"
import {CgProfile} from "react-icons/cg"
import {MdOutlineLeaderboard} from "react-icons/md"
import {RiMedalLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const Sidebar = ({bg,txt}) => {
    if (!txt) txt = "white";
    return (  
        <>
        <div className="text-xl w-[70px] shrink-0 overflow-hidden hover:w-1/6 duration-500 easeInOut sticky top-0 left-0 h-screen flex-col flex justify-around" style={{backgroundColor:bg}}>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/' style={{color:txt}}>
                <AiOutlineHome className="my-[3px] mr-2 min-w-[50px] "/>Home
            </Link>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/leaderboard' style={{color:txt}}>
                <MdOutlineLeaderboard className="my-[3px] mr-2 min-w-[50px] block "/> Weekly Leaderboard
            </Link>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/projects/add' style={{color:txt}}>
                <RiMedalLine className="my-[3px] mr-2 min-w-[50px]"/> Create New
            </Link>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/campus/dashboard/11aa12' style={{color:txt}}>
                <FaSchool className="my-[3px] mr-2 min-w-[50px]"/>Your College
            </Link>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/projects' style={{color:txt}}>
                <FaChalkboardTeacher className="my-[3px] mr-2 min-w-[50px]"/>All Projects
            </Link>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/campus' style={{color:txt}}>
                <FaChalkboardTeacher className="my-[3px] mr-2 min-w-[50px]"/>All Colleges
            </Link>
            <Link className="m-2 flex p-2 border-black rounded-md hover:shadow-xl " to = '/' style={{color:txt}}>
                <CgProfile className="my-[3px] mr-2 min-w-[50px]"/> Profile
            </Link>
        </div>
        </>
    );
}
 
export default Sidebar;