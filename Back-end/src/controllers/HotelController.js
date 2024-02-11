const Hotel = require("../models/Hotel.model"); // Assuming the Hotel model is defined in 'models/Hotel.js'
const otplib = require("otplib"); // Assuming otplib is installed
const { sendDynamicEmail } = require("../utils/EmailSender"); // Assuming you have a utility function for sending emails
//const bycrypt = require("bycript");

exports.saveHotel = async (req, res) => {
  try {
    const newHotel = new Hotel({
      hotelName: req.body.hotelName, //save data in database
      hotelLicenseNumber: req.body.hotelLicenseNumber,
      hotelType: req.body.hotelType,
      hotelClass: req.body.hotelClass,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      password: req.body.password,
    }); 

    const savedHotel = await newHotel.save();

    return res.status(200).json({
      success: "Saved Successfully",
      Hotel: savedHotel,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      Error: error.message,
    });
  }
};

exports.getAcceptedHotels = (req, res) => {
  const condition = { IsAccepted: true };
  Hotel.find(condition)
    .select("email hotelLicenseNumber")
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({
        Error: error,
      });
    });
};
