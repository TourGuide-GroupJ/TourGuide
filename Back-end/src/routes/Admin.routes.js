const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');

router.get("/guide/search/:id", AdminController.searchGuide);
router.patch("/guide/admin/accept/:id", AdminController.acceptGuide);
router.patch("/guide/admin/block/:id", AdminController.blockGuide);
router.patch("/guide/admin/unblock/:id",AdminController.unblockGuide);
router.delete("/guide/delete/:id", AdminController.deleteGuideById);

module.exports = router;
