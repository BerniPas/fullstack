
console.log(document);

document.getElementById("email")

//console.log(document.getElementById("email"));

//declaro las variables
let email;
let password;

//base de datos
let emailDatos = "pepe@gmail.com";
let passwordDatos = "12345678";


//1. declaramos una variable para manejar el formulario
let formulario = document.getElementById("formulario");


//2. agregamos un evento al formulario
formulario.addEventListener("submit", function(evento){
    console.log(evento);

    loginUser();

    
});

formulario.addEventListener("submit", (e) =>{

    //3. Evitamos que el formulario envíe datos vacíos
    e.preventDefault();

    //4. invocamos a la función loginUser
    //loginUser();

    //5. O, podemos hacerlo directamente
        
    email = e.target.email.value;
    password = e.target.password.value;

    let futbol = e.target.futbol.value;
    let volley = document.getElementById("volley").value;
    let natacion = document.getElementById("natacion").value;

    let checkFutbol = document.getElementById("futbol").checked;

    console.log(checkFutbol);

    if(checkFutbol){
        console.log("Enviamos a la base de datos futbol seleccionado");
    }
    

    console.log('======================================');
    console.log(futbol);
    console.log(volley);
    console.log(natacion);
    console.log('======================================');
    
    if(email === "" || password === ""){
    
        alert("Complete los campos");
    
        return;
        
    }

    
    
    if(email === emailDatos && password === passwordDatos){
        alert("Usuario logueado");
    
    }else{
        alert("Usuario no logueado");
    }
    
    console.log(email);
    console.log(password);
    
    
    console.log(evento);

});




const loginUser = () => {
    
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    
    if(email === "" || password === ""){
    
        alert("Complete los campos");
    
        return;
        
    }
    
    
    if(email === emailDatos && password === passwordDatos){
        alert("Usuario logueado");
    
    }else{
        alert("Usuario no logueado");
    }
    
    console.log(email);
    console.log(password);
    
    
    console.log(evento);

}

//modoOscuro();
const modoOscuro = () => {
    console.log("Activamos el modo oscuro");

    //tomamos el body
    let fondo = document.getElementById("fondo");

    //tomamos el titulo
    let titulo = document.getElementById("titulo");

    //tomamos el boton	
    let boton = document.getElementById("boton");

    //cambiamos el color de fondo del body
    fondo.style.backgroundColor = "#0D1117";

    //cambiamos el color del titulo
    titulo.style.color = "white";

    //cambiamos el texto del boton
    boton.innerHTML = "Modo Claro";


}



//#0D1117