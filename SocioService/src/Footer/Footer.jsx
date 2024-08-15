import { useEffect } from "react";
// import gsap from "gsap";
import logo from "../assets/logo.png"
const Footer = () => {

    const footerArr = [
        {
            id:1,
            linkName:"Resources",
            allLinks:[
                {
                    linkMain:"Find Campaign"
                },
                {
                    linkMain:"Become a member "
                },
                {
                    linkMain:"Send us Feedback"
                }
            ]
        },
        {
            id:2,
            linkName:"Help",
            allLinks:[
                {
                    linkMain:"Get Help"
                },
                {
                    linkMain:"Order Status"
                },
                {
                    linkMain:"Delivery"
                },
                {
                    linkMain:"Returns"
                },
                {
                    linkMain:"Payment Options"
                },
            ]
        },
        {
            id:3,
            linkName:"Company",
            allLinks:[
                {
                    linkMain:"About Us"
                },
                {
                    linkMain:"News"
                },
                {
                    linkMain:"Carrers"
                }
            ]
        }
    ];

    return ( 
        <>
            <div className="footer-main h-[75vh] w-full bg-[#0D3E33] flex flex-col justify-center items-center overflow-hidden relative">
                <div className="top h-[95%] w-full">
                <div className="foot-left bg--300 h-full w-[35%] flex flex-col justify-center items-center relative top-2">
                        <div className="h-[60%] w-full flex flex-col justify-center items-center">
                        <img className="FooterLogo h-[100%] w-[60%] " src={logo} alt="" />
                        </div>
                        <div className="h-[40%] w-full flex flex-col justify-start items-center ">
                            <h1 className=" w-[60%] text-center text-[48px] text-[#F5F7F8] font-semibold">HopeRise</h1>
                            <p className="  text-center text-[#F5F7F8] w-[60%]">"Small acts, when multiplied by millions of people, can transform the world."</p>
                        </div>
                    </div>
                    <div className="foot-right h-full w-[80%] flex justify-center items-center">
                        {
                            footerArr.map((foot) => {
                                return(
                                    <>
                                        {/* <FooterLinks key={foot.id} linkName={foot.linkName} allLink={foot.allLinks}/> */}
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                        <h1 className="copyRights text-[#F5F7F8] font-extralight text-[0.8vw] z-[99] absolute bottom-6 left-10 ">© 2024 HopeRise, Inc. All rights reserved</h1>
                    <div className="bottom h-[10%] w-full flex justify-center items-start">
                        <div className="h-[1px] w-[95%] bg-[#F5F7F8]"></div>
                    </div>
                </div>
        </>
     );
}
 
export default Footer;