import express from 'express';
const router = express.Router();

/* GET authors page. */
// Definir la ruta para el autor y renderizar la vista author.hbs
router.get('/', function(req, res, next) {
  res.render('author', {
    Name: 'Itzel',
    lastName: 'Mendoza',
    Matricula: 211130234
  });
});

export default router;