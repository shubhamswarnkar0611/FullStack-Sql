const Sequelize = require('sequelize');

const sequelize = new Sequelize('book_appointment','root','Shubham@123',{dialect:'mysql',host: 'localhost'});

module.exports = sequelize;