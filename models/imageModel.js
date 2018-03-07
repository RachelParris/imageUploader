const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
  image: {
    type: String,
    default: ""
  }
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;