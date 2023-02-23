import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();

  const checkConditions = () => {
    if (confPassword !== password) return false;
    if (age < 18) return false;
    if (
      name === "" ||
      age === "" ||
      email === "" ||
      password === "" ||
      confPassword === ""
    )
      return false;

    return true;
  };
  const authenticate = (e) => {
    e.preventDefault();
    if (checkConditions) {
      console.log({ name, email, password, age });
      // navigate("/home");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div className='signup-section'>
      <h2 className='signup-heading'>Join us</h2>
      <form className='signup-box'>
        <div className='input-box'>
          <h4>Name</h4>
          <input
            type={"text"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <h4>Email</h4>
          <input
            type={"text"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <h4>Age</h4>
          <input
            type={"number"}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <h4>Password</h4>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='input-box'>
          <h4>Password</h4>
          <input
            type={"password"}
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <button onClick={authenticate}>Sign up</button>
      </form>
    </div>
  );
}

export default SignupSection;
