import React from 'react'

const College = ({ college }) => {
  return (
    <div 
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        borderBottom: "2px solid black",
        margin: "20px",
        borderRadius: "10px"
      }}
    >
      <h1>Name: {college.name}</h1>
      <ul>
        <li><h2>City: {college.city}</h2></li>
        <li><h2>Website: {college.website}</h2></li>
        <li>
          <h3>Student Info</h3>
          <p><b>Name:</b> {college.student.name}</p>
          <p><b>Age:</b> {college.student.age}</p>
          <p><b>Email:</b> {college.student.email}</p>
        </li>
      </ul>
    </div>
  )
}

export default College
