
// 1. Importamos los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

// Importar dependencias
const dotenv = require('dotenv');
dotenv.config();

// importamos las rutas de la aplicación
const routerUser = require('./router/userRouter');

// 2. Creamos una instancia de express
const app = express();

// Importamos la variable de entorno
const PORT = process.env.PORT;
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

// Conectar a la base de datos
const conexion = require('./conexion/conexion');

// 3. Configuaración de middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev')); 
app.use(cors());


// Rutas de la aplicación como middleware
app.use('/user', routerUser);

//conexion();   
conexion(MONGO_ATLAS);


// 6. Error 404
app.get("/", (req, res) => {
    res.send(`<h1>Bienvenido a la Api Rest</h1>`);
});


// levantar el server y otra forma de manejo del error
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`)
});
