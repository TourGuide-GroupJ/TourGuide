const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get("/guide", userController.getAcceptedGuides);

module.exports = router;
