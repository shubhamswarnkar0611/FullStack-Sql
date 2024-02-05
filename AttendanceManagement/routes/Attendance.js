const express = require('express');
const attendanceController = require("../controller/Attendance")

const router = express.Router();


router.post('/attendance',attendanceController.getAttendance)

router.use("/info",attendanceController.attendanceInfo);







module.exports =router;