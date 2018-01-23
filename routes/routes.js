var express = require("express");
var router = express.Router();

// Model burger
let db = require("../models");

// GET
router.get("/", function(req, res) {
      res.render("homePage", {data: data});
    });
});

module.exports = router;

// API CALLS
