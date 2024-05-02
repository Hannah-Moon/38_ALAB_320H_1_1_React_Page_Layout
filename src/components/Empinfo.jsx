import React from 'react'
import nextIcon from './assets/next_8066267.png'

function EmpInfo({info}) {
    console.log('Info:', info); // Log info object to verify its structure

  return (
    <div className='emp_infos'>
        <div className='info'>
            <h3>Phone number</h3>
            <h6>000-000-0000</h6>
        </div>
        <div className='btn_info'>
            <img src={nextIcon} alt='next icon button'/>
        </div>
    </div>
  )
}

export default EmpInfo

