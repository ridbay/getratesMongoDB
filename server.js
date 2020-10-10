
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoose = require("mongoose");


//Create an instance of express
const app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json("Welcome to Getrates User");
});

//Require Users routes
let userRoutes = require("./src/routes/user");
userRoutes(app);


// Configuring the database
// const dbConfig = require("./config/database.config.js");
//Remove Mongodb warning error

mongoose.set("useCreateIndex", true);
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

//Remove Mongodb warning error

mongoose.set("useCreateIndex", true);


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});


module.exports = app;