const express = require('express');
const router = express.Router();

//importamos el esquema del usuario
const User = require('../models/userModel');

// responde a la ruta '/user'

router.get("/", (req, res) => {
    res.render("user");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", (req, res) => {   
    
    const { nombre, email, password} = req.body;

    const persona = {
        nombre,
        email,
        password
    }
    console.log(persona);

    const newUser = new User(persona);

    newUser.save();

    res.json(persona);
});

module.exports = router; //ES5