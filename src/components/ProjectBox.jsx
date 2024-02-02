const ProjectBox = ({source,title}) => {
    return (  
        <div className="h-auto w-1/4 m-7 flex-col flex justify-around items-center p-2 rounded-xl border-black border-solid border-[1px]">
            <img src={source}  />
            <p>{title}</p>
        </div>
    );
}
 
export default ProjectBox;