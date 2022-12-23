//require depedencies
const express = require("express");
const app = express();
require("dotenv").config();
const router = require("./router/cryptoRouter");
const mongoose = require("mongoose");

//CONNECT to MONGOOSE
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //connect and listening to port
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log({ error: error.message });
  });

//MIDDLEWARE - to req body and method
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//MIDDLEWARE - to JSONPARSE
app.use(express.json());

//MIDDLEWARE - to path - BE CAREFULL THIS MUST BE ON THE VERY END
app.use("/crypto/api", router);
