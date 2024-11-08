// import express from 'express'; // ES6 

//1. importamos express
const express = require('express'); // ES5

const hbs = require('hbs'); // importamos handlebars

// importamos d para utilizar las variables de entorno
const dotenv = require('dotenv');

const bodyParser = require('body-parser'); // para recibir información de formularios

// ejecutamos la configuración de las variables de entorno
dotenv.config();

//require('dotenv').config(); //en la documentación de dotenv


// creamos un puerto para que escuche el servidor
const PORT = process.env.PORT_SERVER

//2. creamos una instancia de express
const app = express();

// configuramos handlebars
app.set('view engine', 'hbs');

// configuramos la carpeta de las vistas
app.set('views', __dirname + '/views');


// creamos un middleware (una función que está entre la petición y la respuesta)
function middleware(req, res, next) {

    console.log('Soy un middleware');

    //res.send('Hola desde el middleware'); 

    // si no llamamos a next, la petición se queda en el middleware
    next(); // llamamos a la siguiente función
    
}

// aplico el middleware a mi backend
app.use(middleware);

// este middleware se ejecuta en todas las rutas y es lo mismo que el middleware de express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// usamos un middleware de express para recibir información en formato json
app.use(express.json());//

// usamos un middleware de express para recibir información de formularios
app.use(express.urlencoded({ extended: true})); //

// 3. definimos una ruta
app.get('/', (peticion, respuesta)=>{
    respuesta.send('Hola mundo');
}) // método http

app.get('/productos', (req, res)=>{
    //console.log(process);

    console.log(process.env.PORT_SERVER);
    console.log(process.env.DATABASE_URL);
    console.log(process.env.PASSWORD_EMAIL);
    
    
    
    //res.send(process.env) // método http
    res.send(`<h1> Soy la página de productos</h1>`);
}); // método http para obtener información, datos, archivos, etc



// 4. creamos un post (mi servidor va a recibir información)
app.post('/login', (req, res)=>{
    
    let email = req.body.email;
    let password = req.body.password;
    
    console.log(email);
    console.log(password);

    let persona = {
        email: email,
        password: password
    };
    
    
    res.json(persona);      
    
    
});

//  ruta para descargar archivos
app.get('/descargar', (req, res)=>{
    
    console.log("descargando archivo");
    
    res.download('./archivo.txt');
});

app.get('/hbs', (req, res) => {
    
    res.render('index');
});


app.get('/nosotros', (req, res) => {

    res.render('nosotros');
});



app.get('/*', (req, res)=>{
    res.send(`<h1 style= "color: red;"> Tenemos un error </h1>`);
}); // método http para cualquier ruta que no exista

// 5. activamos el servidor / levantamos el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})

