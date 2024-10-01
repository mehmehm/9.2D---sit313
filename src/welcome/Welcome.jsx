import React from "react"; 
import './index.css';
import './NavBar.css'
import NavBar from './NavBar';
import Headerimg from "./Headerimg";
import './Headerimg.css';
import Subheading from "./Subheading";
import RoundButton from "./Roundbutton";
import FreeLanCardlist from "./FreeLanCardlist";
import Custcardlist from "./Custcardlist";
import Signup from "./Signup";
import EndBlockList from "./EndBlockList";
import Text from "./Text"

function Welcome(){
return(
    <div>
        <Headerimg />
        <Subheading text = "Featured Freelancers" />
        <FreeLanCardlist />
        <RoundButton text = "see more" />
        <Subheading text = "Featured Customers" />
        <Custcardlist />
        <RoundButton text = "See all customers" />
        <Signup />
        <EndBlockList />
        
    </div>   
)
}

export default Welcome;
