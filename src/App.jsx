import { useState } from 'react'
import './App.css'
import {Routes,Route,BrowserRouter } from "react-router-dom";
import Login from "./pages/login"
import  SignUp from "./pages/signup"
import  Landing  from './pages/landing';
import SingleProject from './pages/SingleProject';
import SingleProjectDark from './pages/SingleProjectDark';
import  Dashboard  from './pages/dashboard';
import Leaderboard from './pages/leaderboard';
import CreateProject from './pages/CreateProject';
import Colleges from "./pages/Colleges"
import Projects from './pages/Projects';
function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path='/login' element ={<Login/>}/>
        <Route exact path='/signup' element ={<SignUp/>}/>
        <Route exact path="/campus" element={<Colleges/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/projects/:id" element={<SingleProjectDark/>}/>
        <Route exact path='/campus/dashboard/:id' element ={<Dashboard/>}/>
        <Route exact path='/projects/add' element ={<CreateProject/>}/>
        <Route exact path="leaderboard" element={<Leaderboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
