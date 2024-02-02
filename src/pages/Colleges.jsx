import Sidebar from "../sections/Sidebar";
import { CollegeData } from "../data/collegeData";
import {Link} from "react-router-dom";
import CollegeBox from "../components/CollegeBox";
const Colleges = () => {
    return (  
        <div className="relative flex w-screen h-full text-black bg-white">
            <Sidebar bg={"rgb(255,214,10)"} txt = {"black"}/>
            <div className=" relative w-full shrink-1 space-y-10 flex flex-col" >
                <div className="text-black text-xl p-5 bg-blue-200 font-serif justify-center flex">
                    <h1 className="my-5">Colleges</h1>
                </div>
                <div className="flex w-full wrap ml-4">
                {
                    CollegeData.map((clg)=>{
                        var lnk = `/campus/dashboard/${clg.id}`;
                        return (
                            <Link to = {lnk}>
                                <CollegeBox source = {clg.img} title={clg.name}/>                                 
                            </Link>
                        )
                    })
                }
                </div>
            </div>
            
        </div>
    );
}
 
export default Colleges;