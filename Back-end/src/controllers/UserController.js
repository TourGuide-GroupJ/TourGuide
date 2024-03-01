const Hotel = require("../models/Hotel.model");
const Guide = require("../models/Guide.model"); // Assuming the Guide model is defined in 'models/Guide.js'
const UserResponse = require("../models/UserResponse.model");
const dotenv = require("dotenv");

const User = require("../models/UserSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
dotenv.config();

//const otplib = require('otplib'); // Assuming otplib is installed
//const sendDynamicEmail = require('../utils/EmailSender'); // Assuming you have a utility function for sending emails

exports.getAcceptedGuides = (req, res) => {
  const condition = { $and: [{ IsAccepted: true }, { IsBlocked: false }, { GuideId_ExpiredDate: { $gt: new Date() } }] };
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
    const password = req.body.password;

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      email: req.body.email,
    });

    await newUser.save();
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
//******************************************************************************** */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    const existingGuide = await Guide.findOne({ Email: email });

    if (!existingUser && !existingGuide) {
      return res.status(401).json({ message: "Invalid Email" });
    }

    let token;
    let id;

    if (existingUser) {
      const isUserPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!isUserPasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      token = jwt.sign(
        { id: existingUser._id }, // Pass relevant data as payload
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
    }

    if (existingGuide) {
      const isGuidePasswordCorrect = await bcrypt.compare(
        password,
        existingGuide.Password
      );
      if (!isGuidePasswordCorrect) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      id = existingGuide._id;
      token = jwt.sign(
        { id: existingGuide._id }, // Pass relevant data as payload
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );
    }

    res.status(200).json({
      id,
      token,
      message: true,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//**********************************************************************/

exports.postResponse = async (req, res) => {
  try {
    const newResponse = new UserResponse({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      subject: req.body.subject,
      message: req.body.message,
    });

    const postResponse = await newResponse.save();

    return res.status(200).json({
      success: "Saved Successfully",
      Response: postResponse,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      Error: error.message,
    });
  }
};




// token = jwt.sign(
//   { id: existingGuide._id },
//   process.env.JWT_SECRET_KEY,
//   {
//     expiresIn: "2h",
//   }
// );
