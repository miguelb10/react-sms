import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StudentList from './components/StudentList';

function App() {
  //Define state variables
  const [studentList, setStudentList] = useState([{}]);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');

  //Get all student data on page load
  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = () => {
    axios.get('http://localhost:8000/students')
      .then(
        response => {
          console.log(response.data);
          setStudentList(response.data);
        }
      )
      .catch(
        (error) => {
          console.log(error);
        }
      )
  }

  //Add new student
  const addStudent = () => {
    const student = { 'student_name': studentName, 'student_email': studentEmail, 'student_phone': studentPhone };
    axios.post('http://localhost:8000/students', student)
      .then(response => { 
        getAllStudents();
        alert("Student added successfully!"); 
      })
      .catch((err) => { console.error(err); });
  }

  return (
    <div className="container">
      <div className="text-center mt-3 list-group-item 
                      justify-content-center 
                      align-items-center 
                      mx-auto"
        style={{ "width": "80vw", "backgroundColor": "#ffffff" }}>
        <h2 className="card text-white bg-primary mb-1 pb-2">School Management System</h2>
        <h6 className="card text-white bg-primary mb-1 pb-1">Manage Your Students</h6>
        <div className="card-body">
          <h5 className="card text-white bg-dark pb-1">Add Your Student</h5>
          <span className="card-text">
            <input onChange={event => setStudentName(event.target.value)} className="form-control stud-name mb-2" placeholder="Enter name" />
            <input onChange={event => setStudentEmail(event.target.value)} className="form-control stud-email mb-2" placeholder="Enter email" />
            <input onChange={event => setStudentPhone(event.target.value)} className="form-control stud-phone mb-3" placeholder="Enter phone" />
            <button onClick={addStudent} className="btn btn-outline-primary mb-4"
              style={{ "fontWeight": "bold" }}>Add Student</button>
          </span>
          <h5 className="card text-white bg-dark pb-1">Your Students</h5>
          <div>
            <StudentList studentListVar={studentList} />
          </div>
        </div>
        <h6 className="card text-dark bg-warning py-1">All rights reserved &copy; 2021</h6>
      </div>
    </div>
  );
}

export default App;
