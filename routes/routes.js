var express = require("express");
var router = express.Router();

// Model burger
var db = require("../models");

// GET
router.get("/", function(req, res) {
      res.render("homePage");
    });
});

module.exports = router;

// API CALLS
