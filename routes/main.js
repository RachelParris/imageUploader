const path = require("path");
const express = require("express");
const Image = require("../models/imageModel");
const controller = require("../controllers");
const router = express.Router();


router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/index.html"));
});

router.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/form.html"));
});

router.get("/gallery", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/gallery.html"));
});

router.get("/getImages", function(req, res) {
  Image.find({}, function(err, data) {
    res.json({data});
  });
});

router.post("/upload-image", 
  controller.upload, 
  controller.saveToDisk, 
  controller.sendToDatabase, 
  function(req, res) {
  res.json({ status: "Request received!"});
});

module.exports = router;