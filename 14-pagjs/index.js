

// Crear una Página desde JavaScript

// #####################################################################################
// Creamos nuestro header

let header = document.createElement("header"); // seleccionamos el header

let nav = document.createElement("nav"); // creamos un elemento nav

let ul = document.createElement("ul"); // creamos un elemento ul

ul.className = "listas"; // le damos una clase al ul

nav.appendChild(ul); // agregamos el ul al nav

// creamos un array con los elementos de nuestro menú
const items = ["Inicio", "Productos", "Contacto", "Nosotros"];

// recorremos el array
/* items.forEach(item => {
    let li = document.createElement("li"); // creamos un elemento li
    li.innerHTML = item; // le agregamos el texto al li
    ul.appendChild(li); // lo agregamos al ul
});
 */

// creamos los elementos li de forma individual

let liIncio = document.createElement("li"); // creamos un elemento li
let liProductos = document.createElement("li"); // creamos un elemento li
let liContacto = document.createElement("li"); // creamos un elemento li
let liNosotros = document.createElement("li"); // creamos un elemento li

liIncio.innerHTML = "Inicio"; // le agregamos el texto al li
liProductos.innerHTML = "Productos"; // le agregamos el texto al li
liContacto.innerHTML = "Contacto"; // le agregamos el texto al li
liNosotros.innerHTML = "Nosotros"; // le agregamos el texto al li

ul.appendChild(liIncio); // lo agregamos al ul
ul.appendChild(liProductos); // lo agregamos al ul
ul.appendChild(liContacto); // lo agregamos al ul
ul.appendChild(liNosotros); // lo agregamos al ul

nav.style.backgroundColor = "black"; // le damos estilo al nav
nav.style.padding = "10px";

/* ul.style.display = "flex"; // le damos estilo al ul
ul.style.justifyContent = "space-around";
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.color = "white"; */

header.appendChild(nav); // lo agregamos al body

document.body.appendChild(header); // lo agregamos al body

// #####################################################################################

let titulo = document.createElement("h1"); // creamos un elemento h1


titulo.id = "titulo"; // le damos un id al título
titulo.className = "text-center"; // le damos una clase al título de bootstrap

titulo.innerHTML = "Ecommerce de Tecnología"; // le agregamos un texto

titulo.style.color = "blue"; // le damos estilo al título de mi página
//titulo.style.textAlign = "center";
titulo.style.fontFamily = "Arial";
titulo.style.marginTop = "35px";

document.body.appendChild(titulo); // lo agregamos al body


// #####################################################################################



