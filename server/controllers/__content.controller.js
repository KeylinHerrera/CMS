/** Imports Frameworks. */
const mongoose = require('mongoose')

/** Imports Modules. */
const Content = require('../models/Content')

/** Gets Contents */
function getContent(req, res) {
  Content.find()
    .exec((err, contents) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200).json(contents)
    })
}

/** Adds Content */
function addContent(req, res) {
  console.log('into add Content controller:', req.body)
  const content = new Content(req.body);

  content.save( err => {
    console.log('into add Content controller2:', content instanceof Content)
    if (err) return res.status(500).send(err);
    return res.status(200).send(content);
  })
}

function deleteContent(req, res){

  Content.remove({
      _id: req.params.content_id
    }, function (err, content) {
      if (err) {
        res.send(err)
      }
      res.json({ message: 'Successfully deleted' });
    }
  )
}

function updateContent(req, res){
   Content.findById(req.params.content_id, function(err, content) {

      if (err)
        res.send(err);

      content.title = req.body.title;
      content.url = req.body.url;
      content.text = req.body.text;

      // save the bear
      content.save(function(err) {
        if (err){
          res.send(err);
        }
        else
        res.json({ message: 'Content updated!' });
      });

   })
}

/** Exports getContent and addContent Modules. */
module.exports = {
  getContent,
  addContent,
  deleteContent,
  updateContent
}