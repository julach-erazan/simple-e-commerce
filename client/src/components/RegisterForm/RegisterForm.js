import React from 'react'

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

const RegisterForm = () => {
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
            <a href="/login?data=1">Already have an account? Log in instead!</a>
          </u>
        </h2>

        <label htmlFor="title" className="text-left">
          Social title
        </label>
        <div className="flex items-center">
          <input
            type="radio"
            id="title"
            name="title"
            value="Mr."
            className="m-0"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Mr.
          </label>

          <input
            type="radio"
            id="title"
            name="title"
            value="Ms."
            className="m-0 ml-[10px]"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Ms.
          </label>

          <input
            type="radio"
            id="title"
            name="title"
            value="Miss."
            className="m-0 ml-[10px]"
          />
          <label htmlFor="title" className="ml-[10px] mr-[20px]">
            Miss.
          </label>
        </div>

        <label htmlFor="firstName" className="text-left">
          First name
        </label>
        <input type="text" id="firstName" name="firstName" />

        <label htmlFor="lastName" className="text-left">
          Last name
        </label>
        <input type="text" id="lastName" name="lastName" />

        <label htmlFor="email" className="text-left">
          Email
        </label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password" className="text-left">
          Password
        </label>
        <input type="password" id="password" name="password" />

        <h2 className="text-[15px] text-[#2f3c7e] font-bold">
          <input
            type="checkbox"
            className="h-[15px] m-0 mr-[10px] text-[15px]"
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
  )
}

export default RegisterForm
