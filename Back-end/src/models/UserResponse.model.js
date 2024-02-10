const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const userResponse = new Schema({
   user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    adminChecked:{
        type: Boolean,
        required: true,
        default: false,
    }
});
module.exports=UserResponse=mongoose.model('UserResponse', userResponse);