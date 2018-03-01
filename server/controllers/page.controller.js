/** Imports Frameworks. */
const mongoose = require('mongoose')

/** Imports Modules. */
const Page = require('../models/Page')

/** Gets Pages */
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

/** Adds Page */
function addPage(req, res) {
  console.log('into add Page controller:', req.body)
  const page = new Page(req.body);

  page.save( err => {
    console.log('into add Page controller2:', page instanceof Page)
    if (err) return res.status(500).send(err);
    return res.status(200).send(page);
  })
}

/** Delete Page */
function deletePage(req, res){
  Page.remove({
      _id: req.params.page_id
    }, function (err, page) {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' });
    }
  )
}

/** UpDate Page */
function updatePage(req, res){
   Page.findById(req.params.page_id, function(err, page) {

      if (err)
        res.send(err);

      page.title = req.body.title;
      page.url = req.body.url;
      page.text = req.body.text;

      // save the bear
      page.save(function(err) {
        if (err)
          res.send(err);
        else
        res.json({ message: 'Page updated!' });
      });

   })
}

/** Exports getPage and addPage Modules. */
module.exports = {
  getPage,
  addPage,
  deletePage,
  updatePage
}