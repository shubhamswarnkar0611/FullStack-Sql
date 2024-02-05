import React, { useState } from 'react';

const Body = (props) => {

  console.log(props.date)
  const [attendanceData, setAttendanceData] = useState([]);

  const students = [
    { id: 1, name: 'Shubham' },
    { id: 2, name: 'Sourabh' },
    { id: 3, name: 'Deep' },
    { id: 4, name: 'Aniket' },
    { id: 5, name: 'Akash' },
  ];

  const handleAttendanceChange = (studentId, value) => {
    const updatedAttendance = [...attendanceData];
    const index = updatedAttendance.findIndex((data) => data.id === studentId);

    if (index !== -1) {
      updatedAttendance[index] = { id: studentId,name: students.find((student) => student.id === studentId).name, attendance: value,date:props.date };
    } else {
      updatedAttendance.push({ id: studentId,name: students.find((student) => student.id === studentId).name, attendance: value ,date:props.date });
    }

    setAttendanceData(updatedAttendance);
  };

  const submitAttendance = () => {
    // Log the collected attendance data
    axios.post("http://localhost:3000/attendance",attendanceData)
    .then(()=>{
      // alert("Submited Successfully")
    })
    .catch((error) => {
      console.log(error)
    });
   
  };


  return (
    <>
      <form id="attendanceForm">
        <table class="table table-light table-striped">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>
                  <label className='m-2'>
                    Present
                    <input 
                      type="radio"
                      name={`attendance${student.id}`}
                      value="Present"
                      onChange={() => handleAttendanceChange(student.id, 'Present')}
                      />
                  </label>
                  <label className='-2'>
                    Absent
                    <input
                      type="radio"
                      name={`attendance${student.id}`}
                      value="Absent"
                      onChange={() => handleAttendanceChange(student.id, 'Absent')}
                      />
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button type="button" className='btn btn-success' onClick={submitAttendance}>
          Submit Attendance
        </button>
      </form>
    </>
  );
};

export default Body