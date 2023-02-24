import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here
  // is better than directly setting `setValue(value + 1)`
}

function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const forceUpdate = useForceUpdate();

  const authenticate = (e) => {
    e.preventDefault();
    localStorage.setItem("loggedIn", true);
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
