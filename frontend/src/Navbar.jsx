import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div >
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-4">
          <button>
            <span className="font-semibold text-xl tracking-tight">
              <NavLink to="/">Vision Care</NavLink>
            </span>
          </button>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"></button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <button className="btn btn-white text-white mr-2">
              <NavLink
                to="/Info"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Info
              </NavLink>
            </button>

            <button className="btn btn-white text-white">
              {" "}
              <NavLink
                to="/Assessment"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Assessment
              </NavLink>
            </button>
          </div>
          <div>
            <button className="btn btn-white text-white">
              <NavLink
                to="/finddoc"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                  };
                }}
              >
                Search for Doctor
              </NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
