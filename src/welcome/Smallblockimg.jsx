import React from "react";
import './Smallblockimg.css'

const Smallblockimg = (props) =>{
    return (
    <div className="column-endblocklist">
        
       <h3 className="h3-endblocklist">{props.heading}</h3>
       <div className="row-endblocklist-img">
        <img className="icon" src= {require('./images/facebook.jpg')} alt = "facebook"></img>
        <img className="icon"src= {require('./images/instagram.jpg')} alt = "instagram"></img>
        <img className="icon" src= {require('./images/twitter.jpg')} alt = "twitter"></img>
       </div>
    </div>
    )
}

export default Smallblockimg;