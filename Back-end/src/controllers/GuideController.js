const Guide = require('../models/Guide.model'); // Assuming the Guide model is defined in 'models/Guide.js'
const otplib = require('otplib'); // Assuming otplib is installed
const {sendDynamicEmail} = require('../utils/EmailSender'); // Assuming you have a utility function for sending emails
const bcrypt = require("bcryptjs");


exports.saveGuide = async (req, res) => {
  try {
    const password = req.body.Password;
    const userRandom = Math.floor(100000 + Math.random() * 900000);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newGuide = new Guide({
      FirstName: req.body.FirstName,
      LastName: req.body.LastName,
      NIC_Number: req.body.NIC_Number,
      GuideId_Number: req.body.GuideId_Number,
      GuideId_ExpiredDate: req.body.GuideId_Expdate,
      GuideType: req.body.GuideType,
      Language: req.body.Language,
      Email: req.body.Email,
      ContactNumber: req.body.ContactNumber,
      Gender: req.body.Gender,
      UserName: req.body.LastName + userRandom,
      Password: hashedPassword,
    });


    const savedGuide = await newGuide.save();

    // Send email to admin
    sendDynamicEmail("sriyaniwasa1@gmail.com", "New Guide's Id", savedGuide._id);

    return res.status(200).json({
      success: "Saved Successfully",
      Guide: savedGuide,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      Error: error.message,
    });
  }
};

let profId = "";
let profFirstName = "";
let profLastName = "";
let profLanguage = "";
let profEmail = "";
let profContactNumber = "";
let profPassword = "";
let profSecret = "";

exports.getGuideProfile = (req, res) => {
  Guide.findById(req.params.id)
    .then((guide) => {
      return res.status(200).json({
        success: true,
        Guide: guide,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

//*********************************************************Not use */
exports.updateAllGuide = (req, res) => {
  Guide.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => {
      console.log(req.body);
      return res.status(200).json({
        message: "Updated Successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};
//********************************************************** */

exports.updateProfileGuide = async (req, res) => {
  try {
    Guide.findByIdAndUpdate(req.params.id, {
      FirstName:
        req.body.FirstName.charAt(0).toUpperCase() +
        req.body.FirstName.slice(1),
      LastName:
        req.body.LastName.charAt(0).toUpperCase() + req.body.LastName.slice(1),
      Language: req.body.Language,
      ContactNumber: req.body.ContactNumber,
    })
      .then((updatedGuide) => {
        console.log(req.body);
        return res.status(200).json({
          success: true,
          message: "Updated Successfully",
          Guide: updatedGuide,
        });
      })
      .catch((error) => {
        console.log(error);
        return res.status(400).json({
          Error: error,
        });
      });
  } catch (error) {
    console.log(error);
  }
};

exports.updateProfileSpecialGuide = async (req, res) => {
  try {
    const guideEmail_Password = await Guide.findById(req.params.id).select(
      "Email Password"
    );
    console.log(guideEmail_Password);
    //**********************************************************************
    profId = req.params.id;
    profFirstName =
      req.body.FirstName.charAt(0).toUpperCase() + req.body.FirstName.slice(1);
    profLastName =
      req.body.LastName.charAt(0).toUpperCase() + req.body.LastName.slice(1);
    profLanguage = req.body.Language;
    profEmail = req.body.Email;
    profContactNumber = req.body.ContactNumber;
    profPassword = req.body.Password;
    //***********************************************************************
    const existingGuide = await Guide.findOne({ Email: profEmail });
    if (existingGuide && guideEmail_Password.Email !== profEmail) {
      // Email already registered
      return res.status(400).json({
        success: false,
        message: "Email already in use.",
      });
    } else {
      profSecret = otplib.authenticator.generateSecret();
      console.log(profSecret);
      const guideOTP = otplib.authenticator.generate(profSecret);
      console.log(guideOTP);
      sendDynamicEmail(profEmail, "Your OTP", guideOTP);
      return res.status(200).json({
        success: true,
        message: "OTP is sent",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.otpAlertUpdate = async (req, res) => {
  console.log("otp checking");
  const enteredOtp = req.body.otp;
  console.log("Entered OTP:", enteredOtp);
  console.log(profSecret);
  const otpValidation = otplib.authenticator.check(enteredOtp, profSecret);
  console.log(otpValidation);
  

  if (otpValidation) {
    Guide.findByIdAndUpdate(profId, {
      FirstName: profFirstName,
      LastName: profLastName,
      Language: profLanguage,
      Email: profEmail,
      ContactNumber: profContactNumber,
      Password: profPassword,
    })
      .then((updatedGuide) => {
        console.log("Guide updated successfully:", updatedGuide);
        return res.status(200).json({
          success: true,
          message: "OTP verified successfully",
          Guide: updatedGuide,
        });
      })
      .catch((error) => {
        console.error("Error updating guide:", error);
        return res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      });
  } else {
    console.log("Invalid OTP");
    return res.status(200).json({
      success: false,
      message: "Invalid OTP",
    });
  }
};

exports.getAcceptedGuides = (req, res) => {
  const condition = { IsAccepted: true };
  Guide.find(condition)
    .select("Email GuideId_Number")
    .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      return res.status(400).json({
        Error: error,
      });
    });
  };
