import React from "react"
import './Heading.css'

const Heading = (props) => {
    return(
        <div className="Header">
            <heading-font>{props.text}</heading-font>
        </div>
    )
}

export default Heading;