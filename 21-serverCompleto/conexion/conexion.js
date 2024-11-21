const mongoose = require('mongoose');


//1. Conexión directa
//mongoose.connect('mongodb://localhost:27017/fullstack')


//2. Conexión con variables de entorno
/* const dotenv = require('dotenv');
dotenv.config();

const MONGO_LOCAL = process.env.MONGO_LOCAL;
const MONGO_ATLAS = process.env.MONGO_ATLAS; //no existe en el archivo .env

console.log('==================================');
console.log('MONGO_LOCAL:', MONGO_LOCAL);
console.log('MONGO_ATLAS:', MONGO_ATLAS);
console.log('=================================='); */

/* const conexion = async (MONGO_LOCAL) => {
    try {
        await mongoose.connect(MONGO_LOCAL);
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.log('Error en la conexión a la base de datos:', error);
    }
} */

// 3. Conexión a la base de datos con URL de parámetro
const conexion = async (URL) => {
    try {
        await mongoose.connect(URL);
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.log('Error en la conexión a la base de datos:', error);
    }
}

module.exports = conexion;