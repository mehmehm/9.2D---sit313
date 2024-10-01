import React from "react";
import { useNavigate } from "react-router-dom";
import "./Subplan.css";

const Proplan = ({ amount, priceId }) => {
  

  const handleCheckout = async () => {
    const stripe = await window.Stripe('pk_test_51Q4FofFf1YllDHeUTCvN8eWsMUBLFoP6iOToUk8diiptUuAEZ7N6JHgNSL0EKPIQGelBp18OegydGxDUjrUen2yr00jQlr4OgI');
    
    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        { price: priceId, quantity: 1 },  // Use the dynamic priceId prop
      ],
      mode: 'payment',  // One-time payment mode
      successUrl: `${window.location.origin}/success?plan=${"pro plan"}`,
      cancelUrl: `${window.location.origin}/canceled`,
    });

    if (error) {
      console.error("Stripe Checkout error:", error);
    }
  };

  return (
    <div className="sub-plan-container">
      <h1>Pro Plan Details</h1>
      <h3>${amount}</h3>
      <p>
        The Pro plan is for individuals who want to have access to more exclusive shows and an add-free experience for an affordable cost.
      </p>
      <ul>
        <li>All free plan features</li>
        <li>Unlimited access</li>
        <li>Exclusive movies and shows</li>
        <li>Add-free</li>
        <li>Email support</li>
      </ul>
      <p>
        If you're ready to subscribe to the Pro plan, click the button below to
        proceed to the payment page.
      </p>
      <button onClick={handleCheckout}>Go to Payment Page</button>
    </div>
  );
};

export default Proplan;
