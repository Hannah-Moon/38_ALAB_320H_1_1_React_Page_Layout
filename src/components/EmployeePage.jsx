import React from 'react';
import Header from './Header';
import EmpItem from './EmpItem';
import EmpInfo from './Empinfo'; // Use the correct casing in the import statement

import { allEmployees } from '../App'; // Make sure this import is correct

function EmployeePage() {
  return (
    <div className='emp_page'>
      <div className='emp_Infos'>
        <EmpItem info={allEmployees[0]} />
        <EmpInfo />
      </div>
    </div>
  );
}

export default EmployeePage;