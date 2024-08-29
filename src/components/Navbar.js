import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-richblack-100 shadow-md w-full">
      <div className="w-10/12 container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Employee Management</h1>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-richblack-900">
            Home
          </Link>
          <Link to="/add" className="hover:text-richblack-900">
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};
