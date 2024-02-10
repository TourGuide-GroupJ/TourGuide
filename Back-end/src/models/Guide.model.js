const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const guideSchema = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    NIC_Number:{
        type: String,
        required: true,
        unique: true
    },
    GuideId_Number:{
        type: String,
        required: true,
        unique: true
    },
    GuideId_Image:{
        data: Buffer, 
        type: String 
    },
    GuideId_ExpiredDate:{
        type:Date,
        required:false
    },
    GuideType:{
        type:String,
        required: false
    },
    Language:{
        type:Array,
        required: false
    },
    Email:{
        type:String,
        required: true,
        unique: true
    }, 
    ContactNumber:{
        type:String,
        required: true
    },  
    Gender:{
        type:String,
        required: false
    }, 
    Image :{
        data: Buffer, 
        type: String 
    }, 
    UserName:{
        type:String,
        required: true,
        unique: true
    }, 
    Password:{
        type:String,
        required: false
    } 
    , 
    IsAccepted:{
        type:Boolean,
        required: true,
        default: false
    } 
    , 
    IsBlocked:{
        type:Boolean,
        required: true,
        default: false
    } 
});
module.exports=Guide=mongoose.model('Guide', guideSchema);