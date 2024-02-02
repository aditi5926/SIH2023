import {React, useState} from 'react';
import background from '../assets/login.jpg';
import {Link} from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ButtonLoader from '../components/buttonLoader';
import ButtonError from '../components/buttonError';
import {AiFillEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {useNavigate} from "react-router-dom"
const SignupPage = () => {
    const [formData, setFormData] = useState({type:"student", username:"",email:"", password:""});
    const [isClicked,setisClicked] = useState(false);
    const [emptyError,setEmptyError] = useState(true);
    const [showPassword, setshowPassword] = useState(false);
    const navigate = useNavigate();
    const submitHandler = (event) => {
        // if(event.target.id === 'Google_Button') console.log(event.target.id);
        event.preventDefault();
        var check = false;
        if (formData['email'] == '' || formData['password'] == '') {
            setEmptyError(true);
            check = true;
        } 
        else {
            setEmptyError(false);
        }
        setisClicked(true);
        setTimeout(()=>{
            setisClicked(false);
            if(!check) navigate("/campus");
        },2000);
    }
    const changeHandler = (event)=>{
        setFormData((prev)=>{
            return {
                ...prev,
                [event.target.name] : event.target.value
            }
        })
    }
    
    // console.log(formData);
    return ( 
        <div className='relative w-screen h-screen'>
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(0.2)',
                }}
                className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
            >
            </div>
            
            <div className='absolute flex justify-center items-center inset-0'>
                <div style={{
                        backdropFilter: 'blur(35px)'
                    }}  className='w-[25%] min-w-[500px] aspect-[9/10] bg-white/10 rounded-md flex flex-col items-center justify-center gap-4 max-sm:min-w-[250px] max-md:p-5'>
                    <p className='text-white text-center text-[1.25rem]'>WELCOME </p>
                    <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-4 p-5'>
                        <div className='text-white flex items-center gap-4 bg-slate-400/20 px-2 py-2 rounded-full'>
                            <div onClick={()=>{setFormData((prev)=>{return {...prev,['type']: 'student'}})}} className={`px-4 py-4 rounded-full cursor-pointer duration-200 ${formData.type === 'student' ? 'bg-black/25' : ''}`}>
                                STUDENT
                            </div>
                            <div onClick={()=>{setFormData((prev)=>{return {...prev,['type']: 'moderator'}})}} className={`px-4 py-4 rounded-full cursor-pointer duration-200 ${formData.type === 'moderator' ? 'bg-black/25' : ''}`} >
                                MODERATOR
                            </div>
                        </div>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2 ' name="username" id="username" type='text' placeholder='spongebob squarepants' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2 ' name="email" id="email" type='email' placeholder='sqpants@gmail.com' onChange={changeHandler}></input>
                        </div>
                        <div className='w-full relative'>
                            <input className='rounded-md w-full h-10 bg-white focus:outline-none text-black px-2' name="password" id="password" type='password' placeholder='wh1t3_p4nt$' onChange={changeHandler}></input>
                            <div className='absolute right-4 cursor-pointer bottom-[0.55rem] text-slate-500 text-xl' onClick={()=>{
                                                                                                                                        setshowPassword(!showPassword);
                                                                                                                                        document.getElementById('password').type = showPassword ? 'password' : 'text';
                                                                                                                                    }}>
                                {
                                    showPassword ? <AiOutlineEyeInvisible/> : <AiFillEye/> 
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                        {(isClicked && emptyError) ? <ButtonError text = {"CREATE ACCOUNT"}/> : <button className='default w-full focus:outline-none' disabled={isClicked}>
                                {!isClicked && `CREATE ACCOUNT`}
                                {isClicked && <ButtonLoader/>}
                            </button>}
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='w-[45%] h-[2px] bg-black'></div>
                            <div>OR</div>
                            <div className='w-[45%] h-[2px] bg-black'></div>
                        </div>
                        <div className='w-full'>
                            <button className='default w-full flex items-center justify-center gap-8 max-sm:text-xs' id='Google_Button'>
                                    <FcGoogle style={{fontSize:'2rem'}} /> SIGN UP WITH GOOGLE
                            </button>
                        </div>
                        <div className='w-full flex justify-center items-center gap-2 max-sm:text-xs'>
                            <div>ALREADY HAVE AN ACCOUNT?</div>
                            <Link to='/login'>LOGIN HERE</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
