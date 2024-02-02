import {MdLeaderboard} from 'react-icons/md'
import ConfettiExplosion from 'react-confetti-explosion'
import { useEffect, useState } from 'react';
import { LeaderboardData } from '../data/leaderboardData';
import {GiMedal} from 'react-icons/gi';
import decoration2 from '../assets/decoration2.png';
import BetterNavBar from '../sections/BetterNavBar';
function Leaderboard(){
    const [isExploding, setIsExploding] = useState(false);
    useEffect(()=>{
        setIsExploding(true);
    },[])
    return(<div className="w-screen min-h-screen">
        <BetterNavBar/>
        <div className='w-full flex justify-around'>
            {
                isExploding && <ConfettiExplosion particleCount={200} colors={['#33FF5E','#33FFFC','#FCFF33','#8D33FF']} particleSize={8} duration={2500}/>
            }
            {
                isExploding && <ConfettiExplosion particleCount={200} colors={['#33FF5E','#33FFFC','#FCFF33','#8D33FF']} particleSize={8} duration={2500}/>
            }
        </div>
        <div className='flex flex-col justify-center items-center w-full min-h-screen'> 
            <div className="text-2xl text-slate-600 mx-auto gap-2 flex items-center mb-2">LEADERBOARD <MdLeaderboard/></div>
            <div style={{
                boxShadow: '0 0 0 2px #1FA2FF, 8px 8px 0 0 #12D8FA'
            }} className="flex flex-col justify-between py-2 px-2 relative">
                <table className>
                    <tr>
                        <td className='pb-4 pr-4 bg-gradient-to-b font-bold from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-lg'>RANK</td>
                        <td className='pb-4 pr-4 bg-gradient-to-b font-bold from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-lg'>NAME</td>
                        <td className='pb-4 pr-4 bg-gradient-to-b font-bold from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-lg'>CURRENT</td>
                        <td className='pb-4 pr-4 bg-gradient-to-b font-bold from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-lg'>AVERAGE</td>
                        <td className='pb-4 pr-4 bg-gradient-to-b font-bold from-[#1FA2FF] to-[#12D8FA] bg-clip-text text-transparent text-lg'>HIGHEST</td>
                    </tr>
                    {
                        LeaderboardData.map((campus)=>{
                            return(
                                <tr>
                                    <td className='text-slate-600 pr-4 flex items-center gap-2'>{campus.rank} {(campus.rank === 1 || campus.rank === 2  || campus.rank === 3) ? <GiMedal/> : ''}</td>
                                    <td className='text-slate-600 pr-4'>{campus.name}</td>
                                    <td className='text-slate-600 pr-4'>{campus.rating}</td>
                                    <td className='text-slate-600 pr-4'>{campus.avg_rating}</td>
                                    <td className='text-slate-600 pr-4'>{campus.highest_rating}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                <img className='animate-ping absolute -top-16 -left-16' src={decoration2}/>
                <img className='animate-ping absolute -bottom-16 -left-16' src={decoration2}/>
                <img className='animate-ping absolute -bottom-16 -right-16' src={decoration2}/>
                <img className='animate-ping absolute -top-16 -right-16' src={decoration2}/>
            </div>
        </div>
    </div>)
}
export default Leaderboard;