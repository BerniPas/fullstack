

//declaro las variables
let email;
let password;

//base de datos
let emailDatos = "pepe@gmail.com";
let passwordDatos = "12345678";


const loginUser = () => {

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


}