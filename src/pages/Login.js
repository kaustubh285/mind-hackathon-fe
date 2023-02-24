import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";
import LoginSection from "../components/LoginSection";
import SignupSection from "../components/SignupSection";

function Login() {
  const navigate = useNavigate();
  React.useEffect(() => {
    let userLoggedIn = localStorage.getItem("loggedIn");
    if (userLoggedIn) navigate("/home");
  }, []);

  return (
    <div className='login-page'>
      <LoginSection />
      <SignupSection />
    </div>
  );
}

export default Login;
