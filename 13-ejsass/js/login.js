

//declaro las variables
let email;
let password;

//base de datos
let emailDatos = "pepe@gmail.com";
let passwordDatos = "12345678";
let botonEnviar = document.getElementById("botonEnviar");


// ######################################################################

// agregamos el evento al BUTTON con el id "botonEnviar"

botonEnviar.addEventListener('click', (e) => {

    e.preventDefault();

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(email === "" || password === ""){

        alert("Complete los campos");

        return;
        
    }

    //DOM avanaado de JS
    // guardamos datos en el localsotrage: es la memoria local del navegador
    //                      key     value
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    if(email === emailDatos && password === passwordDatos){
        window.location.href = "./cargarProductos.html";
    }else{
        window.location.href = "./error.html";
    }


});


// ######################################################################


// agregamos el evento al FORMULARIO

let formulario = document.getElementById("miForm");



formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    // validaciones
    if(email === "" || password === ""){

        alert("Complete los campos");

        return;
        
    }

    //DOM avanaado de JS
    // guardamos datos en el localsotrage: es la memoria local del navegador
    //                      key     value
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);


    if(email === emailDatos && password === passwordDatos){
        window.location.href = "./cargarProductos.html";
    }else{
        window.location.href = "./error.html";
    }

});