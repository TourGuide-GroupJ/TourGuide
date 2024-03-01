//export packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


//call functions in the packages
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

try {
  const guideRoutes = require("./routes/Guide.routes.js");
  const hotelRoutes = require("./routes/Hotel.routes.js");
  const adminRoutes = require("./routes/Admin.routes.js");
  const userRoutes = require("./routes/User.routes.js");
  // const auth = require("./authentication/auth.js");

  app.use("/guide",guideRoutes);
  app.use("/hotel",hotelRoutes);
  app.use("/admin",adminRoutes);
  app.use(userRoutes);

  console.log("Route is ok");
} catch (error) {
  console.log(error);
}


//listen to a port
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

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
