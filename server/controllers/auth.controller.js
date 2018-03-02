/** Imports Frameworks. */
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

/** Imports Modules. */
const SetUp = require('../models/SetUp')

/** UpDate Page */
function authUser(req, res){
  // Find the user
  SetUp.findOne(
    {
      username: req.body.name
    },
    function(err, user) {
      if (err) throw err

      if (!user) {
        res.json({
          success: false,
          message: 'Authentication failed. User not found.'
        })
      } else if (user) {
        // check if password matches
        if (user.password === req.body.password) {
          // if user is found and password is right
          // create a token with only our given payload
          // we don't want to pass in the entire user since that has the password
          const payload = {
            name: user.username,
          }

          const token = jwt.sign(payload, 'mysupersecret', {
            expiresIn: '24h'
          })

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          })
        } else {
          res.json({
            success: false,
            message: 'Authentication failed. Wrong password.'
          })
        }
      }
    }
  )
}

/** Exports getPage and addPage Modules. */
module.exports = {
  authUser
}