import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './routes/Homepage';
import Loginpage from "./Loginpage";
import Signuppage from "./Signuppage";
import Post from "./post/Post";
import Plans from "./subscription/Plans";
import FreePlan from "./subscription/Freeplan";
import Proplan from "./subscription/Proplan";
import Premiumplan from "./subscription/Premiumplan";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Success from "./subscription/Success";
import Navbar from "./Navbar";
import Welcome from "./welcome/Welcome";

// Initialize Stripe with the public API key once
const stripePromise = loadStripe('pk_test_51Q4FofFf1YllDHeUTCvN8eWsMUBLFoP6iOToUk8diiptUuAEZ7N6JHgNSL0EKPIQGelBp18OegydGxDUjrUen2yr00jQlr4OgI');

function App() {
  return (
    
    <Elements stripe={stripePromise}> {/* Wrap all routes with Elements */}
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Loginpage />} />
        <Route path="signup" element={<Signuppage />} />
        <Route path="welcome" element = {<Welcome />} />
        <Route path="login/post" element={<Post />} />
        <Route path="login/plans" element={<Plans />} />
        <Route path="login/plans/free-plan" element={<FreePlan />} />
        <Route path="login/plans/pro-plan" element={<Proplan amount={10} priceId="price_1Q4ersFf1YllDHeUfzGHf30d" />} />
        <Route path="login/plans/premium-plan" element={<Premiumplan amount={20} priceId="price_1Q4gjKFf1YllDHeU11heMhCh" />} />
        <Route path="/success" element={<Success />} />
        <Route path="/canceled" element={<h1>Payment Canceled</h1>} />
      </Routes>
    </Elements>
  );
}

export default App;
