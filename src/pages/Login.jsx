import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { loginRoute } from "../utils/APIRoutes";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleValidation = () => {
    const { email, password } = values;
    if (!email || !password) {
      alert("Email and password are required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (handleValidation()) {
      try {
        const { email, password } = values;
        const response = await axios.post(
          loginRoute,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);

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
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-1/3 h-[600px] bg-slate-300 rounded-md shadow-md">
          <h1 className="text-center text-4xl text-black font-medium mt-5">
            Sign in
            <hr className="underline border-t-2 border-black w-1/2 mt-2 mx-auto" />
          </h1>

          <div className="w-full mt-8 flex justify-between px-5">
            <form onSubmit={handleSubmit} className="w-full mt-6">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Enter Your Email"
                className="w-full mt-6 p-3 bg-slate-300 border-b-2 border-black outline-none placeholder:font-medium placeholder:text-gray-400"
                required
              />
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                placeholder="Enter Your Password"
                className="w-full mt-6 p-3 bg-slate-300 border-b-2 border-black outline-none placeholder:font-medium placeholder:text-gray-400"
                required
              />
              <button
                className="w-full bg-black text-white py-4 mt-9 rounded-full"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <h4 className="mx-5 mt-6">
            If you are not a user{" "}
            <Link to="/register" className="text-blue-400">
              Register
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Login;
