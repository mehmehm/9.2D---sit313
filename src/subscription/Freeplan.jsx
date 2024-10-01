import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subplan.css";

const FreePlan = () => {
  const navigate = useNavigate();

  const subscribe = () => {
    // Navigate to the success page with the plan information
    navigate(`/success?plan=${encodeURIComponent("Free Plan")}`);
  };

  return (
    <div className="sub-plan-container">
      <h1>Free Plan Details</h1>
      <h3>FREE!</h3>
      <p>
        The Free Plan is ideal for individuals who want to explore basic features
        and get started without any cost.
      </p>
      <ul>
        <li>Access to basic features</li>
        <li>With ads</li>
        <li>Mainstream movies</li>
        <li>Limited Access</li>
        <li>Email support</li>
      </ul>
      <p>
        If you're ready to subscribe to a paid plan, click the button below to
        proceed to the payment page.
      </p>
      <button onClick={subscribe}>Subscribe now!</button>
    </div>
  );
};

export default FreePlan;
