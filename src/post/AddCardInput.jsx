import React from "react";
import './Inputsmall.css';
import { Form } from "semantic-ui-react";

const AddCardInput = (props) => {
  return (
    <div className="input-container">
      <form>
        <Form.Field>
          <div className="align-vertical">
            <h4>{props.tag}</h4>
            <input
              name={props.name} // Pass the name prop dynamically
              placeholder={props.placeholder}
              style={{ width: props.size }} // Apply custom width
              value={props.value}
              onChange={props.change} // Handle input changes
            />
          </div>
        </Form.Field>
      </form>
    </div>
  );
};

export default AddCardInput;
