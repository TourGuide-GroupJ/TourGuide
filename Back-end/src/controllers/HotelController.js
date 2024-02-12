const Hotel = require("../models/Hotel.model");

const saveHotel = async (req, res) => {
  try {
    const existingHotel = await Hotel.findOne({ email: req.body.email });

    if (existingHotel) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newHotel = new Hotel({
      hotelName: req.body.hotelName, //save data in database
      hotelLicenseNumber: req.body.hotelLicenseNumber,
      hotelType: req.body.hotelType,
      hotelClass: req.body.hotelClass,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      password: req.body.password,
    });

    await newHotel.save();

    return res.status(200).json({
      success: "Saved Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      Error: error.message,
    });
  }
};


module.exports = {saveHotel};
