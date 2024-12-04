import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../../redux/actions/authActions";
import {
  notificationType,
  openNotification,
} from "../../../redux/slices/notificationSlice";
import { formSchema } from "../../../Schemas/RegistationSchema";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import "../User.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: formSchema, // Use Yup schema for validation
    onSubmit: async (values, { resetForm }) => {
      try {
        await loginUserAction(values); // Simulate login API call
        dispatch(
          openNotification({
            type: notificationType.SUCCESS,
            message: "Login Successful",
            description: "You are now logged in!",
          })
        );
        resetForm(); // Clear the form
        navigate("/dashboard"); // Redirect to dashboard
      } catch (error) {
        dispatch(
          openNotification({
            type: notificationType.ERROR,
            message: "Login Error",
            description: "Username or password invalid!",
          })
        );
      }
    },
  });

  return (
    <div className="loginForm">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[90%] md:w-[400px] flex flex-col"
      >
        <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
          Login to your account
        </h1>
        <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
          <u>
            <a className="cursor-pointer" onClick={() => navigate("/register")}>
              No account? Create one here
            </a>
          </u>
        </h2>

        {/* Username */}
        <label htmlFor="userName" className="text-left">
          Username
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={formik.values.userName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div className="error pb-[5px] text-[#ed4337] text-[13px]">
            <ExclamationCircleOutlined /> {formik.errors.userName}
          </div>
        ) : null}

        {/* Password */}
        <label htmlFor="password" className="text-left">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error pb-[5px] text-[#ed4337] text-[13px]">
            <ExclamationCircleOutlined /> {formik.errors.password}
          </div>
        ) : null}

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
