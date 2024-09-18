import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./Welcome.css";
import Heading from './Heading';
import Jobtype from './Jobtype';
import Inputsmall from './Inputsmall';
import Button from './Button';
import Questionpage from "./Questionpage";
import Articlepage from "./Articlepage";

function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  const [jobType, setJobType] = useState('Question');

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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Sign out error: ", error);
    }
  };
  

  return (
    <div>
      <div className="align-right">
        <button onClick={handleSignOut} className="signout-button">Sign out</button>
      </div>
      <div>
      <Heading text="New jobs" />
      <Jobtype setJobType={setJobType} currentJobType={jobType} />

      {jobType === 'Article' && ( 
        <Articlepage />
      )}
      
      {jobType === 'Question' && (  
        <Questionpage />
      )}
      
     
    </div>

    </div>
  );
}

export default Welcome;
