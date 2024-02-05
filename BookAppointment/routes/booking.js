const express = require('express');
const router = express.Router();
const controlBooking = require('../controller/booking');

router.post("/add-user",controlBooking.addUser)
router.get("/get-users",controlBooking.getUsers)
router.post("/delete",controlBooking.deleteUser)
router.post("/edit-user",controlBooking.editUser)


module.exports = router;