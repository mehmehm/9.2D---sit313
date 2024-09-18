import React from "react";
import './Inputsmall.css';

const Inputsmall = (props) => {
  return (
    <div className="input-container">
      <form>
        <div className="align-vertical">
          <h4 className = "h4">{props.tag}</h4>
          <input
            type="text"
            id="input"
            name="input"
            placeholder={props.placeholder}
            style={{ width: props.size }} // Apply custom width
          />
        </div>
      </form>
    </div>
  );
};

export default Inputsmall;
