

// Crear una Página desde JavaScript

// #####################################################################################
// Creamos nuestro header

let header = document.createElement("header"); // seleccionamos el header

let nav = document.createElement("nav"); // creamos un elemento nav

let ul = document.createElement("ul"); // creamos un elemento ul

ul.className = "listas"; // le damos una clase al ul

nav.appendChild(ul); // agregamos el ul al nav

// creamos un array con los elementos de nuestro menú
const items = ["Inicio", "Practico 07", "Contacto", "Nosotros"];

// recorremos el array
/* items.forEach(item => {
    let li = document.createElement("li"); // creamos un elemento li
    li.innerHTML = item; // le agregamos el texto al li
    ul.appendChild(li); // lo agregamos al ul
});
 */

// creamos los elementos li de forma individual

let liInicio = document.createElement("li"); // creamos un elemento li
let liPractico = document.createElement("li"); // creamos un elemento li
let liContacto = document.createElement("li"); // creamos un elemento li
let liNosotros = document.createElement("li"); // creamos un elemento li

/*
le sacamos el texto a los elementos li y le agregamos a las anclas
liIncio.innerHTML = "Inicio"; // le agregamos el texto al li
liPractico.innerHTML = "Práctico 07"; // le agregamos el texto al li
liContacto.innerHTML = "Contacto"; // le agregamos el texto al li
liNosotros.innerHTML = "Nosotros"; // le agregamos el texto al li
*/
// creamos las anclas para los elementos li
let aInicio = document.createElement("a"); // creamos un elemento a
let aPractico = document.createElement("a"); // creamos un elemento a
let aContacto = document.createElement("a"); // creamos un elemento a
let aNosotros = document.createElement("a"); // creamos un elemento a

// le agregamos el texto a los elementos a
//aInicio.innerHTML = "Inicio"; // le agregamos el texto al a
//aInicio.innerText = "Inicio"; // le agregamos el texto al a
aInicio.textContent = "Inicio"; // le agregamos el texto al a
aPractico.innerHTML = "Práctico 07"; // le agregamos el texto al a
aContacto.innerHTML = "Contacto"; // le agregamos el texto al a
aNosotros.innerHTML = "Nosotros"; // le agregamos el texto al a

// agregamos los href a los elementos a
aInicio.href = "./index.html"; // le agregamos el href al a
aPractico.href = "./practico07.html"; // le agregamos el href al a
aContacto.href = ""; // le agregamos el href al a
aNosotros.href = ""; // le agregamos el href al a

liInicio.appendChild(aInicio); // lo agregamos al li
liPractico.appendChild(aPractico); // lo agregamos al li
liContacto.appendChild(aContacto); // lo agregamos al li
liNosotros.appendChild(aNosotros); // lo agregamos al li


ul.appendChild(liInicio); // lo agregamos al ul
ul.appendChild(liPractico); // lo agregamos al ul
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



