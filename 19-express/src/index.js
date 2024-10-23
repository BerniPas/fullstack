
//importar lodos los archivos de express
const express = require('express'); 

//crear una aplicacion de express
const app = express();

// asignamos un puerto a la aplicacion
const PORT = 9000;

// creamos una ruta para la raiz de la aplicacion
// le paso dos parametros, la ruta y una funcion
app.get('/', function (peticion, respuesta) {

    // ver la peticion del cliente
    console.log('===================================================');
    console.log('Peticion del cliente: ', peticion);
    console.log(peticion.header);
    console.log(peticion.method);
    console.log(peticion.url);
    console.log(peticion.query);
    console.log(peticion.body);
    console.log('===================================================');
    

    // enviamos una respuesta al cliente de tipotexto
    respuesta.end('Bienvenido a mi primer servidor con Express');
    
});

// creamos otra ruta para la seccion de productos
app.get('/productos', (req, res) => {

    // enviar una respuyesta tipo html
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>
                Soy la Página de Productos
            </h1>
        </body>
        </html>`);
} );

// creamos una ruta para enviar datos desde una database
app.get('/database', (req, res) => {

    console.log('Tenemos conexión a una database');

    let conectar = true;

    if(conectar){
        res.json({
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 30
        });
    } else {
        res.json({
            error: 'No se pudo conectar a la base de datos'
        });
    }
    

/*     res.json({
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30
    }); */

});


// levantamos el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor express escuchando en el puerto ${PORT}`);
});
