import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    return(
        <div className="background">
            <div className="navbar-left">
                <h3>DEV@DEAKINAPP</h3>
                <input type="text" id="input" name="input" placeholder="search" size ="150" />
            </div>
            <div className="navbar-right">
                <a className="link">Post</a>
                <a className="link" onClick={handleLoginClick}>Login</a>
            </div>
        </div>
    )
}

export default Navbar;