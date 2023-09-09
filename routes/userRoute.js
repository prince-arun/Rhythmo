const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//creating post router for registration
router.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    //bcrypt - native functions--------
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    //---------------------------------
    req.body.password = hashedPassword;
    const user = new User(req.body);

    //finding if the user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    } else {
      await user.save();
      return res
        .status(200)
        .send({ message: "User registered successfully", success: true });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
});

module.exports = router;
