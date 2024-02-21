const express = require('express');
const router = express.Router();
const guideController = require('../controllers/GuideController');

router.post("/save", guideController.saveGuide);
// router.get("/guideReg", guideController.getAcceptedGuides);
router.get("/guideprof/:id", guideController.getGuideProfile);
router.put("/updateall/:id", guideController.updateAllGuide);
router.put("/updateprofile/:id", guideController.updateProfileGuide);
router.put("/updateprofilespecial/:id", guideController.updateProfileSpecialGuide);
router.post("/otpalertupdate", guideController.otpAlertUpdate);

module.exports = router;
