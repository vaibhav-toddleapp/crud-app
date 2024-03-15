import React from "react";

const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Designation</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr
                key={employee.id}
                data-test-id={"employee-row-" + employee.id}
              >
                <td>{i + 1}</td>
                <td data-test-id={"employee-first-name-col"}>{employee.firstName}</td>
                <td data-test-id={"employee-last-name-col"}>{employee.lastName}</td>
                <td data-test-id={"employee-email-col"}>{employee.email}</td>
                <td data-test-id={"employee-salary-col"}>{formatter.format(employee.salary)}</td>
                <td data-test-id={"employee-designation-col"}>{employee.designation}</td>
                <td data-test-id={"employee-joining-date-col"}>{employee.date} </td>
                <td className="text-right" data-test-id={"employee-edit-button"}>
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left" data-test-id={"employee-delete-button"}>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr data-test-id={"employee-empty-placeholder"}>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
