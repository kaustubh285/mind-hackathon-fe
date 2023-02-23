import React from "react";
import "../assets/login.css";
import LoginSection from "../components/LoginSection";
import SignupSection from "../components/SignupSection";

function Login() {
  return (
    <div className='login-page'>
      <LoginSection />
      <SignupSection />
    </div>
  );
}

export default Login;
