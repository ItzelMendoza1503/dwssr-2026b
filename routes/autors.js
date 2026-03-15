var express = require('express');
var router = express.Router();

/* GET authors page. */
//definir la ruta para el autor y renderizar la vista author.hbs cuando se acceda a la ruta /author
router.get('/', function(req, res, next) {
  res.render('author', {
    Name:'Itzel',
    lastName: 'Mendoza',
    Matricula:211130234
    
  });
});

module.exports = router;
