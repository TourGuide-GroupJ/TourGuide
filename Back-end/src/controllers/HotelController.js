const Hotel = require("../models/Hotel.model"); // Assuming the Hotel model is defined in 'models/Hotel.js'
const otplib = require("otplib"); // Assuming otplib is installed
const { sendDynamicEmail } = require("../utils/EmailSender"); // Assuming you have a utility function for sending emails

exports.saveHotel = async (req, res) => {
  try {
    const newHotel = new Hotel({
      hotelName: req.body.hotelName, //save data in database
      hotelLicenseNumber: req.body.hotelLicenseNumber,
      hotelType: req.body.hotelType,
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

// let profId = "";
// let profFirstName = "";
// let profLastName = "";
// let profLanguage = "";
// let profEmail = "";
// let profContactNumber = "";
// let profPassword = "";
// let profSecret = "";

// exports.getHotelProfile = (req, res) => {
//   Hotel.findById(req.params.id)
//     .then((Hotel) => {
//       return res.status(200).json({
//         success: true,
//         Hotel: Hotel,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(400).json({
//         Error: error,
//       });
//     });
// };

// exports.updateAllHotel = (req, res) => {
//   Hotel.findByIdAndUpdate(req.params.id, { $set: req.body })
//     .then(() => {
//       console.log(req.body);
//       return res.status(200).json({
//         message: "Updated Successfully",
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       return res.status(400).json({
//         Error: error,
//       });
//     });
// };

// exports.updateProfileHotel = async (req, res) => {
//   try {
//     Hotel.findByIdAndUpdate(req.params.id, {
//       FirstName:
//         req.body.FirstName.charAt(0).toUpperCase() +
//         req.body.FirstName.slice(1),
//       LastName:
//         req.body.LastName.charAt(0).toUpperCase() + req.body.LastName.slice(1),
//       Language: req.body.Language,
//       ContactNumber: req.body.ContactNumber,
//     })
//       .then((updatedHotel) => {
//         console.log(req.body);
//         return res.status(200).json({
//           success: true,
//           message: "Updated Successfully",
//           Hotel: updatedHotel,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//         return res.status(400).json({
//           Error: error,
//         });
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };

// exports.updateProfileSpecialHotel = async (req, res) => {
//   try {
//     const HotelEmail_Password = await Hotel.findById(req.params.id).select(
//       "Email Password"
//     );
//     console.log(HotelEmail_Password);
//     //**********************************************************************
//     profId = req.params.id;
//     profFirstName =
//       req.body.FirstName.charAt(0).toUpperCase() + req.body.FirstName.slice(1);
//     profLastName =
//       req.body.LastName.charAt(0).toUpperCase() + req.body.LastName.slice(1);
//     profLanguage = req.body.Language;
//     profEmail = req.body.Email;
//     profContactNumber = req.body.ContactNumber;
//     profPassword = req.body.Password;
//     //***********************************************************************
//     const existingHotel = await Hotel.findOne({ Email: profEmail });
//     if (existingHotel && HotelEmail_Password.Email !== profEmail) {
//       // Email already registered
//       return res.status(400).json({
//         success: false,
//         message: "Email already in use.",
//       });
//     } else {
//       profSecret = otplib.authenticator.generateSecret();
//       console.log(profSecret);
//       const HotelOTP = otplib.authenticator.generate(profSecret);
//       console.log(HotelOTP);
//       sendDynamicEmail(profEmail, "Your OTP", HotelOTP);
//       return res.status(200).json({
//         success: true,
//         message: "OTP is sent",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// exports.otpAlertUpdate = async (req, res) => {
//   console.log("otp checking");
//   const enteredOtp = req.body.otp;
//   console.log("Entered OTP:", enteredOtp);
//   console.log(profSecret);
//   const otpValidation = otplib.authenticator.check(enteredOtp, profSecret);
//   console.log(otpValidation);

//   if (otpValidation) {
//     Hotel.findByIdAndUpdate(profId, {
//       FirstName: profFirstName,
//       LastName: profLastName,
//       Language: profLanguage,
//       Email: profEmail,
//       ContactNumber: profContactNumber,
//       Password: profPassword,
//     })
//       .then((updatedHotel) => {
//         console.log("Hotel updated successfully:", updatedHotel);
//         return res.status(200).json({
//           success: true,
//           message: "OTP verified successfully",
//           Hotel: updatedHotel,
//         });
//       })
//       .catch((error) => {
//         console.error("Error updating Hotel:", error);
//         return res.status(500).json({
//           success: false,
//           message: "Internal Server Error",
//         });
//       });
//   } else {
//     console.log("Invalid OTP");
//     return res.status(200).json({
//       success: false,
//       message: "Invalid OTP",
//     });
//   }
// };

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
