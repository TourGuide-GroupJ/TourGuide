const express = require("express");
const router = express.Router();
const userController = require("./controllers/UserController");

router.get("/guide", userController.getAcceptedGuides);

router.post("/register",userController.registerUser);
router.post("/login",userController.loginUser);

router.post("/contactUs", userController.postResponse);

module.exports = router;
