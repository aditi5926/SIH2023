const CollegeBox = ({source,title}) => {
    return (  
        <div className="h-full text-black w-2/3 m-5 flex-col flex justify-around items-center p-2 rounded-xl border-black border-solid border-[1px]">
            <img src={source}  />
            <p>{title}</p>
        </div>
    );
}
 
export default CollegeBox;