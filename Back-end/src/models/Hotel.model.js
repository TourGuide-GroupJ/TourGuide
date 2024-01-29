const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  HotelType: {
    type: String,
    required: true,
  },
  Hotel_License_Number: {
    type: String,
    required: true,
    unique: true,
  },
  Hotel_Image: {
    data: Buffer,
    type: String,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  ContactNumber: {
    type: String,
    required: true,
  },
  UserName: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: false,
  },
  IsAccepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  IsBlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = Hotel = mongoose.model("Hotel", hotelSchema);
