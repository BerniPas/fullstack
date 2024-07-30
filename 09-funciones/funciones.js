

//funciones: estructura de código que ejecuta una tarea específica y 
// puede ser reutilizada en diferentes partes del código.

//son variables globales
let password = '123456789'
let email;

console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');
console.log('Hola Mundo');

console.log('======================================================');

//estructura de una función sin parámetros / argumentos / info que necesita la función
//function saludoInicial() {}

function saludoInicial() {
    console.log('Hola Mundo desde una Función');
}

//las funciones no se ejecutan hasta que son llamadas / invocadas
saludoInicial();


console.log('======================================================');

saludoInicial();
saludoInicial();
saludoInicial();
saludoInicial();


console.log('======================================================');

//funciones con parámetros / argumentos / info que necesita la función
function sumar(numeroUno, numeroDos) {

    let resultado = numeroUno + numeroDos;

    console.log(numeroUno);
    console.log(numeroDos);

    console.log('El resultado de la suma es: ', resultado);
    
}

sumar(10, 20);


console.log('======================================================');

//variables locales: son las que viven dentro de una función y 
//no pueden ser accedidas desde fuera de la función
function sumarDos(x, y, p) {
    
    let resultado = x + y + p;
    
    console.log(x);
    console.log(y);
    
    console.log('El resultado de la suma es: ', resultado);
    
}

sumarDos(50, 100);
console.log(email);

//console.log(x, y); error porque son variables locales

console.log('======================================================');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


console.log('======================================================');

//console.log(index); error porque es una variable local

//arrow funcion = función flecha

const restar = (numeroUno, numeroDos) => {
    
    let resultado = numeroUno - numeroDos;
    
    console.log(numeroUno);
    console.log(numeroDos);

    console.log('El resultado de la resta es: ', resultado);
    
};

restar(100, 50);

console.log('======================================================');

console.log(password);// variables globales => fuera de una función o de un bucle
//console.log(resultado); variables locales => dentro de una función
//console.log(index); variables lascales => dentro de un bucle - for

//funciones con retorno de valor
const dividir = (numeroUno, numeroDos) => {

    let resultado = numeroUno / numeroDos;

    return resultado;

    console.log('Hola Mundo');// no se ejecuta porque está después del return
}


let iva = dividir(100, 10) * 20;


console.log('EL iva a pagar es de ' + iva);


function decirNombre(nombre) {

    let saludo = 'Hola ' + nombre;

    return saludo;
    
}

decirNombre('Juan'); //si se ejecuta, solamente que no lo imprermos en consola o no lo guardamos en una variable

console.log(decirNombre('Juan'));

let saludo = decirNombre('Pepe');

console.log(saludo);

