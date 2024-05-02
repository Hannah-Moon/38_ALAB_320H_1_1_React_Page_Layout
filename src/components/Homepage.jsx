import React from 'react'
import Header from "./Header";
import SearchBar from "./searchbar";
import EmployeeList from './EmployeeList'

function Homepage({title, workers}) {
  return (
    <div className="homepage">
      <Header topic={title} />
      <SearchBar />
      <EmployeeList staff={workers} />
    </div>
  )
}

export default Homepage