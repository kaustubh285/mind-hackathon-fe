import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authenticate = (e) => {
    e.preventDefault();
    console.log({ email, password });
    navigate("/home");
  };
  return (
    <div className='login-section'>
      <h2>Login</h2>
      <form className='login-box'>
        <div className='input-box'>
          <h4>Email</h4>
          <input
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <h4>Password</h4>
          <input
            type={"text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={authenticate}>Login</button>
      </form>
    </div>
  );
}

export default LoginSection;
