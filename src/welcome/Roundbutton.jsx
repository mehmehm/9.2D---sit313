import React from "react";
import './Roundbutton.css';

const Roundbutton = (props) =>
{
    return(
        <div>
        <br></br>
        <center>
            <roundbutton class="roundbutton">{props.text}</roundbutton> 
        </center>   
        <br></br>  
        </div> 
    )
}

export default Roundbutton;