import React from "react";
import Navbar from "../Navbar.jsx"
import { Outlet } from "react-router-dom";

function Homepage() {

    
    return(
        <div>
         
            <Outlet />
        </div>       
    );
}

export default Homepage;