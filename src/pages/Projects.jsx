import CollegeBox from "../components/CollegeBox";
import Sidebar from "../sections/Sidebar";
import {Link} from "react-router-dom";
import img from "../assets/yml2.png"
const Projects = () => {
    return (  
        <div className="relative flex w-screen h-full text-black bg-white">
            <Sidebar bg={"rgb(255,214,10)"} txt = {"black"}/>
            <div className=" relative w-full shrink-1 space-y-10 flex flex-col" >
                <div className="text-black text-xl p-5 bg-blue-200 font-serif justify-center flex">
                    <h1 className="my-5">Projects</h1>
                </div>
                <div className="flex w-full wrap ml-4">
                    <Link to="/projects/1">
                        <CollegeBox source={img} title = {"InnoWorks-SIH"} />
                    </Link>
                </div>
            </div>
            
        </div>
    );
}
 
export default Projects;