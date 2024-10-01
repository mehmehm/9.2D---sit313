import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

function Navbar(){

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleSubClick = () => {
        navigate('/login/plans');
    }

    const handlePostClick = () => {
        navigate('/login/post');
    }

    return(
        <div className="background">
            <div className="navbar-left">
                <h3 className="font-color">DEV@DEAKINAPP</h3>
                <input className="nav-searchbar-color" type="text" id="input" name="input" placeholder="search" size ="150" />
            </div>
            <div className="navbar-right">
                <a className="link" onClick={handlePostClick}>Post</a>
                <a className="link" onClick={handleSubClick}>Subsription plan</a>
                <a className="link" onClick={handleLoginClick}>Login</a>
            </div>
        </div>
    )
}

export default Navbar;