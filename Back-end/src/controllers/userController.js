const express =require("express");
// const router = express.Router();
// const cors = require('../controllers/userController.js');
const User = require("../MODELS/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRoutes = require('../routes/userRoutes');

const registerUser = async (req, res) => {
  try {
    const { firstName,lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    

    const newUser = new User({
      firstName,
      lastName,
      password: hashedPassword,
      email,
    });

    await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const existingUser = await User.findOne({ email: email });
  
      if (!existingUser) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      console.log(password, existingUser.password);
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
  
      if (!isPasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign(
        { id: existingUser._id },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "1h",
        }
      );
  
      res.status(200).json({
        token,
        message: "User logged in successfully",
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  module.exports = {
    registerUser,
    loginUser,
  };