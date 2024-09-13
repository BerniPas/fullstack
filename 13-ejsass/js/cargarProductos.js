
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
//limpiarCampos();

// 4. Limpiamos los campos del formulario de otra forma
//formulario.reset();

// 5. Guardamos los productos en el local storage
localStorage.setItem("productos", JSON.stringify(misProductos));

// 6. Vamos a cargar la tabla con los productos
cargarTabla();

});

// función para limpiar los campos del formulario
const limpiarCampos = () => {
    nombreProducto.value = "";
    precioProducto.value = "";
    stockProducto.value = "";
    descripcionProducto.value = "";
    imagenProducto.value = "";
}


// ejemplo de dom con las etiquetas de html
let titulosTabla = document.getElementsByTagName("th");
titulosTabla[1].style.color = "red";
console.log(titulosTabla);

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

    //bodyTabla.innerHTML = "";

    // creamos las filas para cada producto
    let fila = document.createElement('tr');

    // creamos las columnas para cada producto
    let columnaNombre = document.createElement('td');// crea un elemento td de html
    let columnaPrecio = document.createElement('td');
    let columnaStock = document.createElement('td');
    let columnaImagen = document.createElement('td');

    // agregamos los valores a las columnas
    // crear un bucle para agregar los datos del array de productos
    for(let i = 0; i < misProductos.length; i++){
        columnaNombre.innerHTML = misProductos[i].nombre;
        console.log(columnaNombre);
        
        columnaPrecio.innerHTML = misProductos[i].precio;
        console.log(columnaPrecio);
        
        columnaStock.innerHTML = misProductos[i].stock;
        console.log(columnaStock);
        
        columnaImagen.innerHTML = `<img src="${misProductos[i].imagen}" width="100px" />`;
    };

    // voy agregando los elementos a la fila
    fila.appendChild(columnaNombre);
    fila.appendChild(columnaPrecio);
    fila.appendChild(columnaStock);
    fila.appendChild(columnaImagen);

    // subo la fila al body de la tabla
    bodyTabla.appendChild(fila);

};



