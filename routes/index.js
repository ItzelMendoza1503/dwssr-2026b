var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Proyecto 💫💫' });
  res.render('index', { title: 'Proyecto 💫💫', author: 'Itzel Mendoza' });
});

module.exports = router;
