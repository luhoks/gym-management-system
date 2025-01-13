import React from 'react';
import './register.css';
import logo from "../../Assets/samplelogo.png";

const Verification = () => {
  return (
    <div className="verification-container">
      <div className="verification-box">
        <img src={logo} alt="EnerGya Logo" className="logo" />
        <p>A verification code was sent to your email. Enter the code below.</p>
        <div className="code-inputs">
          <input type="text" maxLength="1" className="code-input" />
          <input type="text" maxLength="1" className="code-input" />
          <input type="text" maxLength="1" className="code-input" />
          <input type="text" maxLength="1" className="code-input" />
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
};

export default Verification;