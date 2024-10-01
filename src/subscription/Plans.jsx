import React from "react";
import { useNavigate } from "react-router-dom";
import "./Plans.css";

const Plans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Free Plan",
      price: "0",
      description: "This plan is perfect for individuals who are just getting started.",
      features: ["Basic Features", "Limited Access", "Email Support"],
      link: "free-plan", // Add the link to the Free Plan
    },
    {
      title: "Pro Plan",
      price: "10",
      description: "Ideal for professionals who want more features and control.",
      features: ["All Free Plan Features", "Unlimited Access", "Priority Support"],
      link: "pro-plan"
    },
    {
      title: "Premium Plan",
      price: "20",
      description: "For businesses and teams that need advanced features.",
      features: ["All Pro Plan Features", "Team Collaboration", "24/7 Support"],
      link: "premium-plan"
    },
  ];

  return (
    <div className="welcome-background">
    <div className="pricing-container">
      <h1>Choose Your Plan</h1>
      <div className="plans">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <h2>{plan.title}</h2>
            <p className="price">${plan.price}/month</p>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            {plan.link ? (
              <button onClick={() => navigate(plan.link)}>View Plan</button>
            ) : (
              <button>Select Plan</button>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/welcome")} >Back to welcome page</button>
    </div>
    </div>
  );
};

export default Plans;
