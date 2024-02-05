const Sequelize = require('sequelize');

const sequelize = new Sequelize('student_attendance','root','Shubham@123',{dialect:'mysql',host: 'localhost'});

module.exports = sequelize;
 