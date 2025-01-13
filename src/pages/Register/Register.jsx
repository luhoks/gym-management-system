import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import logo from "../../Assets/samplelogo.png";

const Login = () => {
  const [role, setRole] = useState("Accountant");
  const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate("/verification");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src= {logo} alt="EnergyA Logo" className="logo" />
        <h2>ADMIN LOG IN</h2>
        <input
          type="text"
          placeholder="Email address or username"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <select
          className="login-dropdown"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Receptionist">Receptionist</option>
          <option value="Accountant">Accountant</option>
        </select>
        <button className="login-button" onClick={handleLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
