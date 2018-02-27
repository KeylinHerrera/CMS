/** Imports Frameworks. */
const mongoose = require('mongoose')

/** Imports Modules. */
const SetUp = require('../models/SetUp')

/** Gets Users */
function getAll(req, res) {
  SetUp.find()
    .exec((err, users) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(users)
    })
}

/** Adds User */
function addUser(request, response) {

  let db_string = `mongodb://localhost:27017/${request.body.database}`;
  mongoose.connect(db_string);

  let user = new SetUp();
  user.username = request.body.name;
  user.password = request.body.password;

  user.save(function (error) {
    /** Checks if an error happened. */
    if (error) {
      /** An error happened. It sends the error. */
      response.send(`An error occurred: ${error}`)
    }
    response.json(user)
  });
}

/** Exports getAll and addUser Modules. */
module.exports = {
  getAll,
  addUser,
}

