import React from "react";
import { useState } from "react";
import "../User.css";
import { useNavigate } from "react-router-dom";
import { loginUserAction } from "../../../redux/actions/authActions";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    loginUserAction(loginForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="loginForm">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[400px] flex flex-col"
      >
        <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
          Login in to your account
        </h1>
        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
          <u>
            <a onClick={() => navigate("/register")}>
              No account? Create one here
            </a>
          </u>
        </h2>

        <label htmlFor="email" className="text-left">
          Username
        </label>
        <input
          type="text"
          id="email"
          name="username"
          value={loginForm.username}
          onChange={handleChange}
        />

        <label htmlFor="password" className="text-left">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginForm.password}
          onChange={handleChange}
        />

        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold">
          <u>
            <a href="#">Forgot your password?</a>
          </u>
        </h2>

        <button
          className="h-[40px] text-[#fff] font-semibold bg-[#2F3C7E] hover:bg-[#E4552D] mt-[50px]"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
