import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchEmployee = async () => {
        try {
          const response = await axios.get(`/api/v1/getEmployee/${id}`);
          setEmployee(response.data.data);
        } catch (error) {
          console.error("Error fetching employee data:", error);
        }
      };
      fetchEmployee();
    }
  }, [id]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        // Update existing employee
        await axios.put(`/api/v1/updateEmployee/${id}`, employee);
      } else {
        // Create new employee
        await axios.post("/api/v1/create", employee);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  return (
    <div className="bg-richblue-900 p-8 rounded-lg shadow-lg text-richblack-100">
      <h1 className="text-2xl font-bold mb-6">
        {id ? "Edit Employee" : "Add Employee"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-richblack-100 text-richblack-900"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-richblack-100 text-richblack-900"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Position</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-richblack-100 text-richblack-900"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-richblack-100 text-richblack-900"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Salary</label>
          <input
            type="string"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-richblack-100 text-richblack-900"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {id ? "Update" : "Add"} Employee
        </button>
      </form>
    </div>
  );
};
