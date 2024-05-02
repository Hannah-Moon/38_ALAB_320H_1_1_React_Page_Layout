// EmployeeList.js
import React from 'react';
import EmpItem from "./EmpItem";

function EmployeeList({ staff }) {
  return (
    <div className="employeeList">
      {staff.map((worker, i) => (
        <EmpItem key={i} info={worker} />
      ))}
    </div>
  );
}

export default EmployeeList;