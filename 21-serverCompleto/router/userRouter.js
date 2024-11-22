const express = require('express');
const router = express.Router();

// librería para encriptar contraseñas
const bcrypt = require('bcrypt');

//importamos el esquema del usuario
const User = require('../models/userModel');

// responde a la ruta '/user'

// mostramos la página con la lista de usuarios
router.get("/", (req, res) => {
    res.render("user");
});

// mostramos la página de administración
router.get("/admin", (req, res) => {
    res.render("admin");
});

// mostramos la página del login
router.get("/login", (req, res) => {
    res.render("login");
});

// ruta para loguear un usuario
router.post("/login", async (req, res) => {

    const { email, password } = req.body   

    console.log(email, password);

    // vemos si ya existe el usuario
    const usuarioExiste = await User.findOne({ email })
    console.log(usuarioExiste);

    if(!usuarioExiste){
        res.render('login', {
            mensaje: 'Usuario no encontrado,favor Registrese'
        });
    }else{
        res.render('admin');
    }
    
    
});

// mostramos la página del registro
router.get("/register", (req, res) => {
    res.render("register");
});

// ruta para registrar un usuario
router.post("/register", async (req, res) => {   
    
    const { nombre, email, password } = req.body;

    const persona = {
        nombre,
        email,
        password
    }
    console.log(persona);

    
    try {
        // vemos si ya existe el usuario
        // vemos si ya existe el usuario
        const usuarioExiste = await User.findOne({ email })
        console.log(usuarioExiste);
    
        if(usuarioExiste){
            return res.render('login', {
                mensaje: 'El usuario ya existe, favor loguearse'
            });
        }

        // si el user no existe, encriptamos la contraseña
        //1. creamos la sal para encriptar la contraseña
        const salt = bcrypt.genSaltSync(10);
        console.log(salt);

        //2. encriptamos la contraseña
        persona.password = await bcrypt.hashSync(password, salt);
        console.log(persona.password);
        
        const newUser = new User(persona);
        
        await newUser.save(); 
        
        return res.render('creado', {
            mensaje: 'Usuario registrado con éxito, favor loguearse'
        });

        
    } catch (error) {
        return res.render('error', {
            error: 'Error al registrar el usuario, favor intentar nuevamente'
        })
    }

});

module.exports = router; //ES5