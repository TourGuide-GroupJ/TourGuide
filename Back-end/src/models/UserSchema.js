const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    
    },
    lastName: {
        type: String,
        required: true,
    
    },
    password:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        require: true,
    }
    
});

module.exports =User=mongoose.model('User', UserSchema);