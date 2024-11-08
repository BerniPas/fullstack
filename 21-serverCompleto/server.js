
// Importar dependencias
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');

// Importamos la variable de entorno
const PORT = process.env.PORT;



// Conectar a la base de datos


// levantar el server y otra forma de manejo del error
const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor: ${error}`)
});




