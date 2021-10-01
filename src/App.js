import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  //Define state variables
  const [studentList, setStudentList] = useState([{}]);
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');

  //Get all student data on page load
  useEffect(() => {
    axios.get('http://localhost:8000/students')
    .then(
      response => {
        console.log(response);
      }
    )
  });

  return (
    <div className="container">
      <div className="text-center mt-3 list-group-item 
                      justify-content-center 
                      align-items-center 
                      mx-auto"
            style={{"width": "80vw", "backgroundColor": "#ffffff"}}>
        <h2 className="card text-white bg-primary mb-1 pb-2">School Management System</h2>
        <h6 className="card text-white bg-primary mb-1 pb-1">Manage Your Students</h6>
        <div className="card-body">
          <h5 className="card text-white bg-dark pb-1">Add Your Student</h5>
          <span className="card-text">
            <input className="form-control stud-name mb-2" placeholder="Enter name" />
            <input className="form-control stud-email mb-2" placeholder="Enter email" />
            <input className="form-control stud-phone mb-3" placeholder="Enter phone" />
            <button className="btn btn-outline-primary mb-4"
                    style={{"fontWeight":"bold"}}>Add Student</button>
          </span>
          <h5 className="card text-white bg-dark pb-1">Your Students</h5>
          <div>

          </div>
        </div>
        <h6 className="card text-dark bg-warning py-1">All rights reserved &copy; 2021</h6>
      </div>
    </div>
  );
}

export default App;
