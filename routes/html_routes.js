// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });

  // cms route loads cms.html
  app.get("/offerService", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/offerService.html"));
  });

  // blog route loads blog.html
  app.get("/availableService", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/availableService.html"));
  });

  // // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });

};
