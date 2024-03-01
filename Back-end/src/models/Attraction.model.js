const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const attractionSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Location:{
        type: String,
        required: true,
    },
    PhotoPath:{
        type: String,
        required: true,
    }
},{timestamps:true});
module.exports=Attraction=mongoose.model('Attraction', attractionSchema);