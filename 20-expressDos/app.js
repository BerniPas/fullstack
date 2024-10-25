
//1. importamos express
const express = require('express');

// creamos un puerto para que escuche el servidor
const PORT = 8080;

//2. creamos una instancia de express
const app = express();

// 3. definimos una ruta
app.get('/', (peticion, respuesta)=>{
    respuesta.send('Hola mundo');
}) // método http

app.get('/productos', (req, res)=>{
    console.log(process);
    //res.send(process.env) // método http
    res.send(`<h1> Soy la página de productos</h1>`);
}); // método http para obtener información, datos, archivos, etc

app.get('/*', (req, res)=>{
    res.send(`<h1 style: color: red;> Tenemos un error </h1>`);
}); // método http para cualquier ruta que no exista


// 4. creamos un post (mi servidor va a recibir información)
app.post('/login', (req, res)=>{

    let email = req.body.email;
    let password = req.body.password;

    console.log(email);
    console.log(password);


    res.send('Datos recibidos');   
    


});


// 5. activamos el servidor / levantamos el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})



