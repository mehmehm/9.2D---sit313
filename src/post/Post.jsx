import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import "./Post.css";
import Heading from './Heading';
import Jobtype from './Jobtype';
import Inputsmall from './Inputsmall';
import Button from './Button';
import Questionpage from "./Questionpage";
import Articlepage from "./Articlepage";

function Post() {
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

  return (
    <div>
      <div className="align-right">
        <button onClick={() =>navigate("/welcome")} className="signout-button">Back to welcome page</button>
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

export default Post;
