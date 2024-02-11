const Guide = require("../models/Guide.model");
const Hotel = require("../models/Hotel.model");
const Attraction = require("../models/Attraction.model");
const Response = require("../models/UserResponse.model");

//const otplib = require('otplib'); // Assuming otplib is installed
//const sendDynamicEmail = require('../utils/EmailSender'); // Assuming you have a utility function for sending emails

// Admin guide functions
exports.searchGuide = (req, res) => {
  Guide.findById(req.params.id)
    .select(
      "FirstName LastName NIC_Number GuideId_Number GuideId_ExpiredDate GuideType Language Email ContactNumber IsAccepted IsBlocked"
    )
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

exports.acceptGuide = (req, res) => {
  Guide.findByIdAndUpdate(req.params.id, { IsAccepted: true })
    .then(() => {
      console.log("Accepted");
      return res.status(200).json({
        message: "Accepted",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.blockGuide = (req, res) => {
  Guide.findByIdAndUpdate(req.params.id, { IsBlocked: true })
    .then(() => {
      console.log("Blocked");
      return res.status(200).json({
        message: "Blocked",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.unblockGuide = (req, res) => {
  Guide.findByIdAndUpdate(req.params.id, { IsBlocked: false })
    .then(() => {
      console.log("Unblocked");
      return res.status(200).json({
        message: "Unblocked",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.deleteGuideById = (req, res) => {
  Guide.findByIdAndDelete(req.params.id)
    .then((guide) => {
      console.log(req.body);
      return res.status(200).json({
        success: "Deleted Successfully",
        guide,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

// Admin Hotel functions
exports.searchHotel = (req, res) => {
  Hotel.findById(req.params.id)
    .select(
      "hotelName hotelLicenseNumber hotelType hotelClass contactNumber email isAccepted isBlocked"
    )
    .then((hotel) => {
      return res.status(200).json({
        success: true,
        Hotel: hotel,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.acceptHotel = (req, res) => {
  Hotel.findByIdAndUpdate(req.params.id, { isAccepted: true })
    .then(() => {
      console.log("Accepted");
      return res.status(200).json({
        message: "Accepted",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.blockHotel = (req, res) => {
  Hotel.findByIdAndUpdate(req.params.id, { isBlocked: true })
    .then(() => {
      console.log("Blocked");
      return res.status(200).json({
        message: "Blocked",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.unblockHotel = (req, res) => {
  Guide.findByIdAndUpdate(req.params.id, { isBlocked: false })
    .then(() => {
      console.log("Unblocked");
      return res.status(200).json({
        message: "Unblocked",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

exports.deleteHotel = (req, res) => {
  Hotel.findByIdAndDelete(req.params.id)
    .then((hotel) => {
      console.log(req.body);
      return res.status(200).json({
        success: "Deleted Successfully",
        hotel,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
};

//******************************************************************* */

exports.addAttraction = async (req, res) => {
  const { name, description, location } = req.body;
  const photoPath = req.file.path;

  // Create a new attraction instance
  const newAttraction = new Attraction({
    name,
    description,
    location,
    photoPath,
  });

  try {
    // Save the attraction to the database
    const savedAttraction = await newAttraction.save();
    console.log("Attraction added:", savedAttraction);

    res.json({ success: true, message: "Attraction added successfully" });
  } catch (error) {
    console.error("Error adding attraction:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};



// Assuming you have a Response model defined with Mongoose

exports.getResponses = (req, res) => {
  Response.find().select("user_email user_name subject message") // Fetch all responses
    .then((responses) => {
      return res.status(200).json({
        success: true,
        Responses: responses,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        error: error.message, // Return error message
      });
    });
};
