const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.Mongo_URL).then(
    () =>{
        console.log('Connected to database');
    }
).catch((err) => {
    console.log('Error connecting to database' + err);
})

const LoginSchema = new mongoose.Schema({ //
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("collection1",LoginSchema)
module.exports = collection