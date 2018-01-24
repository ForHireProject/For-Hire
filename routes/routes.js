
// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET all workers
    app.get("/workers", function (req, res) {
        console.log("working");
        db.Worker.findAll({}).then(function(data) {
            var hbsObject = {
                workers: data
            };
            console.log("THIS IS workers DATA ===>",hbsObject);
            res.render("workers", {workers:data})
        })
    });

    // Get route for returning posts of a specific category
    app.get("/api/posts/category/", function (req, res) {
        console.log("============= ============= ==============",req.params.category);
        db.Worker.findAll({
            where: {
                category: "Service Sector"
            }
        }).then(function (data) {
           var test = { 
                service: true, 
                construction: false, 
                mechanic: false,
                industrial: false 
            }
            res.render("category", { test })
          });
    });
  
    
};


