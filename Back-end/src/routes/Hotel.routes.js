const express = require("express");
const router = express.Router();

const hotelController = require("../controllers/HotelController");

router.post("/save", hotelController.saveHotel);

module.exports = router;
