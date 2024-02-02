import React, { useState, useEffect } from 'react'
import { CollegeData } from '../data/collegeData';
import { useParams } from 'react-router-dom';
import HighlightedText from '../components/HighlightedText';
import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';
import BetterNavBar from '../sections/BetterNavBar';
function Dashboard(){
    const [college, setCollege] = useState({
        name:"",
        id: "",
        established: "",
        monthly_rank: "",
        previous_ratings: [],
        most_liked_projects: [{}, {}, {}],
    })
    let {id} = useParams();
    useEffect(()=>{
        CollegeData.forEach((collegeObj)=>{
            if(collegeObj.id === id){
                setCollege({...collegeObj});
            }
        })
    }, [id])
    console.log(college);
    return (
        <div className='bg-white w-screen min-h-screen overflow-x-hidden overflow-y-auto pb-4'>
            <BetterNavBar/>
            <div className='text-center mt-5'>
                <span className={'text-md font-bold text-slate-500'}>{college.name}</span>
            </div>
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className='w-[65%] flex flex-col justify-between py-4'>
                    <div className='flex flex-col gap-2 justify-between mb-4'>
                        <div className='text-slate-700'>NAME: <span className='text-slate-500'>{college.name}</span></div>
                        <div className='text-slate-700'>ESTABLISHED: <span className='text-slate-500'>{college.established}</span></div>
                        <div className='text-slate-700'>DESCRIPTION: <span className='text-slate-500'>{college.description}</span></div>
                        <div className='text-slate-700 flex items-center gap-4'>RANK: <span className='bg-gradient-to-b from-[#343d68] via-[#343d68be] to-[#343d687c] bg-clip-text text-transparent text-2xl font-bold'>{college.monthly_rank}</span></div>
                        <div className='text-slate-700 flex items-center gap-4'>RATING: <span className='bg-gradient-to-b from-[#343d68] via-[#343d68be] to-[#343d687c] bg-clip-text text-transparent text-2xl font-bold'>{college.monthly_rating}</span></div>
                    </div>
                    <div className='w-full py-8'>
                        <div className='text-[60px] text-center bg-gradient-to-b from-[#343d68] via-[#343d68be] to-[#343d687c] bg-clip-text text-transparent'>PROJECTS</div>
                        <div style={{
                            backgroundImage: `url(${project1})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }} className="project-card mb-8">
                            <div className="project-number project-number-right">01</div>
                            <div className="project-content project-content-left">
                                <div className="project-skill-container"></div>
                                <h2 className="project-heading">{college.most_liked_projects[0].name}</h2>
                                <p className="project-about">{college.most_liked_projects[0].description}</p>
                                <div className="btn-grp">
                                    <div className="btn">Read More</div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            backgroundImage: `url(${project2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }} className="project-card mb-8">
                            <div className="project-number project-number-right">02</div>
                            <div className="project-content project-content-left">
                                <div className="project-skill-container"></div>
                                <h2 className="project-heading">{college.most_liked_projects[1].name}</h2>
                                <p className="project-about">{college.most_liked_projects[1].description}</p>
                                <div className="btn-grp">
                                    <div className="btn">Read More</div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            backgroundImage: `url(${project3})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }} className="project-card mb-8">
                            <div className="project-number project-number-right">03</div>
                            <div className="project-content project-content-left">
                                <div className="project-skill-container"></div>
                                <h2 className="project-heading">{college.most_liked_projects[2].name}</h2>
                                <p className="project-about">{college.most_liked_projects[2].description}</p>
                                <div className="btn-grp">
                                    <div className="btn">Read More</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='w-[30%] flex flex-col items-center'>
                    <div className='text-center text-slate-700 font-bold '>PAST RATING RECORD</div>
                    <div className='flex items-end gap-4'>
                        {
                            college.previous_ratings.map((bar, index) => {
                                return (
                                    <div key={index} className='flex flex-col items-center group cursor-pointer'>
                                        <div className='text-sm text-slate-500 group-hover:opacity-100 opacity-0'>{bar.rating}</div>
                                        <div style={{ height: `${bar.rating*4}px`, 
                                                      width: '50px',
                                                      background:'linear-gradient(45deg, #343d68, #343d68be, #343d687c)'}} className='rounded-md my-2 duration-200 mask'>
                                                        
                                                      </div>
                                        <div className='text-sm text-slate-500'>{bar.month}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;
