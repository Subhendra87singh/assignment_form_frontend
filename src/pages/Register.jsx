import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { registerRoute } from "../utils/APIRoutes";
import { Link } from "react-router-dom";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleValidation = () => {
    const { email, password } = values;
    if (email === "" || password === "") {
      alert("Both fields are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        const { name, email, password } = values;
        const response = await axios.post(
          registerRoute,
          {
            name,
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          alert(response.data.message);
          Cookies.set("token", response.data.token, { expires: 7 });
          console.log(response.data.token);
        } else {
          alert(response.data.error);
        }
      } catch (error) {
        console.error(error);
        alert("Something went wrong");
      }
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-1/3 h-[600px] bg-slate-300 rounded-md">
        <h1 className="text-center text-4xl text-black font-medium mt-5">
          Sign up
          <hr className="underline border-t-2 border-black w-1/2 mt-2 mx-auto" />
        </h1>

        <div className="w-[100%] mt-10 flex justify-between px-5">
          <form className="mt-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={onChange}
              placeholder="Enter Your Name"
              className="w-full p-3 bg-slate-300 border-b-2 border-black outline-none placeholder:font-medium placeholder:text-gray-400"
            />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={onChange}
              placeholder="Enter Your Email"
              className="w-full mt-6 p-3 bg-slate-300 border-b-2 border-black outline-none placeholder:font-medium placeholder:text-gray-400"
            />
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
              placeholder="Enter Your Password"
              className="w-[100%] mt-6 p-3 bg-slate-300 border-b-2 border-black outline-none placeholder:font-medium placeholder:text-gray-400"
            />
            <button
              className="w-full bg-black text-white py-4 mt-9 rounded-full"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
        <h4 className="mx-5 mt-6">
          If you already have an account?{" "}
          <Link to={"/login"} className="text-blue-400">
            Login
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
