import React, { useState } from "react";
import Swal from "sweetalert2";

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);
  const [designation, setDesignation] = useState(selectedEmployee.designation);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !salary ||
      !date ||
      designation === "select" ||
      designation === ""
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
      designation,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    localStorage.setItem("employees_data", JSON.stringify(employees));
    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          data-test-id="employee-form-first-name-input"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          data-test-id="employee-form-last-name-input"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-test-id="employee-form-email-input"
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          data-test-id="employee-form-salary-input"
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          data-test-id="employee-form-date-input"
        />
        <label htmlFor="designation">Designation</label>
        <select
          id="designation"
          name="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          data-test-id="employee-form-designation-select"
        >
          <option value="select">Select</option>
          <option value="manager">Manager</option>
          <option value="junior">Junior</option>
          <option value="senior">Senior</option>
        </select>
        <div style={{ marginTop: "30px" }}>
          <input
            type="submit"
            value="Update"
            data-test-id={"employee-form-update-button"}
          />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
            data-test-id={"employee-form-cancel-button"}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
