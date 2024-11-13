const express = require('express');
const router = express.Router();

// responde a la ruta '/user'

router.get("/", (req, res) => {
    res.render("user");
});

router.get("/login", (req, res) => {
    res.render("login");
});


module.exports = router; //ES5