const userRoutes =require("./routes/userRoutes");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 8080;
require("dotenv").config();
const app = express();


require("./db");
const User = require("./MODELS/UserSchema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());
app.use(cors());



function authenticateToken(req, res, next){
    const token = req.header.authrization.split(' ')[1];

    const { id } = req.body;

    if (!token) return res.status(401).json({message: 'Auth Error'});


    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET_KEY);

        if(id && decoded.id !== id){
            return res.status(401).json({message: 'Auth Error'})
        }
        req.id = decoded;
        next();

    }

    catch(err){
        console.log(err);
        res.status(500).json({message :'invalid Token'})
    }
}



app.get("/", (req, res) => {
  res.send("The API is working!");
});



 app.get('/getmyprofile',authenticateToken, async(req,res) =>{
    const {id} = req.body;
    const user = await User.findById(id);
    res.status(200).json({user})
 })

app.use("/users",userRoutes);

app.listen(PORT, () => {
  console.log(`Sevrer running on port ${PORT}`);
});
