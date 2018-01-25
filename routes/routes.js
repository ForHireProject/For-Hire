
// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET all workers
    app.get("/workers", function (req, res) {
        console.log("working");
        db.Worker.findAll({})
        //render portion of the code, create logic to filter whats DATA is rendered
        .then(function (data) {
            
            var canWork = [];
            for (let i = 0; i < data.length; i++) {
                const avail = data[i];
                console.log("avail ====>>>>>>@@@@@", avail.dataValues.availability);//testing in console
                //if availability === 1 
                if (avail.dataValues.availability === true){
                    canWork.push(data[i]);
                }
                
            }
            var hbsObject = {
                workers: canWork
            };
            console.log("hbsObject ====>>>>>>@@@@@", canWork);
            res.render("workers", hbsObject)
        })
    });

    // GET route - homePage
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

    // GET route sign-up form
    app.get("/forHireForm", function (req, res) {
            res.render("forHireForm")
    });

    // Get route for returning posts of a specific category
    app.get("/category", function (req, res) {
        db.Worker.findAll({
            // some possible filter here
        }).then(function (data) {
            console.log("data ====>>>>>>@@@@@", data);
            var canWork = [];
            for (let i = 0; i < data.length; i++) {
                const avail = data[i];
                console.log("avail ====>>>>>>@@@@@", avail.dataValues.availability);//testing in console
                //if availability === 1 
                if (avail.dataValues.availability === true) {
                    canWork.push(data[i]);
                }

            }
            var hbsObject = {
                category: canWork
            };
            console.log("hbsObject ====>>>>>>@@@@@", canWork);
            res.render("category", hbsObject)
        })
    });
  
    
}


