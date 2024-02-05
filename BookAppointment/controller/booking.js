const User = require("../models/booking");
exports.addUser = async (req, res) => {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;

    let data = await User.create({ name, email, phone });
    console.log(data);
    res.json({ newUserDetail: data });
  } catch (err) {
    console.log(err);
  }
};

exports.getUsers = async (req, res) => {
  try {
    let data = await User.findAll();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let userId = req.body.id;
    let deleteUser = await User.findByPk(userId);
    let result = await deleteUser.destroy();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.editUser = async (req, res) => {
  try {
    let updatedId = req.body.id;
    let updatedName = req.body.name;
    let updatedEmail = req.body.email;
    let updatedPhone = req.body.phone;

    let data = await User.findByPk(updatedId);
    console.log(data);
    data.id = updatedId;
    data.name = updatedName;
    data.email = updatedEmail;
    data.phone = updatedPhone;
    let response = await data.save();
    console.log(response)
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};
