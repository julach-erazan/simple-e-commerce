import React from "react";
import "../User.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { notificationType, openNotification } from "../../../redux/slices/notificationSlice";
import { useFormik } from "formik";
import { formSchema } from "../../../Schemas/RegistationSchema";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: formSchema, // Use Yup schema for validation
    onSubmit: async (values) => {
      try {
        // Simulate API call to register user
        console.log("Registering user with values:", values);
        dispatch(
          openNotification({
            type: notificationType.SUCCESS,
            message: "Registration Successful",
            description: "Successfully saved user details",
          })
        );
        navigate("/login");
      } catch (error) {
        dispatch(
          openNotification({
            type: notificationType.ERROR,
            message: "Registration Unsuccessful",
            description: "An error occurred while saving user details",
          })
        );
      }
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      id="registerForm"
      className="w-[90%] md:w-[400px] flex flex-col"
    >
      <h1 className="text-[30px] text-[#2F3C7E] text-center font-bold mb-[20px]">
        Create an account
      </h1>
      <h2 className="text-[15px] text-[#E4552D] text-center font-semibold mb-[20px]">
        <u>
          <a className="cursor-pointer" onClick={() => navigate("/login")}>
            Already have an account? Log in instead!
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
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.userName}</div>
      ) : null}

      {/* First Name */}
      <label htmlFor="firstName" className="text-left">
        First name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.firstName}</div>
      ) : null}

      {/* Last Name */}
      <label htmlFor="lastName" className="text-left">
        Last name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.lastName}</div>
      ) : null}

      {/* Email */}
      <label htmlFor="email" className="text-left">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.email}</div>
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
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.password}</div>
      ) : null}

      {/* Confirm Password */}
      <label htmlFor="confirmPassword" className="text-left">
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.confirmPassword}</div>
      ) : null}

      {/* Terms and Conditions */}
      <h2 className="text-[15px] text-[#2f3c7e] font-bold">
        <input
          type="checkbox"
          className="h-[15px] m-0 mr-[10px] text-[15px]"
          name="isAgreed"
          checked={formik.values.isAgreed}
          onChange={formik.handleChange}
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
      {formik.touched.isAgreed && formik.errors.isAgreed ? (
        <div className="error pb-[5px] text-[#ed4337] text-[13px]"><ExclamationCircleOutlined /> {formik.errors.isAgreed}</div>
      ) : null}

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
