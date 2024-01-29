const express = require("express");
const nodemailer = require("nodemailer");
const Guide = require("../models/Guide.model.js");
const { google } = require("googleapis");
const otplib = require("otplib");

const router = express.Router();

//************************************ Mail setting
const oAuth2Client = new google.auth.OAuth2(
  "888621362252-h0acbi8hkuio4c0hi887ttuob83upto0.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04Av_4yxuop84CgYIARAAGAQSNwF-L9IrM-9Iso3A5z8AshEaK2wPEykeVo3LtyQfX81XKiW1dKXawLtee3CSBiCr-yZFPgdrg_c",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "shankumarax1@gmail.com",
    clientId:
      "888621362252-h0acbi8hkuio4c0hi887ttuob83upto0.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken:
      "1//04Av_4yxuop84CgYIARAAGAQSNwF-L9IrM-9Iso3A5z8AshEaK2wPEykeVo3LtyQfX81XKiW1dKXawLtee3CSBiCr-yZFPgdrg_c",
    accessToken: oAuth2Client.getAccessToken(),
  },
});

const sendDynamicEmail = async (recipient, message, id) => {
  try {
    // Define email content using template strings
    const emailContent = `
      Hello,

      ${message} is: ${id}

      Thank you for using our service.

      Regards,
      Traval Guide Sri Lanka.
    `;

    // Define mail options
    const mailOptions = {
      from: "shankumarax1@gmail.com",
      to: recipient,
      subject: "Guide Information",
      text: emailContent,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

//*********************************** For GuideReg
router.post("/guide/save", async (req, res) => {
  const userRandom = Math.floor(100000 + Math.random() * 900000);
  let newGuide = new Guide({
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
    Password: req.body.Password,
  });
  newGuide
    .save()
    .then((newRegGuide) => {
      console.log(newRegGuide._id);
      const idToAdmin = newRegGuide._id;
      sendDynamicEmail("sriyaniwasa1@gmail.com", "New Guide's Id", idToAdmin);
      return res.status(200).json({
        success: "Saved Successfully",
        Guide: newRegGuide,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
});

//************************************ For Admin
router.get("/guide/search/:id", (req, res) => {
  Guide.findById(req.params.id)
    .select(
      "FirstName LastName NIC_Number GuideId_Number GuideId_ExpiredDate GuideType Language Email ContactNumber IsAccepted IsBlocked "
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
});

router.patch("/guide/admin/accept/:id", (req, res) => {
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
});

router.patch("/guide/admin/block/:id", (req, res) => {
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
});

router.patch("/guide/admin/unblock/:id", (req, res) => {
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
});

//************************************* For GuideReg
router.get("/guide/guideReg", (req, res) => {
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
});

//********************************************* for Users in page Guides

router.get("/guide", (req, res) => {
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
});

//************************************************* Guide Profile
router.get("/guide/guideprof/:id", (req, res) => {
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
});

router.put("/guide/updateall/:id", (req, res) => {
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
});

router.put("/guide/updateprofile/:id", async (req, res) => {
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
});

//*************************************************************************
let profId = "";
let profFirstName = "";
let profLastName = "";
let profLanguage = "";
let profEmail = "";
let profContactNumber = "";
let profPassword = "";
let profSecret = "";
//*************************************************************************

router.put("/guide/updateprofilespecial/:id", async (req, res) => {
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
});

//**********************************************************************Never change 
router.post("/guide/otpalertupdate", async (req, res) => {
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
});

//***********************************************************
router.delete("/guide/delete/:id", (req, res) => {
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
});

module.exports = router;
