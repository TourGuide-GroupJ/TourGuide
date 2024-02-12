const express = require("express");
const router = express.Router();

const hotelController = require("../controllers/HotelController");

router.post("/hotel/save", hotelController.saveHotel);

module.exports = router;
