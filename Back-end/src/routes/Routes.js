const express = require("express");
const nodemailer = require("nodemailer");
const Guide = require("../models/guideModel.js");
const { google } = require("googleapis");
const otplib = require('otplib');


const router = express.Router();

//************************************ Mail setting
const oAuth2Client = new google.auth.OAuth2(
  "888621362252-h0acbi8hkuio4c0hi887ttuob83upto0.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04igz78WV_wUeCgYIARAAGAQSNwF-L9Irac2Cb684VXB9bH8O5iiMnqSPdn5JLbzN4qKboQI_K12C3l9MDZQDRICGvTg2jHp-YfE",
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
      "1//04igz78WV_wUeCgYIARAAGAQSNwF-L9Irac2Cb684VXB9bH8O5iiMnqSPdn5JLbzN4qKboQI_K12C3l9MDZQDRICGvTg2jHp-YfE",
    accessToken: oAuth2Client.getAccessToken(),
  },
});

const sendDynamicEmail = async (recipient,message,id) => {
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
  const userRandom = Math.floor(100000+Math.random()*900000);
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
      sendDynamicEmail("sriyaniwasa1@gmail.com","New Guide's Id",idToAdmin);
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
    "FirstName LastName NIC_Number GuideId_Number GuideId_ExpiredDate GuideType Language Email ContactNumber"
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
        success: "Updated Successfully",
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
        success: "Updated Successfully",
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

//********************************************* Guide Profile
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
        success: "Updated Successfully",
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        Error: error,
      });
    });
});

router.put("/guide/updateprofile/:id", async(req, res) => {
  try {
  Guide.findByIdAndUpdate(req.params.id, {
    FirstName: req.body.FirstName.charAt(0).toUpperCase() + req.body.FirstName.slice(1),
    LastName: req.body.LastName.charAt(0).toUpperCase() + req.body.LastName.slice(1),
    Language: req.body.Language,
    ContactNumber: req.body.ContactNumber,
  })
    .then((updatedGuide) => {
      console.log(req.body);
      return res.status(200).json({
        success: "Updated Successfully",
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

router.put("/guide/updateprofilespecial/:id", async(req, res) => {
  try {
    const guideEmail_Password = await Guide.findById(req.params.id).select("Email Password");
    console.log(guideEmail_Password);
      const secret = otplib.authenticator.generateSecret();
      const guideOTP = otplib.authenticator.generate(secret);
      sendDynamicEmail("sriyaniwasa1@gmail.com","Your OTP",guideOTP);
  Guide.findByIdAndUpdate(req.params.id, {
    FirstName: req.body.FirstName.charAt(0).toUpperCase() + req.body.FirstName.slice(1),
    LastName: req.body.LastName.charAt(0).toUpperCase() + req.body.LastName.slice(1),
    Language: req.body.Language,
    Email: req.body.Email,
    ContactNumber: req.body.ContactNumber,
    Password: req.body.Password
  })
    .then((updatedGuide) => {
      console.log(req.body);
      return res.status(200).json({
        success: "Updated Successfully",
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
