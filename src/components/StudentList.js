import React from 'react';
import Student from './Student';

function StudentList(props) {
  return(
    <div>
      <ul>
        {
          props.studentListVar.map(
            (stud, index) => {
              return (<Student student={stud} key={index}/>)
            }
          )
        }
      </ul>
    </div>
  )
}

export default StudentList;