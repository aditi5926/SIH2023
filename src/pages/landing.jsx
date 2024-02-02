import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import HighlightedText from "../components/HighlightedText";
import girlStudying from "../assets/girlStudying.mp4";
import Line from "../components/Line";
import logo1 from "../assets/fi-sr-badge.svg";
import logo2 from "../assets/fi-sr-diamond.svg";
import logo3 from "../assets/fi-sr-graduation-cap.svg";
import logo4 from "../assets/fi-sr-fox.svg";
import timeLineImage from "../assets/timeLineAsset.jpg";
import teamwork from "../assets/teamwork.mp4"
import { TypeAnimation } from 'react-type-animation';
import { FooterLinks } from "../data/footerdata";
import youtube from '../assets/youtube.svg'
import facebook from '../assets/facebook.svg'
import google from '../assets/google.svg'
import twitter from '../assets/twitter.svg'
import BetterNavBar from "../sections/BetterNavBar";
function Landing() {
  return (
    <div className="bg-white w-screen min-h-screen overflow-x-hidden">
      <BetterNavBar/>
        <div className="flex justify-center items-center py-12">
        	<Link to="/signup" className="group text-xl flex justify-center items-center gap-2 text-gray-700 bg-[#ffd60a] py-[12px] px-[28px] rounded-md duration-200 hover:scale-95 hover:text-gray-700">Learn now <FaArrowRight className="duration-200 group-hover:translate-x-2 text-gray-700 translate-y-[2px]" /></Link>
        </div>
        <div className="w-11/12 mx-auto">
        	<div className="text-center text-slate-800 text-3xl font-semibold">
        	  	Empowering Education through Innovation:{" "}
        	  	<HighlightedText>Uniting Minds, Sharing Insights</HighlightedText>
        	</div>
        	<div className="text-center text-slate-700">
        	  	A place which allows students to explore and learn from projects
        	  	conducted by their peers in different institutions, promoting
        	  	cross-pollination of ideas and collaborative learning.
        	</div>
        	<div className="flex justify-center item-center">
        	  	<video
        	    	autoPlay
        	    	loop
        	    	muted
        	    	style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 10px 50px" }}
        	    	className="w-full my-12"
        	  	>
        	    <source src={girlStudying}></source>
        	  	</video>
        	</div>
    	</div>
		<div className="flex w-9/12 mx-auto items-center justify-between mt-[3.25rem]">
            <div className="flex flex-col justify-between relative">
                <div className="flex items-center gap-[1.25rem]">
                    <div style={{boxShadow: '0px 0px 62px 0px rgba(0, 0, 0, 0.12)'}}  className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center">
                        <img src={logo1}></img>
                    </div>
                    <div>
                        <div className="text-slate-800 font-bold text-lg">Peer Learning</div>
                        <div className="text-slate-700 text-sm">peer-to-peer learning by exploring the projects.</div>
                    </div>
                </div>
                <Line/>
                <div className="flex items-center gap-[1.25rem]">
                    <div style={{boxShadow: '0px 0px 62px 0px rgba(0, 0, 0, 0.12)'}} className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center">
                    	<img src={logo2}></img>
                    </div>
                    <div>
                        <div className="text-slate-800 font-bold text-lg">Innovation Promotion</div>
                        <div className="text-slate-700 text-sm">showcase innovative projects to move up in the rankings.</div>
                    </div>
                </div>
                <Line/>
                <div className="flex items-center gap-[1.25rem]">
                    <div style={{boxShadow: '0px 0px 62px 0px rgba(0, 0, 0, 0.12)'}} className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center">
                        <img src={logo3}></img>
                    </div>
                    <div>
                        <div className="text-slate-800 font-bold text-lg">Centralized Knowledge Repository</div>
                        <div className="text-slate-700 text-sm">Creation of easily accessible repository.</div>
                    </div>
                </div>
                <Line/>
                <div className="flex items-center gap-[1.25rem]">
                    <div style={{boxShadow: '0px 0px 62px 0px rgba(0, 0, 0, 0.12)'}} className="w-[3.25rem] h-[3.25rem] rounded-full bg-white flex items-center justify-center">
                        <img src={logo4}></img>
                    </div>
					<div>
                        <div className="text-slate-800 font-bold text-lg">Plagiarism Detection</div>
                        <div className="text-slate-700 text-sm">robust plagiarism detection system that ensures the authenticity of each submissions.</div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div style={{
                                borderRadius: '750px',  
                                opacity: '0.6',
                                background: 'var(--gradient-03, linear-gradient(118deg, #9CECFB -9.12%, #65C7F7 48.59%, #0052D4 106.3%))',
                                filter: 'blur(34px)'
                            }} className="w-[750px] h-[480px] absolute -right-10 top-12 -z-1">
                </div>
                <img src={timeLineImage} width={600} className="relative aspect-square rounded-md z-1"></img>
            </div>
        </div>
		<div className="w-3/4 mx-auto flex flex-col items-center justify-between mt-32 gap-2">
			<HighlightedText>
				<TypeAnimation
					sequence={[
					'Your swiss knife for showcasing your creativity',
					1000, 
					'Your swiss knife for Peer Learning',
					1000,
					'Your swiss knife for Resource Sharing',
					1000,
					'Your swiss knife for Cross-Functional Research',
					1000
				]}
					wrapper="span"
					speed={10}
					cursor={true}
					style={{ fontSize: '2em', display: 'inline-block' }}
					repeat={Infinity}
				/>
			</HighlightedText>
			<div className="text-slate-500 text-center text-base">
				Innovation is at the heart of educational progress, and students in Indian universities and colleges invest significant effort in conducting projects as part of their academic requirements. To harness this wealth of knowledge and promote innovation, we propose the creation of a "National Academic Innovation Hub." This integrated platform will serve as a groundbreaking initiative to unify the project works undertaken by students at various levels within Technical, Higher Educational Institutes, and Universities across India.	
			</div>
		</div>
		<div style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 10px 50px" }} className="my-12 w-11/12 mx-auto">
			<video
				autoPlay
				muted
				loop
			>
				<source src={teamwork}></source>
			</video>
		</div>
		<div className="bg-[#161D29] text-[#424854] flex justify-around py-4 ">
			<div className="flex flex-col gap-4 items-center">
				<div className="text-[#AFB2BF] font-bold text-lg">EduSpark</div>
				<div>About</div>
				<div>Contact</div>
				<div>Careers</div>
				<div>Affiliates</div>
				<div className="flex items-center justify-between gap-4">
					<img src={facebook}/>
					<img src={youtube}/>
					<img src={google}/>
					<img src={twitter}/>
				</div>
			</div>
			{
				FooterLinks.map((FooterLinksObj, index)=>{
					return (<div key={index} className="flex flex-col gap-4">
						<div className="text-[#AFB2BF] font-bold">{FooterLinksObj.title}</div>
						<div>
						{
							FooterLinksObj.links.map((link, index)=>{
								return (<div className="capitalize" key={index}>
									{
										link.title
									}
								</div>)
							})
						}
						</div>
					</div>)
				})
			}
		</div>
	</div>
  );
}
export default Landing;
