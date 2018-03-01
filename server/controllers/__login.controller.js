const mongoose = require('mongoose')

const LogIn = require('../models/LogIn')

function getLogIn(req, res) {
  LogIn.find()
    .exec((err, logIns) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200).json(logIns)
    })
}

function addLogIn(req, res) {

  console.log('into add LogIn controller:', req.body)
  
  const logIn = new LogIn(req.body);

  logIn.save( err => {
    console.log('into add LogIn controller2:', logIn instanceof LogIn)
    if (err) return res.status(500).send(err);
    return res.status(200).send(logIn);
  })
}

module.exports = {
  getLogIn,
  addLogIn,
}