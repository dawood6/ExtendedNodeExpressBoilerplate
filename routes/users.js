
exports = module.exports = function (app, mongoose) {

  var express = require('express');
  var router = express.Router();

  /* GET users listing. */
  router.get('/', function (req, res, next) {
    let User = new app.db.models.User({ name: "Umair", email: "umairahmedbajwa97@gmail.com" });
    User.save().then(data => {
      res.send(data);
    });
  });

  app.use('/user', router);
};
