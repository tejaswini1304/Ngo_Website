import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
const Navbar = () => {
    return ( 
        <>
            <div className="navbar h-[10vh] w-[75%] bg-[#F5F7F8] flex justify-center items-center fixed  rounded-[100px] top-4 z-[3000]">
                <div className="nav-left h-full w-[10%] bg-red-40 flex justify-center items-center">
                    <span className="text-white text-[30px] font-extralight"><img src={logo} className="h-[8vh] w-[4vw]" /></span>
                </div>
                <div className="nav-mid h-full w-[65%] bg--400 flex justify-center items-center gap-[100px] text-[18px] text-[#45474B]">
                    <Link to="/events">Fundraise</Link>
                    <Link to="/about">Donate</Link>
                    <Link to="/contact">About</Link>
                </div>
                <div className="nav-right h-full w-[25%] bg-green-40 gap-6   flex justify-center items-center">
                    <Link to="/login" className="loginbt h-[5vh] w-[7vw] flex justify-center items-center bg-white rounded-full text-[#191919] text-[1.1vw] font-regular">SignIn</Link>
                    <Link to="/logout" className="h-[5vh] w-[7vw] flex justify-center items-center bg-[#F4CE14] rounded-full text-[#191919] text-[1.1vw] font-regular">SignUp</Link>
                </div>
            </div>
        </>
     );
}
 
export default Navbar;