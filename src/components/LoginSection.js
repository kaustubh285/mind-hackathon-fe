import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

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
      <h1>Login</h1>
      <form className='login-box'>
        <div className='input-box'>
          <h4>Email</h4>
          <Input
            value={email}
            color='secondary'
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <input
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
        </div>
        <div className='input-box'>
          <h4>Password</h4>
          <Input
            color='secondary'
            value={password}
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type={"text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
        </div>
        <Button variant='outlined' color='secondary' onClick={authenticate}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginSection;
