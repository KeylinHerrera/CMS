const mongoose = require('mongoose')

const Page = require('../models/Page')

function getPage(req, res) {
  Page.find()
    .exec((err, pages) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200).json(pages)
    })
}

function addPage(req, res) {

  console.log('into add Page controller:', req.body)
  
  const page = new Page(req.body);

  page.save( err => {
    console.log('into add Page controller2:', page instanceof Page)
    if (err) return res.status(500).send(err);
    return res.status(200).send(page);
  })
}

module.exports = {
  getPage,
  addPage,
}