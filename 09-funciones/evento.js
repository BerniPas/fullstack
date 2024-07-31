

//sin funciones
let nombre = prompt('Ingrese su nombre: ');
alert('Bienvenido Administrador ' + nombre + ' a la sección de eventos');
console.log('Bienvenido Administrador ' + nombre + ' a la sección de eventos');



//con funciones
function saludarAdmin() {
    let codigo = prompt('Ingrese su Código: ');
    alert('Bienvenido Administrador a la sección de eventos');
    console.log('El código de acces es ' + codigo);
    console.log('Bienvenido Administrador la sección de eventos');
}

//saludarAdmin(); //llamado de la función

const titulo = () =>{
    alert('Hiciste Click en el Título de la Página');
    console.log('Hiciste Click en el Título de la Página');
}


//tarea: crear una pequeña calculadora con funciones, suma y resta