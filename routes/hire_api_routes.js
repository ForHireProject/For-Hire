var db = require("../models");

module.exports = function(app) {
  app.get("/api/hires", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.ForHire.findAll({
      include: [db.Post]
    }).then(function(dbForHire) {
      res.json(dbForHire);
    });
  });

  app.get("/api/hires/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.ForHire.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbForHire) {
      res.json(dbForHire);
    });
  });

  app.post("/api/hires", function(req, res) {
    db.ForHire.create(req.body).then(function(dbForHire) {
      res.json(dbForHire);
    });
  });

  app.delete("/api/hires/:id", function(req, res) {
    db.ForHire.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbForHire) {
      res.json(dbForHire);
    });
  });

};
