// EmpItem.js
import React from 'react';


function EmpItem({ info }) {
  console.log('Info:', info); // Log info object to verify its structure

  if (!info) {
    return <div>No data available</div>; // Fallback message if info is undefined
  }

  // Destructure properties from info object
  const { name, position, image } = info;

  return (
    <div className='emp_item'>
      <div className='img_Emp'><img src={image} alt="Employee" /></div>
      <div className='name_Emp'>
        <h1>{name}</h1>
        <h5>{position}</h5>
      </div>
    </div>
    



  );
}

export default EmpItem;