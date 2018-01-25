
// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {



    // GET all workers
    app.get("/workers", function (req, res) {
        console.log("working");
        db.Worker.findAll({}).then(function (data) {
            var hbsObject = {
                workers: data
            };
            console.log("THIS IS workers DATA ===>", hbsObject);
            res.render("workers", hbsObject)
        })
    });

    // GET all workers
    app.get("/homePage", function (req, res) {
        console.log("working");
        db.Worker.findAll({}).then(function (data) {
            var hbsObject = {
                workers: data
            };
            console.log("THIS IS workers DATA ===>", hbsObject);
            res.render("homePage", hbsObject)
        })
    });

    // Get route for returning posts of a specific category
    app.get("/category/", function (req, res) {
        console.log("============= ============= ==============",req.params.category);
        db.Worker.findAll({
            // where: {
            //     category: "Service Sector"
            // }
        }).then(function (data) {
            res.render("category", { category: data })
          });
    });
  
    
}


