import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get("/api/v1/getAllEmployee");
      setEmployees(response.data.data);
    } catch (err) {
      console.log("Error occurred while getting all employees in FE");
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  async function deleteEmployee(empId) {
    try {
      const response = await axios.delete(`/api/v1/deleteEmployee/${empId}`);
      if (response.data.success) {
        toast.success("Employee Deleted successfully");
        fetchEmployee();
      }
    } catch (err) {
      console.log("Error occurred while deleting Employee");
      console.log(err.message);
    }
  }

  return (
    <div className="bg-richblue-900 p-8 rounded-lg shadow-lg text-richblack-100 w-full">
    <div className="w-10/12 mx-auto">
    <h1 className="text-2xl font-bold mb-6">Employee List</h1>
      <Link
        to="/add"
        className="mb-4 inline-block bg-blue-900 text-richblack-100 px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Add New Employee
      </Link>

      <div className="grid grid-cols-1 gap-6">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="bg-richblack-100 text-richblack-900 p-4 rounded shadow-md"
          >
            <p className="font-semibold">Name: {emp.name}</p>
            <p>Email: {emp.email}</p>
            <p>Position: {emp.position}</p>
            <p>Department: {emp.department}</p>
            <p>Salary: {emp.salary}</p>

            <div className="flex space-x-2 mt-4">
              <Link to={`/edit/${emp._id}`}>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
                  Edit
                </button>
              </Link>

              <button
                onClick={() => deleteEmployee(emp._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
