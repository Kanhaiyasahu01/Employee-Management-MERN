import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { EmployeeForm } from "./pages/EmployeeForm";
import { EmployeeList } from "./pages/EmployeeList";
import { Navbar } from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <div className="app min-h-screen bg-richblue-900 text-richblack-100">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
