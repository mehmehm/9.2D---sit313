import React from "react";
import './Card.css'
const Card = (props) =>{
    return <div className="column-list">
        <center>
       <img className="avatar" src = {props.avatar} alt = "avatar" /> 
       <h4>{props.name}</h4>
       <p>{props.desc}</p>
       </center>
    </div>
}

export default Card;