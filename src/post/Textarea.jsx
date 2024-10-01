import React from "react";
import './Inputsmall.css';

const Textarea = (props) => {
    return (
        <div className="textarea-container">
            <form>
                <div className="row">
                    <div className="col-25">
                        <label className="tag" htmlFor="tag">{props.tag}</label>
                    </div>
                    <div className="col-75">
                        <textarea 
                            name={props.name} 
                            style={{ height: props.height, width: props.width }} 
                            placeholder={props.placeholder}
                            value={props.value}
                            onChange={props.change}
                        />
                        <br />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Textarea;
