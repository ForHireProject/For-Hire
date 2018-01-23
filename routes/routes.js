
// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET all
    app.get("/", function (req, res) {
        console.log("working");
        db.Worker.findAll({}).then(function(data) {
            var hbsObject = {
                workers: data
            };
            console.log("THIS IS workers DATA ===>",hbsObject);
            res.render("workers", {workers:data})
        })
    });
};


