const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");

//Guide
router.get("/guides/search/:id", AdminController.searchGuide);
router.patch("/guides/accept/:id", AdminController.acceptGuide);
router.patch("/guides/block/:id", AdminController.blockGuide);
router.patch("/guides/unblock/:id", AdminController.unblockGuide);
router.delete("/guides/delete/:id", AdminController.deleteGuideById);

//Hotel
router.get("/hotels/search/:id", AdminController.searchHotel);
router.patch("/hotels/accept/:id", AdminController.acceptHotel);
router.patch("/hotels/block/:id", AdminController.blockHotel);
router.patch("/hotels/unblock/:id", AdminController.unblockHotel);
router.delete("/hotels/delete/:id", AdminController.deleteHotel);

router.post("/attractions/save", AdminController.addAttraction);

module.exports = router;
