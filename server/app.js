import createError from ('http-errors');
import express from ('express');
import path from ('path');
import { fileURLToPath } from 'node: url';
import cookieParser from ('cookie-parser');
import logger from ('morgan');
import hbs from 'hbs';

//registro de  ruta a los  enrotadores 
import indexRouter from '#/routes/index.js';
import usersRouter from '#/routes/users.js'
import authorRouter from '# /routes/autors.js'; // Agregamos la 's' para que coincida con autors.js
//Importando el registrador de Helpers
import {registerHelpers} from './';

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//Registro de los helpers para el ENGINE
registerViteHelpers(hbs);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Archivos estativos de vit
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '', 'dist')));
}
//Acrhivos estaticos de backend
app.use(express.static(path.join(__dirname, '../public')));

//registro de la ruta a los enrotadores

 
//uso de las rutas 
app.use(['/', '/index'], indexRouter);
app.use('/users', usersRouter);
app.use('/author', authorRouter);  //Agregamos el uso del enrutador al author

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
