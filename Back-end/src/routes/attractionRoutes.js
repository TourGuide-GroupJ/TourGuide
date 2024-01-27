const express = require("express");
const Attraction = require("../models/attractionModel.js");
//const multer = require('multer');
//const path = require('path');



const router = express.Router();

router.post('/attractions', async (req, res) => {
    const { name, description, location } = req.body;
    const photoPath = req.file.path;
  
    // Create a new attraction instance
    const newAttraction = new Attraction({
      name,
      description,
      location,
      photoPath,
    });
  
    try {
      // Save the attraction to the database
      const savedAttraction = await newAttraction.save();
      console.log('Attraction added:', savedAttraction);
  
      res.json({ success: true, message: 'Attraction added successfully' });
    } catch (error) {
      console.error('Error adding attraction:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });

  module.exports = router;