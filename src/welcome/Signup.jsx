import React from "react";
import './Signup.css';

function Signup()
{
    return(
    <div class = "flex-container-signup">
    <hugeText>SIGN UP FOR OUR DAILY INSIDER!</hugeText>
    <smallText>
      <form action="/" method="post">
      <input className="input-signup" type="text" id="email_id" name="email_id" value="enter your email" />
      <input type="submit" value="Subscribe" />
      </form>
    </smallText>
  </div>
  )
}

export default Signup;