import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Plans.css";

const Success = () => {

    const navigate = useNavigate();
    const location = useLocation();

  // Get the plan from query parameters
    const query = new URLSearchParams(location.search);
    const plan = query.get('plan');

    return(
        <div className="welcome-background">
            <div className="success-container">
                <h1>Subscription Success!</h1>
                <h2>You have been subscribed to the {plan}</h2>
                <button onClick={() => navigate("/welcome")}>Go back to homepage</button>
            </div>
        </div>
    );
}

export default Success;