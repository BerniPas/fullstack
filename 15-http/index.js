
// librería de node que trabaja con el protocolo http
const http = require('http');

// librería de node que trabaja con archivos
const fs = require('fs');


// esto es el backend de mi aplicacion
const servidor = http.createServer((peticion, respuesta)=>{

    //console.log('Peticion entrante: ', peticion);

    console.log('===========================================');
    console.log('===========================================');
    
    
    console.log('URL: ', peticion.url);

    console.log('===========================================');
    console.log('===========================================');
    
    console.log('Metodo: ', peticion.method);
    
    console.log('===========================================');
    console.log('===========================================');
    
    const url = peticion.url;
    
    // conocer la ruto que pide el cliente
/*     if(url === '/'){
        respuesta.end('Bienvenido a la Aplicación');
    } if (url === '/producto'){
        respuesta.end('<h1>Estas en la sección de productos</h1>');
    } else{
        respuesta.end('Error 404');
    } */

    switch (url) {
        case '/':

            //leer un archivo
            fs.readFile('./index.html', 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);
                respuesta.end(data);
            }); 
        break;
        case '/productos':
            fs.readFile('./productos.html', (err, data) => {
                if (err) throw err;
                console.log(data);
                respuesta.end(data);
            });
        break;
        default:
            respuesta.end('Error 404');
        break;
    }

});

const PORT = 9000;

//ponemos en línea el servidor

// listen: es el método para levantar la aplicación
// 1. Puerto: el canal por donde se va a ejecutar la aplicación
servidor.listen(PORT, ()=>{ 
    console.log(`Servidor en línea en el puerto ${PORT}`);
}); 



