
const Hotel = require("../models/Hotel.model");   
const Guide = require('../models/Guide.model'); // Assuming the Guide model is defined in 'models/Guide.js'
const UserResponse = require("../models/UserResponse.model");
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

exports.postResponse = async(req,res) => {
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
}catch (error) {
  console.error(error);
  return res.status(400).json({
    Error: error.message,
  });
}
};

