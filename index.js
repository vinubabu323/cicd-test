const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// //Connec to MongoDB (replace 'mongodb://localhost:27017/test' with your MongoDB URI)
// mongoose.connect("mongodb://localhost:27017/cicd-test");

// // Check for DB connection
// mongoose.connection.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
