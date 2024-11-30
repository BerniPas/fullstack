
// 1. Importamos los módulos necesarios
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');


// importamos las rutas de la aplicación
const routerHome = require('./router/routerHome');
const routerUser = require('./router/userRouter');
const routerProduct = require('./router/routerProduct');

// 2. Creamos una instancia de express
const app = express();

// 3. Configuaración de middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "/public")));
app.use(morgan('dev')); 


// Rutas de la aplicación como middleware
app.use('/', routerHome);
app.use('/user', routerUser);
app.use('/product', routerProduct);

// Ruta para probar el middleware de error
/* app.get("/error", (req, res) => {
    throw new Error("Error forzado");
}); 
 */

// Middleware para manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render("error", 
        {
            error: err.message,
        }
    );
});

// 4. Configuración de handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));


// 6. Error 404
app.get("/*", (req, res) => {
    res.status(404).render("error",
        {
            error: "404 - Página no encontrada",
        }
    );
});

module.exports = app; //ES5

//export default app; //ES6 react 