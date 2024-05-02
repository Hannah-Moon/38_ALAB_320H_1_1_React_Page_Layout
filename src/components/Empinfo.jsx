import React from 'react'
import nextIcon from './assets/next_8066267.png'

function EmpInfo() {
  return (
    <div className='emp_infos'>
        <div className='info'>
            <h3>Call Office</h3>
            <h6>123-456-789</h6>
        </div>
        <div className='btn_info'>
            <img src={nextIcon} alt='next icon button'/>
        </div>
    </div>
  )
}

export default EmpInfo