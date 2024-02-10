const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");

dotenv.config();

//************************************ Mail setting
const oAuth2Client = new google.auth.OAuth2(
  process.env.ClientId,
  process.env.ClientSecret,
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token: process.env.Refresh_Token,
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "shankumarax1@gmail.com",
    clientId: process.env.ClientId,
    clientSecret: process.env.ClientSecret,
    refreshToken: process.env.Refresh_Token,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

exports.sendDynamicEmail = async (recipient, message, id) => {
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


