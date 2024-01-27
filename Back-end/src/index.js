//export packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const bodyParser = require("body-parser");

//call functions in the packages
const app = express();
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:true}));

try {
  const guideRoutes = require("./routes/Routes.js");
  const attractionRoutes = require("./routes/attractionRoutes.js");

  app.use(guideRoutes);
  //app.use(attractionRoutes);

  console.log("Route is ok");
} catch (error) {
  console.log(error);
}

//app.use(bodyParser.json());

//listen to a port
const PORT = 4000;
const GUIDE_URL =
  "mongodb+srv://Admin:Admin123@guidedata.k6o74kz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(GUIDE_URL)
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
