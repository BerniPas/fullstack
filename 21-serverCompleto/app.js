
// 1. Importamos los módulos necesarios
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

// 2. Creamos una instancia de express
const app = express();

// 3. Configuaración de middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); 

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

// 5. Definimos las rutas
app.get("/", (req, res) => {
    res.render("index");
});

// 5.1 lanzamos un archivo html
app.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

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