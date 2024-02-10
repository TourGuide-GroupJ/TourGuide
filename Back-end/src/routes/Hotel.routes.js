const express = require("express");
const router = express.Router();
const hotelController = require("../controllers/HotelController");

router.post("/hotel/save", hotelController.saveHotel);
router.get("/hotel/hotelReg", hotelController.getAcceptedHotels);
// router.get("/hotel/hotelprof/:id", hotelController.gethotelProfile);
// router.put("/hotel/updateall/:id", hotelController.updateAllhotel);
// router.put("/hotel/updateprofile/:id", hotelController.updateProfilehotel);
// router.put(
//   "/hotel/updateprofilespecial/:id",
//   hotelController.updateProfileSpecialhotel
// );
// router.post("/hotel/otpalertupdate", hotelController.otpAlertUpdate);

module.exports = router;
