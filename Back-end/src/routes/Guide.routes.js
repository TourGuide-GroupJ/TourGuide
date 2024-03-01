const express = require('express');
const router = express.Router();
const guideController = require('../controllers/GuideController');
const auth = require("../authentication/auth.js");

router.post("/save", guideController.saveGuide);
// router.get("/guideReg", guideController.getAcceptedGuides);
router.get("/guideprof",auth,guideController.getGuideProfile);
router.put("/updateall",auth, guideController.updateAllGuide);
router.put("/updateprofile",auth, guideController.updateProfileGuide);
router.put("/updateprofilespecial",auth, guideController.updateProfileSpecialGuide);
router.post("/otpalertupdate", guideController.otpAlertUpdate);

module.exports = router;
