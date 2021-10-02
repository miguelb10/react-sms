import React from 'react';
import axios from 'axios';

function Student(props) {
  const deleteStudent = (studentId) => {
    axios.delete(`http://localhost:8000/students/${studentId}`)
    .then(
      response => {alert("Student deleted successfully! " + response.data)}
    )
  }
  return(
    <div>
      <p>
        <span className="fw-bold">
          {props.student.name} : {props.student.email} : {props.student.phone}
        </span>
        <button onClick={() => deleteStudent(props.student.id)} className="btn btn-danger">X</button>
      </p>
    </div>
  );  
}

export default Student;