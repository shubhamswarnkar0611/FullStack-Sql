const Dates = require("../model/Dates");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");

exports.getAttendance = (req, res, next) => {
  req.body.map((data) => {
    let id = data.id;
    let student = data.name;
    let attendance = data.attendance;
    let date = data.date;

    // console.log(student,date,id,attendance)

    Dates.create({ date, student, attendance })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  });
};

// exports.attendanceInfo = (req, res, next) => {
//     let arr =[];
//   Dates.findAll({
//     attributes: [
//       [Sequelize.fn("DISTINCT", Sequelize.col("student")), "student"],
//     ],
//   }).then(async (result) => {
//     if (result.length === 0) {
//       console.log("no data comming");
//     } else {
//       let data = result.map((instance) => instance.toJSON());
//       arr = await Promise.all(
//         data.map(async (students) => {
//           const totalAttendanceOfOneStudent = await Dates.count({
//             where: { student: students.student },
//           });
//           const totalPresent = await Dates.count({
//             where: { student: students.student, attendance: "Present" },
//           });
//           let percentage = totalAttendanceOfOneStudent
//             ? (totalPresent / totalAttendanceOfOneStudent) * 100
//             : 0;

//           arr.push({
//             student: students.student,
//             percentage,
//             totalAttendanceOfOneStudent,
//             totalPresent,
//           });
//         })
//       );

//       console.log(arr);
//     }
//   });

//   res.send("working");
// };


exports.attendanceInfo = async (req, res, next) => {
    try {
      const result = await Dates.findAll({
        attributes: [
          [Sequelize.fn("DISTINCT", Sequelize.col("student")), "student"],
        ],
      });
  
      if (result.length === 0) {
        console.log("No data coming");
      } else {
        const data = result.map((instance) => instance.toJSON());
  
        const arr = await Promise.all(
          data.map(async (students) => {
            const totalAttendanceOfOneStudent = await Dates.count({
              where: { student: students.student },
            });
  
            const totalPresent = await Dates.count({
              where: { student: students.student, attendance: "Present" },
            });
  
            const percentage = totalAttendanceOfOneStudent
              ? (totalPresent / totalAttendanceOfOneStudent) * 100
              : 0;
  
            return {
              student: students.student,
              percentage,
              totalAttendanceOfOneStudent,
              totalPresent,
            };
          })
        );
  
        console.log(arr);
        res.json(arr);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
