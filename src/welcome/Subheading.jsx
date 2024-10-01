import React from "react"
import './Subheading.css'

const Subheading = (props) =>{
    return(
        <center>
            <br></br>
            <font>{props.text}</font>
            <br></br>
            <br></br>
        </center>     
    )
}

export default Subheading;