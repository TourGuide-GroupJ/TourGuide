const Guide = require("../models/Guide.model");
const Hotel = require("../models/Hotel.model");  
const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 
// Assuming the Guide model is defined in 'models/Guide.js'
//const otplib = require('otplib'); // Assuming otplib is installed
//const sendDynamicEmail = require('../utils/EmailSender'); // Assuming you have a utility function for sending emails

exports.getAcceptedGuides = (req, res) => {
  const condition = { $and: [{ IsAccepted: true }, { IsBlocked: false }] };
  Guide.find(condition)
    .select(
      "FirstName LastName GuideId_Number GuideId_ExpiredDate GuideType Language Email ContactNumber"
    )
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.getAcceptedHotels = (req, res) => {
  const condition = { $and: [{ isAccepted: true }, { isBlocked: false }] };
  Hotel.find(condition)
    .select("hotelName hotelLicenseNumber hotelType contactNumber email")
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({
        Error: error,
      });
    });
};



exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    

    const newUser = new User({
      username,
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


exports.loginUser = async (req, res) => {
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