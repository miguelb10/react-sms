import React from 'react';
import axios from 'axios';

function Student(props) {

  const getAllStudents = () => {
    axios.get('http://localhost:8000/students')
      .then(
        response => {
          console.log(response.data);
          props.setStudentList(response.data);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  const deleteStudent = (studentId) => {
    axios.delete(`http://localhost:8000/students/${studentId}`)
    .then(
      response => {
        alert("Student deleted successfully! ");
        getAllStudents();
      }
    ).catch((err) => console.log(err));
  }
  const editStudent = (student) => {
    props.setStudentId(student.id);
    props.setStudentName(student.name);
    props.setStudentEmail(student.email);
    props.setStudentPhone(student.phone);
  }
  return(
    <div>
      <p>
        <span className="fw-bold mx-2">
          {props.student.name} : {props.student.email} : {props.student.phone}
        </span>
        <button onClick={() => editStudent(props.student)} className="mx-2 btn btn-warning">Edit</button>
        <button onClick={() => deleteStudent(props.student.id)} className="btn btn-danger">X</button>
      </p>
    </div>
  );  
}

export default Student;