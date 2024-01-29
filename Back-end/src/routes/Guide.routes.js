const express = require('express');
const router = express.Router();
const guideController = require('../controllers/GuideController');

router.post("/guide/save", guideController.saveGuide);
router.get("/guide/guideReg", guideController.getAcceptedGuides);
router.get("/guide/guideprof/:id", guideController.getGuideProfile);
router.put("/guide/updateall/:id", guideController.updateAllGuide);
router.put("/guide/updateprofile/:id", guideController.updateProfileGuide);
router.put("/guide/updateprofilespecial/:id", guideController.updateProfileSpecialGuide);
router.post("/guide/otpalertupdate", guideController.otpAlertUpdate);

module.exports = router;
