const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();


const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/image_uploader')
  .then(function() {
    console.log("Mongoose is connected");
  });

app.use(express.static("public"));
app.use("/", require("./routes/main"));

app.listen(3000, function() {
  console.log("Server started... App listening on port 3000")
});