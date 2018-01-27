
// Grabbing our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET all workers
    app.get("/workersList", function (req, res) {
        console.log("working");
        db.Worker.findAll({})
        //render portion of the code, create logic to filter whats DATA is rendered
        .then(function (data) {
        //   the connection to to handlebars
            var hbsObject = {
                workers:  data
            };
            console.log("hbsObject SUCCESS", data);
            res.render("workersList", hbsObject)
        })
    });

    // GET route - homePage
    app.get("/homePage", function (req, res) {
        console.log("homePage is working");
        db.Worker.findAll({}).then(function (data) {
            var hbsObject = {
                worker: data
            };
            console.log("THIS is workers DATA heyyooo", hbsObject);
            res.render("homePage", hbsObject)
        })
    });

    //GET sign-up form
    app.get("/signupForm", function (req, res) {
            res.render("signupForm");
    });

    app.get("/servicesList", function(req, res) {
        res.render("servicesList");
    });

    app.get("/*", function (req, res) {
        res.render("homePage");
    });
    


  // NEW USER info after sign-up, ADD to DATABASE
    // app.post("/api/new", function (req, res) {
    //     // Take the request...
    //     var newWorker = req.body;
    //     console.log(newWorker);

    //     // Create a routeName

    //     // Using a RegEx Pattern to remove spaces from newWorker.name
    //     // RegEx Patterns https://www.regexbuddy.com/regex.html
    //     // var routeName = newWorker.name.replace(/\s+/g, "").toLowerCase();
    //     var validEmail = newWorker.email.replace(/\b[A - Z0 - 9._ % +-] +@[A - Z0 - 9. -]+\.[A - Z]{ 2,} \b/g, "").toLowerCase();

    //     // Then add the newWorker to the database using sequelize
    //     newWorker.create({
    //         name: name,
    //         zip_code: newWorker.zip_code,
    //         validEmail: validEmail,
    //         phone: newWorker.phone,
    //         service: newWorker.service
    //     });
    // });  
    
}
// section for left over testing stuff or local stuff. Will clean later before we ship.


  
            // var canWork = [];
            // for (let i = 0; i < data.length; i++) {
            //     const avail = data[i];
            //     console.log("avail ====>>>>>>@@@@@", avail.dataValues.availability);//testing in console
            //     //if availability === 1 
            //     if (avail.dataValues.availability === true){
            //         canWork.push(data[i]);
            //     }
                
            // }


// app.get("/forHireForm", function (req, res) {
    //         res.render("forHireForm")
    // });

    // was in the GET sign up form area 


    //  // Get route for returning posts of a specific category
    // app.get("/category", function (req, res) {
    //     db.Worker.findAll({
    //         // some possible filter here
    //     }).then(function (data) {
    //         console.log("data ====>>>>>>@@@@@", data);
    //         var canWork = [];
    //         for (let i = 0; i < data.length; i++) {
    //             const avail = data[i];
    //             console.log("avail ====>>>>>>@@@@@", avail.dataValues.availability);//testing in console
    //             //if availability === 1 
    //             if (avail.dataValues.availability === true) {
    //                 canWork.push(data[i]);
    //             }

    //         }
    //         var hbsObject = {
    //             category: canWork
    //         };
    //         console.log("hbsObject ====>>>>>>@@@@@", canWork);
    //         res.render("category", hbsObject)
    //     })
    // });     is left over stuff we used for IF AVAILABLE for loop.