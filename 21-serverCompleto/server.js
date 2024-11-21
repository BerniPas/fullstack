
// Importar dependencias
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');

// Importamos la variable de entorno
const PORT = process.env.PORT;
const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS;

// Conectar a la base de datos
const conexion = require('./conexion/conexion');
//conexion();   
conexion(MONGO_LOCAL);



// levantar el server y otra forma de manejo del error
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`)
});




