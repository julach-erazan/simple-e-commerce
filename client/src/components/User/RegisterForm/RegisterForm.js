import React, { useState } from "react";
import "../User.css";
import { registerUser } from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  // Logging form data
  const title = formData.get("title");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");

  fetch("https://fakestoreapi.com/users", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      title: title,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.id === 1) {
        alert("Registered Successfully!");
      } else {
        alert("Internal Server Error!");
      }
      //Reset form
      document.getElementById("registerForm").reset();
    });
};
const initialState = {
  userName: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState(initialState);
  const [isAgreed, setIsAgreed] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle error messages
    // if (isAgreed)
    await registerUser(registerForm)
    .then(_ => {
      navigate("/login");
    })
    .catch(e => {

    })
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="registerForm"
      className="w-[90%] md:w-[400px] flex flex-col"
    >
      <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
        Create an account
      </h1>
      <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
        <u>
          <a className="cursor-pointer" onClick={() => navigate("/login")}>Already have an account? Log in instead!</a>
        </u>
      </h2>

      <label htmlFor="firstName" className="text-left">
        Username
      </label>
      <input
        type="text"
        name="userName"
        value={registerForm.userName}
        onChange={handleChange}
      />

      <label htmlFor="firstName" className="text-left">
        First name
      </label>
      <input
        type="text"
        name="firstName"
        value={registerForm.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName" className="text-left">
        Last name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={registerForm.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email" className="text-left">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={registerForm.email}
        onChange={handleChange}
      />

      <label htmlFor="password" className="text-left">
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={registerForm.password}
        onChange={handleChange}
      />

      <h2 className="text-[15px] text-[#2f3c7e] font-bold">
        <input
          type="checkbox"
          className="h-[15px] m-0 mr-[10px] text-[15px]"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        I agree to The Nines{" "}
        <a href="#" className="hover:text-[#E4552D] hover:underline">
          Terms and Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="hover:text-[#E4552D] hover:underline">
          Privacy Policy
        </a>
        .
      </h2>

      <button
        className="h-[40px] text-[#fff] font-semibold bg-[#2F3C7E] hover:bg-[#E4552D] mt-[50px]"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default RegisterForm;
