import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import './Headerimg.css';

function Headerimg ()
{
    const navigate = useNavigate();
    const auth = getAuth();

    // Check if the user is authenticated
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
            // If no user is authenticated, redirect to the login page
            navigate("/login");
        }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, [auth, navigate]);

    const signOut = async () => {
        try {
        await signOut(auth);
        navigate("/login");
        } catch (error) {
        console.error("Sign out error: ", error);
        }
    };
    return (
        <div className='header-container'>
            <img src= {require('./images/headerimg.jpg')} alt = "header image"></img>
            <button className='header-button' onClick = {signOut}>Sign out</button>
        </div>   
    );
}

export default Headerimg;