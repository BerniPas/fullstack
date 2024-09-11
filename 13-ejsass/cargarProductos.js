
/* 
    1. Creamos las variables de nuestra app
 */

let saludo = document.getElementById("bienvenida");

let botonCargar = document.getElementById("botonCargar");
// variables del array de los productos
let misProductos = [];  // array vacio

// Creamos una función para cargar los productos

botonCargar.addEventListener("click", (event) => {

event.preventDefault();

console.log(event);

let formulario = document.getElementById("formulario");


// DOM: Document Object Model = document 

let nombreProducto = document.getElementById("nombreProducto").value;
let precioProducto = document.getElementById("precioProducto").value;
let stockProducto = document.getElementById("stockProducto").value;
let descripcionProducto = document.getElementById("descripcionProducto").value;
let imagenProducto = document.getElementById("imagenProducto").value;



// 2. Creamos un objeto literal con los datos de un producto
let producto = {
    nombre: nombreProducto,
    precio: precioProducto,
    stock: stockProducto,
    descripcion: descripcionProducto,
    imagen: imagenProducto
} 

// 3. Agregamos el producto al array de productos
misProductos.push(producto);

console.log(misProductos);

// 4. Limpiamos los campos del formulario
limpiarCampos();

// 4. Limpiamos los campos del formulario de otra forma
//formulario.reset();

// 5. Guardamos los productos en el local storage
localStorage.setItem("productos", JSON.stringify(misProductos));

});

// función para limpiar los campos del formulario
const limpiarCampos = () => {
    nombreProducto.value = "";
    precioProducto.value = "";
    stockProducto.value = "";
    descripcionProducto.value = "";
    imagenProducto.value = "";
}






// imprimimos en la pantalla el saludo al cliente que se logueo
// tomamos el dato desde el localstorage: memoria local del navegador


saludo.innerHTML = `Bienvenido ${localStorage.getItem("email")}`;


let salir = document.getElementById("salir");

salir.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = "./login.html";
});


// 6. Vramos una función para cargar la tabla con los productos
let botonListar = document.getElementById("botonListar");

botonListar.addEventListener("click", (e) => {
    e.preventDefault();
    cargarTabla();
});

const cargarTabla = () => {

    let bodyTabla = document.getElementById("bodyTabla");

    bodyTabla.innerHTML = "";

    let fila = document.createElement('tr');

};
