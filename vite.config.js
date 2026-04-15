// Importo la funcion de configuracion de Vite
import { defineConfig } from 'vite';
//Importo un resolvedor de rutas
import { resolve } from 'node:path';

//Exportar una instancia de configuración
export default defineConfig({
      //directorio raiz de los arhivos funtes
    root:'src',
    //configuracion de servidor
    // de desarrollo de front-end
    server:{
        port:5173,
        strictPort: true   //no va a buscar otro puerto ,si esta ocupado es mejor que nos de un aviso que esta ocupado 
     },
     //configuracion del bull
     build:{
        //directorio de salida
        outdir:'.../dist',
        emptyOutDir: true,
        //generar un manifiesto
        manifest: true,
        rollOptions:{
            input:{
                main: resolve(__dirname,'src/main.js')
            }
        },
     },
     //configurar para el desarrollo
     publicDir: false,
})

