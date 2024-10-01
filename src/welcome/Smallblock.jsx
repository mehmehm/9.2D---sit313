import React from "react";
import './Smallblockimg'

const Smallblock = (props) =>{
    return (<div className="column-endblocklist">
       
       <h3 className="h3-endblocklist">{props.heading}</h3>
       <p>{props.text1}</p>
       <p>{props.text2}</p>
       <p>{props.text3}</p>

    </div>
    )
}

export default Smallblock;