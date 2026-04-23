import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Renderiza la vista 'index' con el título y el autor
  res.render('index', { 
    title: 'Proyecto 💫💫', 
    author: 'Itzel Mendoza' 
  });
});

export default router;