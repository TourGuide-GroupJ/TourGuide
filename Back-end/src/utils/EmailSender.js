const nodemailer = require("nodemailer");
const { google } = require("googleapis");


//************************************ Mail setting
const oAuth2Client = new google.auth.OAuth2(
  "888621362252-h0acbi8hkuio4c0hi887ttuob83upto0.apps.googleusercontent.com",
  "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",
  "https://developers.google.com/oauthplayground"
);

oAuth2Client.setCredentials({
  refresh_token:
    "1//04FjCndyZqH82CgYIARAAGAQSNwF-L9IreuinSVP2oDv7Ycsjf6bwnpobRFg1EcbI2jlaHLjGYhZOBmMAn5IlEjahQttBoQo0eLU",
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
      "1//04FjCndyZqH82CgYIARAAGAQSNwF-L9IreuinSVP2oDv7Ycsjf6bwnpobRFg1EcbI2jlaHLjGYhZOBmMAn5IlEjahQttBoQo0eLU",
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
