

let saludo = document.getElementById("bienvenida");


// imprimimos en la pantalla el saludo al cliente que se logueo
// tomamos el dato desde el localstorage: memoria loacal del navegador


saludo.innerHTML = `Bienvenido ${localStorage.getItem("email")}`;


let salir = document.getElementById("salir");

salir.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./login.html";
});