const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
//const multer = require('multer');

router.get("/guide/search/:id", AdminController.searchGuide);
router.patch("/guide/admin/accept/:id", AdminController.acceptGuide);
router.patch("/guide/admin/block/:id", AdminController.blockGuide);
router.patch("/guide/admin/unblock/:id",AdminController.unblockGuide);
router.delete("/guide/delete/:id", AdminController.deleteGuideById);

//****************************************************************/
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/'); // Adjust the destination folder as needed
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

// const upload = multer({ storage });

// Route for adding attraction    .............., upload.single('photo')

router.post('/attractions/save', AdminController.addAttraction);


module.exports = router;
