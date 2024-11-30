const express = require('express');
const router = express.Router();

// importamos body de express-validator para validar los campos
const { body, validationResult } = require('express-validator');

// importamos la función del envío de mails
const enviarMail = require('../helpers/enviarMails');

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

    if (!usuarioExiste) {
        res.render('login', {
            mensaje: 'Usuario no encontrado,favor Registrese'
        });
    } else {
        res.render('admin');
    }


});

// mostramos la página del registro
router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/creado", async (req, res) => {
    const { nombre, email, password } = req.body;

    const persona = {
        nombre,
        email,
        password
    }

    console.log(persona);

    res.json({
        data: 'Usuario creado con éxito'
    });

});

// ruta para registrar un usuario
router.post("/register",
    [
        body('nombre')
            .isLength({ min: 3, max: 20 }).withMessage('El nombre debe tener entre 3 y 20 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El nombre debe ser de tipo texto')
            .trim(),
        body('email')
            .isLength({ min: 3, max: 45 }).withMessage('El email debe tener entre 3 y 45 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isEmail().withMessage('El correo tiene que existir')
            .trim(),
        body('password')
            .isLength({ min: 8 }).withMessage('El password debe tener como mínimo 8 caracteres')
            .notEmpty().withMessage('El nombre es obligatorio')
            .isString().withMessage('El password debe ser de tipo texto')
            .trim(),

    ]
    , async (req, res) => {

        const errores = validationResult(req);

        const { nombre, email, password } = req.body;


        console.log(errores)



        //1. verificamos que los campos no estén vacíos de forma manual
        /*     if(!nombre || !email || !password){
            return res.render('error', {
                error: 'Todos los campos son obligatorios'
                });
                } */

        //2. verificamos que los campos cumplan ciertas condiciones de forma manual
        /*     if(nombre.length < 3 || nombre.length > 20 || email.length < 3 || email.length > 20 || password.length < 3 || password.length > 8){
        return res.render('error', {
            error: 'El nombre debe tener entre 3 y 20 caracteres'
        });
             } */

        //3. verificamos los tipos de datos de forma manual
        /*     if(typeof nombre !== 'string' || typeof email !== 'string' || typeof password !== 'string'){
        return res.render('error', {
            error: 'Todos los campos deben ser de tipo texto'
        });
             } */
            

        const persona = {
            nombre,
            email,
            password
        }
        console.log(persona);


        try {
            // vemos si ya existe el usuario
            // vemos si ya existe el usuario
            

            if (!errores.isEmpty()) {
                return res.render('error', {
                    error: errores.array().map(error => error.msg)
                });
            }

            const usuarioExiste = await User.findOne({ email })
            console.log(usuarioExiste);

            if (usuarioExiste) {
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

            //enviamos el mail
            enviarMail(email, nombre);

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