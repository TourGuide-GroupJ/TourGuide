const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  hotelName: {
    type: String,
    required: true,
  },
  hotelLicenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  hotelType: {
    type: String,
    required: false,
  },
  hotelClass: {
    type: String,
    required: false,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAccepted: {
    type: Boolean,
    required: true,
    default: false,
  },
  isBlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
},{timestamps:true});
module.exports = Hotel = mongoose.model("Hotel", hotelSchema);

//const Hotel = mongoose.model("Hotel", hotelSchema);
//module.exports = Hotel;
