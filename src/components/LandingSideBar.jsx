import { RxCross2 } from "react-icons/rx";
import {Link} from "react-router-dom";

const Sidebar = ({vis,setVis}) => {
    const sideItem = {
        padding: "1rem",
        fontSize: "15px",
    }
    const sideBarStyle = {
        borderRadius: "10px",
        height: "100vh", 
        width: "100vw",
        position: "fixed", 
        zIndex: 2,
        top: 0,
        left: 0,
        backgroundColor: "white",
        overflowY: "hidden", 
        paddingTop: "15px",
        paddingLeft:"10px", 
        transition: "0.5s", 
    }
    return ( 
        <div id="sideBar" style={sideBarStyle}>
            <div style = {sideItem}>
                <button onClick={() => {setVis(!vis)}}>
                    <RxCross2 style={{textDecoration:"none",color:"black"}}/>
                </button>
            </div>
            <div style = {sideItem}>
                <Link to ="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to="/login" style={{textDecoration:"none",color:"black"}}>Login </Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <Link to = "/signup" style={{textDecoration:"none",color:"black"}}>Sign-Up</Link>
            </div>
            <hr style={{
                width:"100%"
            }}/>
            <div style = {sideItem}>
                <wrap style={{textDecoration:"none",color:"black"}}> Donate </wrap>
            </div>
            <hr style={{
                width:"100%"
            }}/>
        </div>
     );
}
 
export default Sidebar
