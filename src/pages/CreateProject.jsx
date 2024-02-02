import Sidebar from "../sections/Sidebar";
const CreateProject = () => {
    return (  
        <div className="relative flex w-screen h-full text-black bg-[rgb(246,255,252)]"> 
            <Sidebar bg={"rgb(66,87,77)"}/>
            <div className=" relative w-full shrink-1 space-y-10 flex flex-col items-center" >
                <div className=" w-full text-white p-5 bg-[rgb(44,43,43)] font-mono flex justify-center">
                    <h1 className="my-5">Request to Add Your Project</h1>
                </div>
                <form className="space-y-7 bg-blue-300/60 rounded-lg p-10 flex-col flex items-center w-[70%] border-2 border-solid border-[rgb(44,43,43)]" style={{boxShadow:"7px 10px 0 0 rgb(44,43,43)"}}>
                    <div className="flex text-xl">
                        <label htmlFor="title" className="pt-2 mr-3">
                            Title :
                        </label>
                        <input id = "title" placeholder="Title" maxLength = "30" className="rounded-xl p-2 h-10 focus:outline-none"/>
                        <p className="text-sm items-end p-4">(Max. 30 characters)</p>
                    </div>

                    <div className="flex text-xl">
                        <label htmlFor="subtext" className="pt-2 mr-3">
                            SubText :
                        </label>
                        <input id = "subtext" placeholder="Enter Subtext" maxLength = "50" className="rounded-xl p-2 h-10 focus:outline-none"/>
                        <p className="text-sm items-end p-4">(Max. 50 characters)</p>
                    </div>
                    <div className="text-xl w-full">
                        <label htmlFor="team" className="pt-2 mr-3">
                            Add Team Members :
                        </label>
                        <div className="flex space-x-5 f-full">
                            <input type="text" placeholder="Member Name" className="rounded-xl p-2 h-10 focus:outline-none w-1/4"/>
                            <input type="text" placeholder="Member Bio" className="rounded-xl p-2 h-10 focus:outline-none w-1/4"/>
                            <input type="file" placeholder="Member Image" className="rounded-xl p-2 h-10 focus:outline-none w-1/4"/>
                        </div>
                        <button className="text-white text-sm mt-5" >Add new member</button>
                    </div>
                    <div className="flex text-xl">
                        <label htmlFor="image" className="pt-2 mr-3">
                            Project Image :
                        </label>
                        <input id = "image" placeholder="Enter Subtext" type="file" className="rounded-xl p-2 h-10 focus:outline-none"/>
                    </div>
                    <div className="flex text-xl">
                        <label htmlFor="code" className="pt-2 mr-3">
                            GitHub Repository Link :
                        </label>
                        <input id = "code" placeholder="Enter code link" className="rounded-xl p-2 h-10 focus:outline-none"/>
                    </div>
                    <div className="flex text-xl">
                        <label htmlFor="subtext" className="pt-2 mr-3">
                            Details :
                        </label>
                        <textarea id = "details" placeholder="Enter Details" maxLength = "250" className="rounded-xl w-full text-sm p-2 h-full focus:outline-none"/>
                        <p className="text-sm items-end p-4">(Max. 250 characters)</p>
                    </div>
                    <div className="flex text-xl">
                        <label htmlFor="video" className="pt-2 mr-3">
                            Video :
                        </label>
                        <input id = "video" placeholder="Enter video" type="file" className="rounded-xl p-2 h-10 focus:outline-none"/>
                    </div>
                    <div className="flex text-xl">
                        <label htmlFor="tech" className="pt-2 mr-3 w-[350px]">
                            Technologies Used :
                        </label>
                        <textarea id = "tech" placeholder="Enter Tech" maxLength = "250" className="rounded-xl w-full p-2 h-full text-sm focus:outline-none"/>
                        <p className="text-sm items-end p-4">(Max. 250 characters)</p>
                    </div>
                    <div>
                        <button className="text-white text-md"> Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default CreateProject;