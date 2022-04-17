const express = require("express");
const router = express.Router();
// cosnt {Schema} =
//create  a user using post auth
const User = require("../models/User");

router.post("/", function (req, res, next) {
  const user = User(req.body);
  user.save();
  res.send("Hello");
});
module.exports = router;
