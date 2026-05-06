import createError from 'http-errors';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import hbs from 'hbs';

// Importando enrutadores con rutas relativas correctas
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import authorRouter from './routes/author.js';
import { registerViteHelper } from './lib/vite.js';

// Importando el registrador de helpers (Asegúrate que la carpeta sea lib)
//import { registerViteHelper } from './lib/vite.js';

const app = express();

// Recreando variables de entorno para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del motor de plantillas (Views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Registro de helpers
//registerViteHelper(hbs);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Archivos estáticos generales
app.use(express.static(path.join(__dirname, '../public')));

// Configuración para producción
if (process.env.NODE_ENV === "production" ){
  app.use(express.static(path.join(__dirname, '..', 'dist')));

  console.log("Ruta: " + path.join(__dirname, 'public'));
}

// Registro de rutas en la aplicación
app.use(['/', '/index'], indexRouter);
app.use('/users', usersRouter);
app.use('/author', authorRouter);

// Manejador de error 404
app.use(function(req, res, next) {
  next(createError(404));
});

// Manejador de errores generales

app.use(function(err, req, res, next) { 
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

export default app;