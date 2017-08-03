var express = require('express');
var router = express.Router();
var path = require('path');
var directory = 'public/downloadables/';
var fs = require('fs');
var myDate = require('datejs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readdir(directory, function (err, files) {
    if (err) return console.error(err);
    res.render('index', {
      title: 'Hivebot Classes',
      files: files
    });
  });

});

router.get('/download/:filename', function (req, res, next) {
  var file = directory + req.params.filename;
  res.download(file);
});

router.post('/test', function (req, res, next) {
  var body = req.body;
  console.log(body);
  res.send(body);

});

module.exports = router;
