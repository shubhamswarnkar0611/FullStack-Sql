const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Dates = sequelize.define("Dates", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  student: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  attendance: {
    type: Sequelize.ENUM("Present", "Absent"),
    allowNull: false,
  },
});

module.exports = Dates;
