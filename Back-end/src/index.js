//export packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")
//const bodyParser = require("body-parser");

//call functions in the packages
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
//app.use(express.urlencoded({extended:true}));

try {
  // const guideRoutes = require("./routes/Routes.js");
  // const attractionRoutes = require("./routes/attractionRoutes.js");
  // app.use(guideRoutes);
  // app.use(attractionRoutes);

  const guideRoutes = require("./routes/Guide.routes.js");
  const adminRoutes = require("./routes/Admin.routes.js");
  const userRoutes = require("./routes/User.routes.js")
  app.use(guideRoutes);
  app.use(adminRoutes);
  app.use(userRoutes);



  console.log("Route is ok");
} catch (error) {
  console.log(error);
}

//app.use(bodyParser.json());

//listen to a port
const PORT = process.env.PORT
const DB_URI = process.env.DB_URI
  
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Success");
  })
  .catch((Error) => {
    console.log("DB connection Error", Error);
  });

app.listen(PORT, () => {
  console.log("ok");
});

/*
mongoose.connect(GUIDE_URL + '/your-database-name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Success");
    })
    .catch((Error) => {
        console.log("DB connection Error", Error)
    });

*/
