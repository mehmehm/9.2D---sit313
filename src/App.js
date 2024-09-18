import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './routes/Homepage'
import Loginpage from "./Loginpage";
import Signuppage from "./Signuppage";
import Welcome from "./welcome/Welcome";


function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Homepage />} >
      <Route path = 'login' element = {<Loginpage />} />  
      <Route path = 'signup' element = {<Signuppage />} />
      <Route path = 'welcome' element = {<Welcome />} />
      </Route>
    </Routes>
    
  );
}

export default App;
