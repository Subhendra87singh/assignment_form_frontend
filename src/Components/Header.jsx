import React from "react";
import { Navigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full  bg-opacity-0  h-24  ">
      <nav className=" container mx-auto px-10 flex justify-center items-center ">
        <div className="container mx-auto  px-9 flex justify-end h-24">
          {/* <Link className=" py-8 text-white mx-2	underline" to={"/register"}>
            Register
          </Link>
          <Link className=" py-8 text-white mx-2 underline" to={"/signin"}>
            Sign In
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
