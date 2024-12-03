import React from "react";
import Footer from "../../../components/Footer/Footer";
import RegisterForm from "../../../components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="w-full min-w-[350px] flex flex-col justify-center items-center pt-[100px]">
      <RegisterForm/>
      <Footer/>
    </div>
  );
};

export default Register;
