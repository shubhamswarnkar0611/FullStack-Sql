import React, { useEffect, useState } from "react";

const StudentDetails = () => {
  const [attendanceInfo, setAttendanceInfo] = useState();
  useEffect(() => {
    getSummary();
  }, []);

  async function getSummary() {
    let res = await axios.get("http://localhost:3000/info");
    setAttendanceInfo(res);
  }

  console.log();

  return (
    <>
      <table class="table table-light table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Present/Total Days</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {attendanceInfo?.data?.map((details) => {
            return (
              <tr key={details.student}>
                <td>{details.student}</td>
                <td>
                  {details.totalPresent}/{details.totalAttendanceOfOneStudent}
                </td>
                <td>{details.percentage}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentDetails;

// 0
// :
// {student: 'Shubham', percentage: 50, totalAttendanceOfOneStudent: 2, totalPresent: 1}
// 1
// :
// {student: 'Sourabh', percentage: 50, totalAttendanceOfOneStudent: 2, totalPresent: 1}
// 2
// :
// {student: 'Deep', percentage: 100, totalAttendanceOfOneStudent: 2, totalPresent: 2}
// 3
// :
// {student: 'Aniket', percentage: 50, totalAttendanceOfOneStudent: 2, totalPresent: 1}
// 4
// :
// {student: 'Akash', percentage: 100, totalAttendanceOfOneStudent: 2, totalPresent: 2}
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)
