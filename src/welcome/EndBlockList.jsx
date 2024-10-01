import React from "react";
import Smallblock from './Smallblock'
import Smallblockimg from "./Smallblockimg";
import Text from "./Text";
import Subheading from "./Subheading";
import './Smallblockimg.css';

const EndBlockList = () => {
    return(
        <center>
        <div className="background-endblocklist">
    <div className="row-endblocklist">
        <Smallblock 
        heading = "For Dev"
        text1 = "How it works"
        text2 = "How to create a profile"
        text3 = "Find jobs"
        />
        <Smallblock 
        heading = "For Clients"
        text1 = "How it works"
        text2 = "How to post a job"
        text3 = "Find Dev"
        />
        <Smallblockimg heading = "Stay connected"/>
    </div>
    
        <Subheading text= "DEVLink" />
        <Text />
    </div>
    </center>
    )
}

export default EndBlockList;