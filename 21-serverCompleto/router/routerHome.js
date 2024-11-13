const express = require('express');
const router = express.Router();

// esta ruta responde a '/' 

router.get("/", (req, res) => {
    res.render("index");
});

/* router.get("/", (req, res) => {
    res.sendFile("index.html");
}); */


module.exports = router; //ES5