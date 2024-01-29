const Guide = require('../models/Guide.model'); // Assuming the Guide model is defined in 'models/Guide.js'
const Attraction = require('../models/Attraction.model');
const otplib = require('otplib'); // Assuming otplib is installed
const sendDynamicEmail = require('../utils/EmailSender'); // Assuming you have a utility function for sending emails

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
  
//******************************************************************* */

exports.addAttraction = async(req, res) => {
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
        console.log('Attraction added:', savedAttraction);

        res.json({ success: true, message: 'Attraction added successfully' });
    } catch (error) {
        console.error('Error adding attraction:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};


