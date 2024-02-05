import React from "react";

const FetchBody = (props) => {
  console.log(props.attendance.data);
  return (
    <>
    <h1>{props.attendance.data[0].date}</h1>
      <table class="table table-light table-striped">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {props.attendance.data.map((student,index) => (
            <tr key={student.id}>
              <td>{index+1}</td>
              <td>{student.student}</td>
              <td>{student.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchBody;
